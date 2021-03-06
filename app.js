const express = require('express');
const http = require("https");
const app = express();

app.get('/', (req1, res1) => {
    const options = {
        "method": "GET",
        "hostname": "free-nba.p.rapidapi.com",
        "port": null,
        "path": "/players?page=0&per_page=25",
        "headers": {
            "x-rapidapi-key": "1b0c61fe5fmshc8b265854485f54p1a548ajsn2f2c78cdd3d2",
            "x-rapidapi-host": "free-nba.p.rapidapi.com",
            "useQueryString": true
        }
    };

    const req = http.request(options, function (res) {
        const chunks = [];

        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res.on("end", function () {
            const body = Buffer.concat(chunks);
            const nbaApp = JSON.parse(body);
            const firstName = nbaApp.data[2].first_name;
            const lastName = nbaApp.data[2].last_name;
            res1.send("this is " + firstName + lastName);
        });
    });

    req.end();
})

app.listen(3000, () => {
    console.log("we are live");
})