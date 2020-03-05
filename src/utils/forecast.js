const request = require('request')
//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)
const forecast = (latitude,longitude,callback) => {
    const url = `https://api.darksky.net/forecast/2f7213c20afb96182077b27f0987e850/${latitude},${longitude}?exclude=hourly`
    console.log(url)
    request({url, json: true},(error,{body}) => {
        if(error) {
            callback('Unable to connect to weather service',undefined)
        }
        else if (body.error) {
            callback('Unable to find location',undefined)
        }
        else{
            callback(undefined, `${body.daily.data[0].summary}. It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain.`)
        }
    })
}

// request({url: url, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service.')
//     }
//     else if (body.error){
//         console.log('Unable to find location.')
//     }
//     else{
//         console.log(body.daily.data[0].summary, `It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain.`)
//     }
// })

module.exports = forecast