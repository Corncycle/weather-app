import { queryByCity } from './apiQuery.js'
import { DOMMainContent } from './DOMMainContent.js'
import { fahrToCel } from './util.js'

export class EventHandler {
  constructor() {
    this.units = 'C'
    this.domMainContent = new DOMMainContent(this)
  }

  async handleQuery(city) {
    const res = await queryByCity(city)
    console.log(res)
    if (!res) {
      // TODO: handle error here
      console.log('Bad request.')
      return
    }
    const [feels, temp, loc] = res
    this.savedFeels = feels
    this.savedTemp = temp
    this.savedLoc = loc
    this.submitToDOM(feels, temp, loc)
  }

  submitToDOM(feels, temp, loc) {
    if (this.units === 'C') {
      this.domMainContent.update(fahrToCel(feels), fahrToCel(temp), loc)
    } else {
      this.domMainContent.update(feels, temp, loc)
    }
  }

  toggleUnits() {
    if (this.units === 'C') {
      this.units = 'F'
    } else {
      this.units = 'C'
    }
    this.submitToDOM(this.savedFeels, this.savedTemp, this.savedLoc)
  }
}
