<template>
  <v-parallax
    dark
    height="700"
    src="https://imgnooz.com/sites/default/files/wallpaper/nature/60955/black-and-white-forest-wallpapers-60955-661436.jpg"
  >
    <v-layout row align-center>
        <Project v-for="project in projects" :project="project" :key="project.id"/>
    </v-layout>
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
                    description: 'A native-mobile app designed for food trucks to share their location while they are open'
                },{
                    id: 2,
                    title: 'Where\'d my money go?',
                    description: 'An application that allows users to track how much they owe and when their bills are due'
                },{
                    id: 3,
                    title: 'Spoiler Alert!',
                    description: 'An application that allows users to avoid food waste by tracking when foods in their pantry are going to expire'
                }]
        }
    }

}
</script>

<style>

</style>
