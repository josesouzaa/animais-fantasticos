export default class ScrollSuvave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links)
    if (options === undefined) {
      this.opitions = { behavior: 'smooth', block: 'start' }
    } else {
      this.opitions = options
    }
    this.scrollToSection = this.scrollToSection.bind(this)
  }

  scrollToSection(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    section.scrollIntoView(this.opitions)
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => link.addEventListener('click', this.scrollToSection))
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent()
    }
    return this
  }
}
