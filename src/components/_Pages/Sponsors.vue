<template>
  <div>
    <div class="row">
      <div class="container">
        <h5>PSA-Edmonton is made possible through the generosity and kindness of our sponsors:</h5>
      </div>

      <div class="container text-center">
        <h2>
          Crosstown Auto Centre
          <br>
          <small>Major League Sponsor</small>
        </h2>
        
        <p class="text-primary text-left">
          Crosstown has been a major sponsor of the basketball league since 2010 under the leadership of
          Joe Medina and Chester Tiongson. Together, they have helped elevate the level of the organization through
          their tireless participation and pouring of financial committment to help sustain the league's operations.
        </p>
        <p class="text-primary text-left">
          Crosstown is also the premiere car dealership in Edmonton. With offices and showroom easily accessible and 
          located at 15520 123 Ave NW, Edmonton, AB T5V 1K8. Come, visit and experience the true Filipino hospitality
          when making your decistionto purchase your vehicle.
        </p>
        <br />
        <img class="img img-responsive" src="static/img/crosstown.jpg">
        <br />
        <br />
        <p>
          <a href="http://www.crosstownautocentre.com/" class="btn btn-info" target="_blank">Visit Company Site</a>
        </p>
      </div>
      
      <hr />

      <div class="container-fluid alert alert-success" role="alert">
        <h4>Interested in Sponsoring?</h4>
        <p>
          Sponsorship opens a lot of opportunities for your business to be identified and patronized in the 
          Filipino community. Come see us and we will discuss sponsorship options for that would yield the 
          best return for your business.
        </p>
        <br />
        <p>
          Get in touch with any league official as listed in the 
          <router-link :to="{path:'/about?article=psa-officials'}">PSA Officials Directory</router-link>
          <!-- <a href="/About/#officials-directory" target="_blank">officials directory section</a>. -->
        </p>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    mounted: function () {
      this.$nextTick(function () {
        var element = document.getElementById('navbar-header')
        if (element) {
          element.scrollIntoView(true)
        }
      })
    }
  }
</script>

<style>
  .sponsor-post-meta {
    margin-bottom: 1.25rem;
    color: #999;
  }
</style>
