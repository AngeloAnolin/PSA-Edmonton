import Sidebar from './SideBar.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: 'Home',
      icon: 'fa fa-home',
      path: '/home'
    },
    {
      name: 'News',
      icon: 'fa fa-newspaper-o',
      path: '/news'
    },
    {
      name: 'Teams',
      icon: 'fa fa-users',
      path: '/teams'
    },
    {
      name: 'Sponsors',
      icon: 'fa fa-briefcase',
      path: '/sponsors'
    },
    {
      name: 'Schedules',
      icon: 'fa fa-calendar',
      path: '/schedules'
    },
    {
      name: 'Results',
      icon: 'fa fa-list-ol',
      path: '/results'
    },
    {
      name: 'Gallery',
      icon: 'fa fa-camera-retro',
      path: '/gallery'
    },
    {
      name: 'About',
      icon: 'fa fa-address-book-o',
      path: '/about'
    }
  ],
  displaySidebar (value) {
    this.showSidebar = value
  }
}

const SidebarPlugin = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    })
    Vue.component('side-bar', Sidebar)
  }
}

export default SidebarPlugin

/*
,
    {
      name: 'Dashboard',
      icon: 'ti-panel',
      path: '/admin/overview'
    },
    {
      name: 'User Profile',
      icon: 'ti-user',
      path: '/admin/stats'
    },
    {
      name: 'Table List',
      icon: 'ti-view-list-alt',
      path: '/admin/table-list'
    },
    {
      name: 'Typography',
      icon: 'ti-text',
      path: '/admin/typography'
    },
    {
      name: 'Icons',
      icon: 'ti-pencil-alt2',
      path: '/admin/icons'
    },
    {
      name: 'Maps',
      icon: 'ti-map',
      path: '/admin/maps'
    },
    {
      name: 'Notifications',
      icon: 'ti-bell',
      path: '/admin/notifications'
    }
*/
