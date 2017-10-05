<template>
  <div>
    <div class="row">

      <div class="container">
        <div v-for="g in gallery" :key="g.id" class="container-fluid">
          <h1 class="gallery-title">{{ g.title }}</h1>
          <p class="lead gallery-description">
            {{ g.desc }}
          </p>

          <div class="responsive" v-for="img in g.images" :key="img.name">
            <div class="gallery">
              <img :src="'static/img/gallery/' + img.name" width="300" height="200">
              <div class="desc">{{ img.desc }}</div>
            </div>
          </div>

          <hr />
        </div>

        <!--<div class="col-md-12">
          <ul class="zzzslides">
            <input type="radio" name="radio-btn" id="img-1" checked >
            <li class="zzzslide-container">
              <div class="zzzslide">
                <img class="img-responsive" src="static/img/gallery/01.jpg">
              </div>
              <div class="nav">
                <label for="img-7" class="prev">&#x2039;</label>
                <label for="img-2" class="next">&#x203a;</label>
              </div>
            </li>

            <input type="radio" name="radio-btn" id="img-2" >
            <li class="zzzslide-container">
              <div class="zzzslide">
                <img class="img-responsive" src="static/img/gallery/02.jpg" >
              </div>
              <div class="nav">
                <label for="img-1" class="prev">&#x2039;</label>
                <label for="img-3" class="next">&#x203a;</label>
              </div>
            </li>

            <input type="radio" name="radio-btn" id="img-3" >
            <li class="zzzslide-container">
              <div class="zzzslide">
                <img class="img-responsive" src="static/img/gallery/03.jpg" >
              </div>
              <div class="nav">
                <label for="img-2" class="prev">&#x2039;</label>
                <label for="img-4" class="next">&#x203a;</label>
              </div>
            </li>

            <input type="radio" name="radio-btn" id="img-4">
            <li class="zzzslide-container">
              <div class="zzzslide">
                <img class="img-responsive" src="static/img/gallery/04.jpg" >
              </div>
              <div class="nav">
                <label for="img-3" class="prev">&#x2039;</label>
                <label for="img-5" class="next">&#x203a;</label>
              </div>
            </li>

            <input type="radio" name="radio-btn" id="img-5">
            <li class="zzzslide-container">
              <div class="zzzslide">
                <img class="img-responsive" src="static/img/gallery/05.jpg" >
              </div>
              <div class="nav">
                <label for="img-4" class="prev">&#x2039;</label>
                <label for="img-6" class="next">&#x203a;</label>
              </div>
            </li>

            <input type="radio" name="radio-btn" id="img-6">
            <li class="zzzslide-container">
              <div class="zzzslide">
                <img class="img-responsive" src="static/img/gallery/06.jpg" >
              </div>
              <div class="nav">
                <label for="img-5" class="prev">&#x2039;</label>
                <label for="img-1" class="next">&#x203a;</label>
              </div>
            </li>

            <input type="radio" name="radio-btn" id="img-7">
            <li class="zzzslide-container">
              <div class="zzzslide">
                <img class="img-responsive" src="static/img/gallery/07.jpg" >
              </div>
              <div class="nav">
                <label for="img-6" class="prev">&#x2039;</label>
                <label for="img-8" class="next">&#x203a;</label>
              </div>
            </li>

            <input type="radio" name="radio-btn" id="img-8">
            <li class="zzzslide-container">
              <div class="zzzslide">
                <img class="img-responsive" src="static/img/gallery/08.jpg" >
              </div>
              <div class="nav">
                <label for="img-7" class="prev">&#x2039;</label>
                <label for="img-9" class="next">&#x203a;</label>
              </div>
            </li>

            <input type="radio" name="radio-btn" id="img-9">
            <li class="zzzslide-container">
              <div class="zzzslide">
                <img class="img-responsive" src="static/img/gallery/09.jpg" >
              </div>
              <div class="nav">
                <label for="img-8" class="prev">&#x2039;</label>
                <label for="img-10" class="next">&#x203a;</label>
              </div>
            </li>

            <input type="radio" name="radio-btn" id="img-10">
            <li class="zzzslide-container">
              <div class="zzzslide">
                <img class="img-responsive" src="static/img/gallery/10.jpg" >
              </div>
              <div class="nav">
                <label for="img-9" class="prev">&#x2039;</label>
                <label for="img-1" class="next">&#x203a;</label>
              </div>
            </li>

            <li class="nav-dots">
              <label for="img-1" class="nav-dot" id="img-dot-1"></label>
              <label for="img-2" class="nav-dot" id="img-dot-2"></label>
              <label for="img-3" class="nav-dot" id="img-dot-3"></label>
              <label for="img-4" class="nav-dot" id="img-dot-4"></label>
              <label for="img-5" class="nav-dot" id="img-dot-5"></label>
              <label for="img-6" class="nav-dot" id="img-dot-6"></label>
              <label for="img-7" class="nav-dot" id="img-dot-7"></label>
              <label for="img-8" class="nav-dot" id="img-dot-8"></label>
              <label for="img-9" class="nav-dot" id="img-dot-9"></label>
              <label for="img-10" class="nav-dot" id="img-dot-10"></label>
            </li>
          </ul>
        </div>-->

      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'Gallery',

      data () {
        return {
          gallery: [
            {
              id: 1,
              title: 'PSA & Crosstown Auto U-17 Basketball Camp',
              desc: 'Photos from the successful basketball camp held at Saville Sports ',
              images: [
                { name: 'camp-01.jpg', desc: 'PSA & Crosstown Auto U-17 Basketball Camp' },
                { name: 'camp-02.jpg', desc: 'PSA & Crosstown Auto U-17 Basketball Camp' },
                { name: 'camp-03.jpg', desc: 'PSA & Crosstown Auto U-17 Basketball Camp' },
                { name: 'camp-04.jpg', desc: 'PSA & Crosstown Auto U-17 Basketball Camp' },
                { name: 'camp-05.jpg', desc: 'PSA & Crosstown Auto U-17 Basketball Camp' },
                { name: 'camp-06.jpg', desc: 'PSA & Crosstown Auto U-17 Basketball Camp' }
              ]
            },
            {
              id: 2,
              title: 'Winter/Spring League 2017',
              desc: 'Photos from the recently concluded Winter / Spring league.',
              images: [
                { name: '01.jpg', desc: 'Division 1 Champion: Crooks' },
                { name: '02.jpg', desc: 'Division 1 Runner Up: X-Men' },
                { name: '03.jpg', desc: 'Division 2 Champion: Tune Squad' },
                { name: '04.jpg', desc: 'Division 2 Runner Up: Eswar' },
                { name: '05.jpg', desc: 'Super Master Champion:' },
                { name: '06.jpg', desc: 'Super Master Runner Up: Crosstown Auto' },
                { name: '07.jpg', desc: 'Master I Champion: Crosstown Auto' },
                { name: '08.jpg', desc: 'Master I Runner Up: Quickly Bubble Tea' },
                { name: '09.jpg', desc: 'Master II Champion: Wolverines' },
                { name: '10.jpg', desc: 'Master II Runner Up:' }
              ]
            }
          ]
        }
      }
    }
</script>

<style>
  @import url(https://fonts.googleapis.com/css?family=Varela+Round);

  div.gallery {
      border: 1px solid #ccc;
  }

  div.gallery:hover {
      border: 1px solid #777;
  }

  div.gallery img {
      width: 100%;
      height: auto;
  }

  div.desc {
      padding: 15px;
      text-align: center;
  }

  * {
      box-sizing: border-box;
  }

  .responsive {
      padding-top: 5px;
      padding-right: 5px;
      padding-bottom: 5px;
      padding-left: 5px;
      float: left;
      width: 33.33333%;
  }

  @media only screen and (max-width: 800px){
      .responsive {
          width: 49.99999%;
          margin: 6px 0;
      }
  }

  @media only screen and (max-width: 500px){
      .responsive {
          width: 100%;
      }
  }

  .clearfix:after {
      content: "";
      display: table;
      clear: both;
  }
</style>
