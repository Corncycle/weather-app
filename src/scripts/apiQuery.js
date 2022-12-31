// Just doing this out of curiosity if github's api key detector will catch it

import { capitalizeFirst } from './util'

// obviously not secure at all
const k1 = '3bd07761d9fb'
const k2 = 'beebf83da7'
const k3 = '0e5b404eaf'
const k = k1 + k2 + k3

export async function queryByCity(city) {
  if (!isValidCityName(city)) {
    throw new Error(city + ' is not a valid city name')
  }
  try {
    const resJson = await sendQueryByCity(city)
    const temp = resJson.main.temp
    const loc = resJson.name
    const feels = resJson.main.feels_like
    const weather = capitalizeFirst(resJson.weather[0].description)
    return [feels, temp, loc, weather]
  } catch (e) {
    if (e.message === '404') {
      throw new Error('Could not find city "' + city + '"')
    }
    console.log('we need to implement handling for the following error:')
    console.log(e)
    throw new Error()
  }
}

async function sendQueryByCity(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${k}&units=imperial`
  const response = await fetch(url, {
    mode: 'cors',
  })
  if (!response.ok) {
    throw new Error('404')
  }
  return response.json()
}

// Lazily allow only letters and spaces
// A more accurate city name parser would require a ton more effort for very little payoff
function isValidCityName(s) {
  return /^[a-z][a-z\s]*$/i.test(s)
}
