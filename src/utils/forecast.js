const request = require('request')

const forecast = (latitude, longitude,callback) => {
    const url ='https://api.weatherapi.com/v1/current.json?key=1a7a87abcf124711828160906232806&query=' + latitude + ',' + longitude + '&units=f'

    request({url: url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, "It is currently " + body.current.temp_c + " degrees out.")
        }
    })
}


module.exports = forecast