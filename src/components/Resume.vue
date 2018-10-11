<template>
    <v-container>
    <v-layout row justify-space-around id="resume-section">
        <v-flex>
            <v-flex id="resume-title" align-center>
                <h1>RESUME</h1>
            </v-flex>
            <img id="tree" src="http://pluspng.com/img-png/fir-tree-png-black-and-white-oak-tree-2431.png" alt="">
        </v-flex>
        <v-flex>
            <img id="resume" src="../assets/KeithJones-Resume.png" alt="Keith Jones Resume">
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
    margin-left: 22em;
    background-color: rgb(99, 100, 119);
}
#resume {
    max-height: 1000px;
}
#tree {
    max-width:700px;
}

</style>
