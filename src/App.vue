<template>
  <div id="app">
    <TopNav />
    <AboutMe />
    <Resume />
    <Projects />
  </div>
</template>

<script>
import AboutMe from './components/AboutMe'
import TopNav from './components/TopNav'
import Resume from './components/Resume'
import Projects from './components/Projects'

export default {
  name: 'App',
  components: {
    AboutMe,
    TopNav,
    Resume,
    Projects
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
