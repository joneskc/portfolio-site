<template>
    <v-container id="resume">
    <v-layout row justify-space-around id="resume-section">
        <v-flex>
            <v-layout id="resume-title" align-center justify-center>
                <h1>RESUME</h1>
            </v-layout>
            <img id="tree" src="http://pluspng.com/img-png/fir-tree-png-black-and-white-oak-tree-2431.png" alt="">
        </v-flex>
        <v-flex>
            <img id="resumeImg" src="../assets/KeithJones-Resume.png" alt="Keith Jones Resume">
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
