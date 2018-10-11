<template>
    <v-layout column justify-center align-center>
        <v-layout data-aos="zoom-in" data-aos-duration="200" id="contact-header" align-center justify-center>
            <h1>CONTACT ME</h1>
        </v-layout>
        <v-layout class="container" align-center justify-space-around>
            <v-icon data-aos="zoom-in" data-aos-duration="400" size="75" color="rgb(99, 100, 119)" @click="navToGithub">fab fa-github</v-icon>

            <v-icon data-aos="zoom-in" data-aos-duration="600" size="75" color="rgb(76, 97, 115)" @click="navToLinkedIn">fab fa-linkedin</v-icon>

            <v-icon data-aos="zoom-in" data-aos-duration="800" size="75" color="rgb(170, 161, 138)" @click="emailMe">far fa-envelope</v-icon>
        </v-layout>
    </v-layout>
</template>

<script>
export default {
    methods: {
        navToGithub() {
            window.open('https://github.com/joneskc', '_blank')
        },
        navToLinkedIn() {
            window.open('https://www.linkedin.com/in/keith-c-jones/', '_blank')
        },
        emailMe() {
            window.open("mailto:keithcjones21@gmail.com?subject=Have I Got An Amazing Opportunity for YOU!")
            window.close()
        }
    }

}
</script>

<style>
#contact-header {
    color: white;
    margin-top: 3em;
    margin-bottom: 6em;
    background-color: rgb(99, 100, 119);
    height: 200px;
    width: 200px;
    border-radius: 50%;
}

</style>
