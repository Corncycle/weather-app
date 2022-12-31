import './stylesheets/meyer-reset.css'
import './stylesheets/style.css'

import './images/loading.svg'

import { EventHandler } from './scripts/EventHandler.js'

const eventHandler = new EventHandler()

eventHandler.handleQuery('Seattle')

const unitsButtons = document.querySelectorAll(
  '.info__units, .info__feels-units'
)
unitsButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    eventHandler.toggleUnits()
  })
})

const cityFormButton = document.querySelector('.city-form__button')
const cityFormText = document.querySelector('.city-form__text')
cityFormButton.addEventListener('click', (e) => {
  if (cityFormText.validity.valid) {
    e.preventDefault()
    eventHandler.handleQuery(cityFormText.value)
    cityFormText.value = ''
  }
})
