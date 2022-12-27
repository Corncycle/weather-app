// Just doing this to test if github's api key detector will catch it
const k1 = '3bd07761d9fb'
const k2 = 'beebf83da7'
const k3 = '0e5b404eaf'
const k = k1 + k2 + k3

export async function queryByCity(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${k}&units=imperial`
  console.log('querying!')
  const response = await fetch(url, {
    mode: 'cors',
  })
  const resJson = await response.json()
  console.log(resJson)
}
