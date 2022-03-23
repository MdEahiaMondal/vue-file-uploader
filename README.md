# Vue File Upload Preview
Easy to use, highly customizable Vue File Upload Preview library.

# How to use
First you need to install this packege using ```npm``` or ```yarn``` 
```
npm i vue-file-upload-preview
```
or 
```
yarn add vue-file-upload-preview
```

Now you need to use this component on your app directory

```
import { createApp } from 'vue'
import App from './App.vue'

import SpecialUploader from "vue-file-upload-preview";
#if you need default css
require('vue-file-upload-preview/dist/vue-file-upload-preview.css') 

const app = createApp(App)
app.use(SpecialUploader)
app.mount('#app')
```

Finaly use this component in your template
```
<template>
  <div>
    <SpecialUploader
      customImage="https://picsum.photos/1000/1000"
    ></SpecialUploader>
  </div>
</template>

<script>
export default {
  name: "App",
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
```