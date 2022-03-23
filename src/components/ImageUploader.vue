<template>
  <div class="wrapper">
    <h1>Spacial Image Uploader</h1>
    <input class="mb-5" @change="uploadFile" type="file" />
    <img :src="url" alt="" />
  </div>
</template>

<script setup>
import { ref, inject, defineProps } from "vue";
const props = defineProps({
  customImage: String,
});

const img = inject("specialUploadImage");
const url = ref(img.length ? img : props.customImage);
function uploadFile(event) {
  const target = event.target;
  const file = target.files[0];
  fileProcess(file);
}
function fileProcess(file) {
  url.value = URL.createObjectURL(file);
}
</script>

<style scoped>
.wrapper {
  width: 400px;
  border: 2px solid dodgerblue;
  padding: 20px;
}
.wrapper img {
  width: 75%;
  max-height: 300px;
}
.mb-5 {
  margin-bottom: 25px;
}
</style>