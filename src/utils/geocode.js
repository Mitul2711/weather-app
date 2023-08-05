const request = require('request');

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWl0dWwyNyIsImEiOiJjbGpoNDhqOWEwZjhzM3JydTE4Y3V1ZmlmIn0.Ylhp46jA7LwqGKcYX6LzOA';

    request({url, json: true}, (error, response) => {
        if (error){
            callback('unable to connect to location service!',undefined);
        } else if (response.body.features.length === 0) {
            callback('unable to find loction. Try another search',undefined);
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geoCode;