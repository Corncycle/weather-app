import { queryByCity } from './apiQuery.js'
import { DOMError } from './DOMError.js'
import { DOMMainContent } from './DOMMainContent.js'
import { fahrToCel } from './util.js'

export class EventHandler {
  constructor() {
    this.units = 'F'
    this.domMainContent = new DOMMainContent(this)
    this.domError = new DOMError(this)
  }

  async handleQuery(city) {
    try {
      this.domMainContent.showLoading()
      const res = await queryByCity(city)
      const [feels, temp, loc, weather] = res
      this.savedFeels = feels
      this.savedTemp = temp
      this.savedLoc = loc
      this.savedWeather = weather
      this.submitToDOM(feels, temp, loc, weather)
    } catch (e) {
      this.domError.raiseError(e.message)
      this.submitToDOM(
        this.savedFeels,
        this.savedTemp,
        this.savedLoc,
        this.savedWeather
      )
    }
  }

  submitToDOM(feels, temp, loc, weather) {
    if (this.units === 'C') {
      this.domMainContent.update(
        fahrToCel(feels),
        fahrToCel(temp),
        loc,
        weather
      )
    } else {
      this.domMainContent.update(feels, temp, loc, weather)
    }
  }

  toggleUnits() {
    if (this.units === 'C') {
      this.units = 'F'
    } else {
      this.units = 'C'
    }
    this.submitToDOM(
      this.savedFeels,
      this.savedTemp,
      this.savedLoc,
      this.savedWeather
    )
  }
}
