import * as HomePage from '../viewpage/home_page.js'
import * as ViewPage from '../viewpage/view_page.js'

export const routePathname = {
    HOME: '/',
    VIEW: '/viewall',

}

export const routes = [
    { pathname: routePathname.HOME, page: HomePage.home_page },
    { pathname: routePathname.VIEW, page: ViewPage.view_page },


]

export function routing(path) {
    const route = routes.find(r => r.pathname == path)
    if (route) route.page()
    else routes[0].page()
}