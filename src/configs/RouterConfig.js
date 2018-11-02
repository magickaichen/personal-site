import AboutPage from "../pages/About";
import BioPage from "../pages/sub-pages/BioPage";
import ResumePage from "../pages/sub-pages/Resume";
import ThingsPage from "../pages/sub-pages/Things";
import PortfolioPage from "../pages/Portfolio";


const RouteConfig = [
  {
    path: "/home",
    component: AboutPage,
    routes: [
      {
        path: "/home/bio",
        component: BioPage
      },
      {
        path: "/home/resume",
        component: ResumePage
      },
      {
        path: "/home/fun-things",
        component: ThingsPage
      }
    ]
  },
  {
    path: "/portfolio",
    component: PortfolioPage
  }
]

export default RouteConfig;