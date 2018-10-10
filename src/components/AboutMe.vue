<template>
  <v-parallax
    dark
    height="600"
    src="https://wallpaper.wiki/wp-content/uploads/2017/06/Pictures-Download-Hipster-Backgrounds.jpg"
  >
    <v-layout
      class="container"
      align-center
      column
      justify-center
    >
      <img id="headshot" src="../assets/headshot.jpg" alt="Keith Jones Headshot">
      <h1 heavy>Full-Stack Developer</h1>
      <br>
      <h3 class="subheading font-italic">
        I am a recent graduate from the Web Development Immersive program at Galvanize Inc. in the greater Denver area. The WDI is a six month, full time immersive program that specializes in teaching its students the skills necessary to utilize cutting edge technologies that are in line with, or even slightly ahead of, the industry standard.
      </h3>
      <br />
      <h3 class="subheading font-italic">
        Before beginning at Galvanize, Inc., I was an experienced sales and customer service professional with a proven ability to excel in fast-paced, ever-changing environments. I am always looking to educate myself and seek out new challenges. My career opportunities have taught me the importance of being freestanding, yet team-minded.
      </h3>
    </v-layout>
  </v-parallax>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  text-shadow: 1px 1px rgb(45,45,45);
}
h3 {
  text-shadow: 1px 1px rgb(45,45,45);
}
#headshot {
  border-radius: 50%;
  max-height: 200px;
  max-width: 200px;
  margin-bottom: 3em;
}

</style>
