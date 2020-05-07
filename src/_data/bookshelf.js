const dotenv = require('dotenv');
dotenv.config();
const fetch = require('node-fetch');
const xml2js = require('xml2js');

const key = process.env.GRKEY;
const id = 41056081;

module.exports = async function() {

    let books = [];
    
    await fetch(`https://www.goodreads.com/review/list?v=2&id=${id}&shelf=read&key=${key}`)
        .then(res => res.text())
        .then(body => {
            xml2js.parseString(body, function (err, res) {
                if (err) console.log(err);
                console.log('Getting Book List from GoodReads API');
                // console.log(res.GoodreadsResponse.reviews[0].review)
                // console.log(res.GoodreadsResponse.reviews[0].review[0])
                // console.log(res.GoodreadsResponse.reviews[0].review[0].book)
                
                let bookList = res.GoodreadsResponse.reviews[0].review;
                for (let i=0; i < bookList.length; i++) {
                    books.push({
                        title: bookList[i].book[0].title[0],
                        author: bookList[i].book[0].authors[0].author[0].name[0],
                        isbn: bookList[i].book[0].isbn[0],
                        image_url: bookList[i].book[0].image_url[0],
                        small_image_url: bookList[i].book[0].image_url[0],
                        large_image_url: bookList[i].book[0].large_image_url[0],
                        link: bookList[i].book[0].link[0],
                        date_started: bookList[i].date_added[0],
                        date_finished: bookList[i].read_at[0],
                        rating: bookList[i].rating[0]
                    })
                }
            })
        }).catch(err => console.log(err));
    console.log(books[8].isbn);
    return books;
}