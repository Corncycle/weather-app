export class DOMMainContent {
  constructor(eventHandler) {
    this.eventHandler = eventHandler
    this.containerElm = document.querySelector('.info-container')
    this.feelsElm = document.querySelector('.info__feels-like')
    this.feelsUnitsElm = document.querySelector('.info__feels-units')
    this.locationElm = document.querySelector('.info__location')
    this.temperatureElm = document.querySelector('.info__temperature')
    this.unitsElm = document.querySelector('.info__units')

    this.weatherElm = document.querySelector('.secondary-info__weather')

    this.loadingElm = document.querySelector('.loading-container')
  }

  update(feels, temp, loc, weather) {
    this.feelsElm.innerText = 'Feels like ' + feels
    this.feelsUnitsElm.innerText = '°' + this.eventHandler.units
    this.temperatureElm.innerText = temp
    this.locationElm.innerText = loc
    this.unitsElm.innerText = '°' + this.eventHandler.units

    this.weatherElm.innerText = weather
    this.hideLoading()
  }

  showLoading() {
    this.loadingElm.classList.remove('info-container--disabled')
    this.containerElm.classList.add('info-container--disabled')
  }

  hideLoading() {
    this.loadingElm.classList.add('info-container--disabled')
    this.containerElm.classList.remove('info-container--disabled')
  }
}
