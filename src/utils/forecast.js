const request = require('request')

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
            console.log(body.daily.data[0])
            callback(undefined, `${body.daily.data[0].summary}. It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain.`)
        }
    })
}


module.exports = forecast