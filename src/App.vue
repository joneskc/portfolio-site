<template>
  <div id="app">
    <TopNav />
    <AboutMe />
    <Resume />
  </div>
</template>

<script>
import AboutMe from './components/AboutMe'
import TopNav from './components/TopNav'
import Resume from './components/Resume'

export default {
  name: 'App',
  components: {
    AboutMe,
    TopNav,
    Resume
  }
}
</script>

<style>
#app {
  height: 200vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
