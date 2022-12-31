export class DOMError {
  constructor(eventHandler) {
    this.eventHandler = eventHandler
    this.errorContainerElement = document.querySelector('.error-container')
    this.errorMessageElement = document.querySelector('.error__message')
    this.closeButton = document.querySelector('.error__close')

    this.errorRemoverElement = document.querySelector('.error__remover')
    this.errorRemoverElement.addEventListener('click', (e) => {
      this.closeError()
    })
    this.closeButton.addEventListener('click', (e) => {
      this.closeError()
    })
  }

  raiseError(errorMessage) {
    this.errorMessageElement.innerText = errorMessage
    this.errorContainerElement.classList.remove('error-container--disabled')
  }

  closeError() {
    this.errorContainerElement.classList.add('error-container--disabled')
  }
}
