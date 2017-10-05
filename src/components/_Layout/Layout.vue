<template>
  <div class="wrapper">

    <!-- Page Sidebar -->
    <side-bar type="sidebar" :sidebar-links="$sidebar.sidebarLinks">
    </side-bar>

    <!-- Used for the Notifications -->
    <notifications>
    </notifications>

    <div class="main-panel">
      <!-- Top Navigation Bar -->
      <navbar-component>
      </navbar-component>

      <!-- Page Component  -->
      <content-component @click.native="toggleSidebar">
      </content-component>

      <!-- Footer Component -->
      <footer-component>
      </footer-component>
    </div>
  </div>
</template>
<style lang="scss">

</style>

<script>
  import NavbarComponent from './Navbar.vue'
  import FooterComponent from './Footer.vue'
  import ContentComponent from './Content.vue'

  export default {
    components: {
      NavbarComponent,
      FooterComponent,
      ContentComponent
    },

    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }
</script>
