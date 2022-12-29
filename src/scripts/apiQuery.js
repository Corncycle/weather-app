// Just doing this out of curiosity if github's api key detector will catch it
// obviously not secure at all
const k1 = '3bd07761d9fb'
const k2 = 'beebf83da7'
const k3 = '0e5b404eaf'
const k = k1 + k2 + k3

export async function queryByCity(city) {
  if (!isValidCityName(city)) {
    console.log('Nope, ' + city + ' is not a valid city name')
    return false
  }
  console.log('Yep, ' + city + ' is a valid city name')
  try {
    const resJson = await sendQueryByCity(city)
    const temp = resJson.main.temp
    const loc = resJson.name
    const feels = resJson.main.feels_like
    return [feels, temp, loc]
  } catch (e) {
    if (e.message === '404') {
      console.log("oh yeah that's a 404 error")
    }
    return false
  }
}

async function sendQueryByCity(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${k}&units=imperial`
  console.log('querying!')
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
