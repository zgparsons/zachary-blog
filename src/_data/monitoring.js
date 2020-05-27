const fetch = require('node-fetch');
const flatcache = require('flat-cache');
const path = require('path');

const key = 'ur912122-86ff145aba7ac93f57fdd971'; // Read-only API key. Can be used safely in public projects.

// Get date and time:
let today = new Date();
let date = `${today.getUTCDate()}-${today.getUTCMonth()+1}-${today.getUTCFullYear()}`;
let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

function getCacheKey() {
    return `${today.getUTCFullYear()}-${today.getUTCMonth() + 1}-${today.getUTCDate()}`;
}

module.exports = async function() {
    let cache = flatcache.load('monitor-results', path.resolve('./_datacache'));
    let cacheKey = getCacheKey();
    let cachedData = cache.getKey(cacheKey);
    if (!cachedData) {
        console.log("Fetching data from Uptime Robot");

        // Set options:
        let body = {
            api_key: key,
            format: 'json',
            logs: 1
        };
        // API Call and Response
        let newData = await fetch("https://api.uptimerobot.com/v2/getMonitors", {
            method: 'post',
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'}
        })
            .then(res => res.json())
            .then(json => {
                
                let hours = Math.floor(json.monitors[0].logs[0].duration / 3600);

                return {
                    url: json.monitors[0].url,
                    status: json.monitors[0].status,
                    logs: json.monitors[0].logs,
                    hours: hours,
                    date: date,
                    time: time
                }
            })
            .catch(err => console.log(err));
        cache.setKey(cacheKey, newData);
        cache.save();
        return newData;
    }
    return cachedData;
};