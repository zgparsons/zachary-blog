const axios = require('axios');
const json = require("rollup-plugin-json");

const key = 'ur912122-86ff145aba7ac93f57fdd971'; // Read-only API key. Can be used safely in public projects.

async function postRequest() {
    await axios.post('https://api.uptimerobot.com/v2/getMonitors', {
        api_key: key,
        format: 'json',
        logs: 1
    })
    .then(function (response) {
        // console.log(response.data);
        let data = response.data;
        let url = data.monitors[0].url;
        let status = data.monitors[0].status;
        let logs = data.monitors[0].logs;
        let upTime = data.monitors[0].all_time_uptime_ratio;
        console.log(url);
        console.log(status);
        console.log(logs);
        console.log(upTime);
    })
    .catch(function (error) {
        console.log(error);
    });
}

postRequest();