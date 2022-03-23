import { SpecialUploader } from './components'

export default {
    install: (app, options) => {
        app.component("SpecialUploader", SpecialUploader);
        app.provide("specialUploadImage", options.img);
    },
};

export { SpecialUploader };