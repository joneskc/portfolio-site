<template>
    <v-layout>
        <v-flex xs12 sm6 offset-sm3>
            <v-card width="300px">
                <v-img
                src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                aspect-ratio="2.75"
                ></v-img>

                <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">{{project.title}}</h3>
                    <div>{{project.description}}</div>
                </div>
                </v-card-title>

                <v-card-actions>
                <v-btn flat color="orange">Source Code</v-btn>
                <v-btn flat color="orange">Deployed Site</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    props: ['project']
}
</script>

<style>

</style>
