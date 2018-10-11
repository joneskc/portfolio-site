<template>
    <v-card data-aos="zoom-in" data-aos-duration="8000" class="card" width="350px">
        <v-img
        :src="project.screenshot"
        aspect-ratio="1.5"
        ></v-img>

        <v-card-title primary-title>
        <div>
            <h3 class="headline mb-0">{{project.title}}</h3>
            <div>{{project.description}}</div>
        </div>
        </v-card-title>

        <v-card-actions justify-space-between>
        <v-btn flat color="orange" :href="project.sourceCode" target="_blank">Source Code</v-btn>
        <v-btn flat left color="orange" :href="project.deployedSite" target="_blank">Deployed Site</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: ['project']
}
</script>

<style>
.card {
    box-shadow: 5px 5px 5px #1f2225;
}

</style>
