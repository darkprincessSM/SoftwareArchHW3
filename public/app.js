import * as Routes from './controller/routes.js'

window.onload = () => {
    const path = window.location.pathname
    Routes.routing(path)
}

window.addEventListener('popstate', e => {
    e.preventDefault()
    const pathname = e.target.location.pathname
    Routes.routing(pathname)
})

import * as HomePage from './viewpage/home_page.js'
import * as ViewPage from './viewpage/view_page.js'
import * as SearchPage from './viewpage/search_page.js'

HomePage.addEventListeners()
ViewPage.addEventListeners()
SearchPage.addEventListeners()