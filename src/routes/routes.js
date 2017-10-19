// import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'

// Layout
import Layout from '../components/_Layout/Layout.vue'

// Pages
import Home from 'components/_Pages/Home.vue'
import News from 'components/_Pages/News.vue'
import Teams from 'components/_Pages/Teams.vue'
import Sponsors from 'components/_Pages/Sponsors.vue'
import Schedules from 'components/_Pages/Schedules.vue'
import Gallery from 'components/_Pages/Gallery.vue'
import About from 'components/_Pages/About.vue'
import Admin from 'components/_Pages/Admin.vue'

// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages
// import Overview from 'src/components/Dashboard/Views/Overview.vue'
// import UserProfile from 'src/components/Dashboard/Views/UserProfile.vue'
// import Notifications from 'src/components/Dashboard/Views/Notifications.vue'
// import Icons from 'src/components/Dashboard/Views/Icons.vue'
// import Maps from 'src/components/Dashboard/Views/Maps.vue'
// import Typography from 'src/components/Dashboard/Views/Typography.vue'
// import TableList from 'src/components/Dashboard/Views/TableList.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: Home
      },
      {
        path: 'news',
        name: 'news',
        component: News
      },
      {
        path: 'teams',
        name: 'teams',
        component: Teams
      },
      {
        path: 'sponsors',
        name: 'sponsors',
        component: Sponsors
      },
      {
        path: 'schedules',
        name: 'schedules',
        component: Schedules
      },
      {
        path: 'gallery',
        name: 'gallery',
        component: Gallery
      },
      {
        path: 'about',
        name: 'about',
        component: About
      },
      {
        path: 'admin-psa',
        name: 'admin',
        component: Admin
      }
    ]
  },
  // {
  //   path: '/admin',
  //   component: Layout,
  //   redirect: '/admin/stats',
  //   children: [
  //     {
  //       path: 'overview',
  //       name: 'overview',
  //       component: Overview
  //     },
  //     {
  //       path: 'stats',
  //       name: 'stats',
  //       component: UserProfile
  //     },
  //     {
  //       path: 'notifications',
  //       name: 'notifications',
  //       component: Notifications
  //     },
  //     {
  //       path: 'icons',
  //       name: 'icons',
  //       component: Icons
  //     },
  //     {
  //       path: 'maps',
  //       name: 'maps',
  //       component: Maps
  //     },
  //     {
  //       path: 'typography',
  //       name: 'typography',
  //       component: Typography
  //     },
  //     {
  //       path: 'table-list',
  //       name: 'table-list',
  //       component: TableList
  //     }
  //   ]
  // },
  { path: '*', component: NotFound }
]

/*
const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/admin/overview'
  },
  {
    path: '/admin',
    component: Layout,
    redirect: '/admin/stats',
    children: [
      {
        path: 'overview',
        name: 'overview',
        component: Overview
      },
      {
        path: 'stats',
        name: 'stats',
        component: UserProfile
      },
      {
        path: 'notifications',
        name: 'notifications',
        component: Notifications
      },
      {
        path: 'icons',
        name: 'icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'maps',
        component: Maps
      },
      {
        path: 'typography',
        name: 'typography',
        component: Typography
      },
      {
        path: 'table-list',
        name: 'table-list',
        component: TableList
      }
    ]
  },
  { path: '*', component: NotFound }
]
*/

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
