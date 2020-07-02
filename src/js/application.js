import * as Cart from './Cart'
import * as MenuMobile from './MenuMobile'
import * as SlideImages from './SlideShowImageList'
import * as Header from './Header'
import * as HandleTabs from './HandleTabs'

window.addEventListener('DOMContentLoaded', function () {
  MenuMobile.toggleCollapseMenu()
  MenuMobile.toggleSubMenu()

  SlideImages.showSlides()

  Header.scrollPage()
  Header.searchBar()
  Header.closeModal()

  Cart.handleCart()
  Cart.removeProduct()

  HandleTabs.hover()
})
