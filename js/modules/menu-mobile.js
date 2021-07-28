import outsideClick from './outsideclick.js'

export default class MenuMobile {
  constructor(menuBotton, menuList, events) {
    this.menuBotton = document.querySelector(menuBotton)
    this.menuList = document.querySelector(menuList)
    this.openMenu = this.openMenu.bind(this)
    this.activeClass = 'active'
    if (events === undefined) this.events = ['touchstart', 'click']
    else this.events = events
  }

  openMenu(event) {
    event.preventDefault()
    this.menuList.classList.add(this.activeClass)
    this.menuBotton.classList.add(this.activeClass)
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass)
      this.menuBotton.classList.remove(this.activeClass)
    })
  }

  addMenuMobileEvents() {
    this.events.forEach(evento => this.menuBotton.addEventListener(evento, this.openMenu))
  }

  init() {
    if (this.menuBotton && this.menuList) {
      this.addMenuMobileEvents()
    }
    return this
  }
}
