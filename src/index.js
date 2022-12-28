import './stylesheets/meyer-reset.css'
import './stylesheets/style.css'
import { queryByCity } from './scripts/apiQuery'

const btn = document.querySelector('.query-button')
const lousyBtn = document.querySelector('.lousy-query-button')
const feelsElt = document.querySelector('.description')
const tempElt = document.querySelector('.temperature')
const locElt = document.querySelector('.location')

btn.addEventListener('click', async (e) => {
  const res = await queryByCity('Woodinville')
  if (!res) {
    feelsElt.innerText = 'Unknown'
    tempElt.innerText = -1
    locElt.innerText = 'Nowhere'
    return
  }
  const [feels, temp, loc] = res
  feelsElt.innerText = 'Feels like ' + feels
  tempElt.innerText = temp
  locElt.innerText = loc
})

lousyBtn.addEventListener('click', async (e) => {
  const res = await queryByCity('safsdaf8$#%# 3j4%#$JKDSJFasf984')
  if (!res) {
    feelsElt.innerText = 'Unknown'
    tempElt.innerText = -1
    locElt.innerText = 'Nowhere'
    return
  }
  const [feels, temp, loc] = res
  feelsElt.innerText = 'Feels like ' + feels
  tempElt.innerText = temp
  locElt.innerText = loc
})
