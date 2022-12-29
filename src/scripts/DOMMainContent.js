export class DOMMainContent {
  constructor(eventHandler) {
    this.eventHandler = eventHandler
    this.feelsElm = document.querySelector('.info__feels-like')
    this.feelsUnitsElm = document.querySelector('.info__feels-units')
    this.locationElm = document.querySelector('.info__location')
    this.temperatureElm = document.querySelector('.info__temperature')
    this.unitsElm = document.querySelector('.info__units')
  }

  update(feels, temp, loc) {
    this.feelsElm.innerText = 'Feels like ' + feels
    this.feelsUnitsElm.innerText = '°' + this.eventHandler.units
    this.temperatureElm.innerText = temp
    this.locationElm.innerText = loc
    this.unitsElm.innerText = '°' + this.eventHandler.units
  }
}
