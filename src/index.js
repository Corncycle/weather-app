import './stylesheets/meyer-reset.css'
import './stylesheets/style.css'
import { queryByCity } from './scripts/apiQuery'

const btn = document.querySelector('.query-button')
btn.addEventListener('click', (e) => {
  queryByCity('Woodinville')
})

console.log('hello world')
