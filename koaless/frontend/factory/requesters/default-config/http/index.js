const request = require('request');
const querystring = require('querystring');

let url = null;

const http_requester = {
    compile: config => url = config.url,
    request: data => {
        return new Promise((resolve, reject) => {
            request(`${url}?${querystring.stringify(data)}`, (err, data) => {
                err ? reject(err) : resolve(data.body);
            });
        });
    }
};

module.exports = http_requester;
