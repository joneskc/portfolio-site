<template>
  <v-parallax
    id="projects"
    dark
    height="700"
    src="https://gdurl.com/cJ8D"
    blur="5px"
  >
    <v-container fluid align-content-space-around>
        <h1>RECENT PROJECTS</h1>
        <br>
        <v-layout row align-center justify-space-around>
            <Project v-for="project in projects" :project="project" :key="project.id" data-aos="zoom-in" data-aos-duration="8000"/>
        </v-layout>
    </v-container>
  </v-parallax>
</template>

<script>
import Project from './Project'

export default {
    components: {
        Project
    },
    data() {
        return {
            projects:
                [{
                    id: 1,
                    title: 'Truck Truck Goose',
                    description: 'A native-mobile app designed for food trucks to share their location while they are open. Sorry no deployed link since it is a mobile application.',
                    screenshot: 'https://gdurl.com/3Av4',
                    sourceCode: 'https://github.com/joneskc/capstone-client',
                    deployedSite: ''
                },{
                    id: 2,
                    title: 'Where\'d my money go?',
                    description: 'An application that allows users to track how much is owed, when their bills are due and track when their bills are paid.',
                    screenshot: 'https://gdurl.com/8ngU',
                    sourceCode: 'https://github.com/joneskc/whered-my-money-go-client',
                    deployedSite: 'https://whered-my-money-go.firebaseapp.com/#/'
                },{
                    id: 3,
                    title: 'Spoiler Alert!',
                    description: 'An application that allows users to avoid food waste by tracking when foods in their pantry are going to expire',
                    screenshot: 'https://gdurl.com/xfGG',
                    sourceCode: 'https://github.com/g-spoiler-alert/spoiler-alert-fe',
                    deployedSite: 'https://spoiler-alert-6e53f.firebaseapp.com/?#/'
                }]
        }
    }

}
</script>

<style>

</style>
