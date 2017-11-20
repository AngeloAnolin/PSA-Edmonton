<template>
  <div>
    <div class="row">
      <div class="container">
        <h2>A Brief History</h2>
        <p>
          <strong>Philippine Sports Association - Edmonton</strong> was founded on the summer of 1996
          through the initiative of the founding members, Gary Perpetua and Celso "Jun" Antonio with 
          the main objective of bringing the Filipino community in Edmonton together through the 
          game of basketball. It is the intent of the founding members to provide an avenue for their
          fellow kababayan, an avenue to play the sports of basketball in a fun and competitive environment.
        </p>
        <br />
        <p>
          Starting with only eight (8) teams in its inaugural season, the league held its inaugural game at Father Troy gym,
          located in the Southeast side of the city. In its 21st year, majority of the games are still being 
          held at this gym given its significance to the league and the association in general.
        </p>
        <br />
        <p>
          With the competitiveness and organized manner on how the league is being managed, PSA has grown to more than
          fifty (5) teams spanning different divisions. The league has also attracted a lot of teams and players
          from neighboring cities and towns, such as St. Albert, Morinville, Sherwood Park, Leduc, Camrose, Beaumont and Fort 
          Saskatchewan.
        </p>
        <br />
        <p>
          Adhering to the highest standards in organizing and officiating basketball games, <strong>Philippine Sports 
          Association</strong> promotes fair play and a sense of community for every playing participant, as well as 
          their families and friends who have come to enjoy the games every weekend. 
        </p>
        <br />
        <p>
          Basketball tournaments are generally held twice a year, with the first season aptly named "Fall/Winter" league 
          running from October until January. After the first season, PSA Edmonton takes a short break to allow players to 
          rest and recuperate and enjoy some winter time. The second season called "Winter/Spring" league begins around 
          March and generally runs until June.
        </p>
        <br />
        <p>
          Aside from holding its own league, PSA Edmonton also participates in different tournaments run by other 
          organizations across the country. The association generally selects players from the top teams to compete with 
          other selection teams across different leagues to promote a sense of sportsmanship through Basketball for the
          Filipinos in Canada.
        </p>
        <br />
        <p>
          Philippine Sports Association of Edmonton firmly believes that the same is not possible through the participation of 
          players, supporters, volunteers and generosity of sponsors. As the league continues to grow and promote basketball
          to the Filipino community, its success hinges in the transparency, cooperation and unity of everyone involved.
        </p>
        <br />
        <p class="text-info">
          <small>PSA-Edmonton is a registered non-profit organization in Edmonton, Alberta, Canada</small>
        </p>
      </div>

      <div class="container" id="psa-officials">
        <h2>Current Officials</h2>
        <div class="col-md-4 col-sm-12" v-for="o in officials" :key="o.name">
          <official-card :image-file="o.image" :official-name="o.name" :position="o.position" :contact-phone="o.phone">
          </official-card>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import OfficialCard from 'components/_Plugins/OfficialCard.vue'

  export default {
    components: {
      OfficialCard
    },

    data () {
      return {
        officials: [
          { name: 'Gary Perpetua', position: 'President', image: 'gary.jpg', phone: '###-###-####' },
          { name: 'Celso \'Jun\' Antonio', position: 'Vice-President (Internal)', image: 'jun.jpg', phone: '###-###-####' },
          { name: 'Jovencio Datu', position: 'Vice-President (External)', image: 'joven.jpg', phone: '###-###-####' },
          { name: 'Ariel Nealega', position: 'Secretary and Director', image: 'ariel.jpg', phone: '###-###-####' },
          { name: 'Beth Datu', position: 'Treasurer', image: 'beth.jpg', phone: '###-###-####' },
          { name: 'Charmaine Keillor', position: 'Co-Secretary / Co-Treasurer', image: 'charmaine.jpg', phone: '###-###-####' },
          { name: 'Helary Perpetua', position: 'Co-Secretary / Co-Treasurer', image: 'helary.jpg', phone: '###-###-####' },
          { name: 'Andy Mar \'Floyd\' Eyao', position: 'Public Relations Officer', image: 'floyd.jpg', phone: '###-###-####' },
          { name: 'Joe Simon', position: 'Public Relations Officer', image: 'man.png', phone: '###-###-####' },
          { name: 'Yros Astorga', position: 'Public Relations Officer', image: 'yros.jpg', phone: '###-###-####' },
          { name: 'Michael Gonzales', position: 'Sergeant-At-Arms', image: 'man.png', phone: '###-###-####' },
          { name: 'Francis Liwanag', position: 'Sergeant-At-Arms', image: 'francis.jpg', phone: '###-###-####' },
          { name: 'Anton Flores', position: 'Sergeant-At-Arms', image: 'anton.jpg', phone: '###-###-####' },
          { name: 'Joel Vitales', position: 'Sergeant-At-Arms', image: 'joel.jpg', phone: '###-###-####' },
          { name: 'Angelo Anolin', position: 'Web Developer', image: 'angelo.jpg', phone: '###-###-####' },
          { name: 'Gerald Perpetua', position: 'Social Media Coordinator', image: 'gerald.jpg', phone: '###-###-####' },
          { name: 'Lito Velasco', position: 'Adviser', image: 'man.png', phone: '###-###-####' }
        ]
      }
    },

    mounted: function () {
      this.$nextTick(function () {
        var currentUrl = window.location.hash
        var urlArray = currentUrl.split('?')
        var element = null

        if (urlArray.length > 1) {
          var scrollDiv = urlArray[1]
          scrollDiv = scrollDiv.substr(8)
          element = document.getElementById(scrollDiv)
        } else {
          element = document.getElementById('navbar-header')
        }

        if (element) {
          element.scrollIntoView(true)
        }
      })
    }
  }
</script>

<style>
</style>
