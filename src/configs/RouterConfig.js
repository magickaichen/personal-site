import AboutPage from "../pages/About";
import BioPage from "../pages/sub-pages/BioPage";
import ResumePage from "../pages/sub-pages/Resume";
import PortfolioPage from "../pages/Portfolio";
import StatsPage from "../pages/sub-pages/Stats";


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
        path: "/home/stats",
        component: StatsPage
      }
    ]
  },
  {
    path: "/portfolio",
    component: PortfolioPage
  }
]

export default RouteConfig;