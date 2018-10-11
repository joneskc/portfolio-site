<template>
    <v-container id="resume">
    <v-layout row justify-space-around id="resume-section">
        <v-flex>
            <v-layout data-aos="zoom-in" data-aos-duration="400" id="resume-title" align-center justify-center>
                <h1>RESUME</h1>
            </v-layout>
            <img id="tree" data-aos="zoom-in" data-aos-duration="600" src="http://pluspng.com/img-png/fir-tree-png-black-and-white-oak-tree-2431.png" alt="">
        </v-flex>
        <v-flex>
            <img id="resumeImg" data-aos="zoom-in" data-aos-duration="800" src="../assets/KeithJones-Resume.png" alt="Keith Jones Resume">
        </v-flex>
    </v-layout>
    </v-container>
</template>

<script>
export default {

}
</script>

<style>
#resume-section {
    max-height: 1000px;
}
#resume-title {
    color: white;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    margin-top: 1em;
    margin-left: 25em;
    background-color: rgb(99, 100, 119);
}
#resumeImg {
    max-height: 1000px;
}
#tree {
    max-width:700px;
}

</style>
