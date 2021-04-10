const dotenv = require('dotenv');
dotenv.config();

const xml2js = require('xml2js');
const Cache = require("@11ty/eleventy-cache-assets");

// GoodReads:
const key = process.env.GRKEY;
const id = 41056081;

module.exports = async function() {

    let books = [];
    
    await Cache(`https://www.goodreads.com/review/list?v=2&id=${id}&shelf=read&key=${key}&per_page=200`, {
        duration: "1d",
        type: "text"
    }).then(body => {
            xml2js.parseString(body, function (err, res) {
                if (err) console.log(err);
                console.log('Getting Book List from GoodReads API');
                
                let bookList = res.GoodreadsResponse.reviews[0].review;

                for (let i=0; i < bookList.length; i++) {

                    books.push({
                        title: bookList[i].book[0].title[0],
                        spinal_title: spinalCase(bookList[i].book[0].title[0]),
                        alt: removePunctuation(bookList[i].book[0].title[0]),
                        author: bookList[i].book[0].authors[0].author[0].name[0],
                        isbn: bookList[i].book[0].isbn[0],
                        image_url: bookList[i].book[0].image_url[0],
                        small_image_url: bookList[i].book[0].image_url[0],
                        large_image_url: bookList[i].book[0].large_image_url[0],
                        link: bookList[i].book[0].link[0],
                        date_started: bookList[i].date_added[0],
                        date_finished: bookList[i].read_at[0],
                        date_updated: bookList[i].date_updated[0],
                        rating: bookList[i].rating[0]
                    })
                }
            })
        }).catch(err => console.log(err));

    return books;
}

function spinalCase(str) {
    str = str.replace(/:/g,'');
    return str
      .split(/\s|_|(?=[A-Z])/)
      .join("-")
      .toLowerCase();
  }

function removePunctuation(str) {
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    return str.replace(/\s{2,}/g," ");
}