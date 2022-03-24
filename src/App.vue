<template>
  <SpecialUploader
    @fileChange="fileChange"
    customImage="https://picsum.photos/1000/1000"
  />
</template>

<script>
export default {
  name: "App",
  methods: {
    fileChange(data) {
      console.log(data);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
