import { SpecialUploader } from '@/components'

export default {
    install: (app, options) => {
        app.component("SpecialUploader", SpecialUploader);
        app.provide("specialUploadImage", options?.img);

        app.directive('focus', {
            mounted(el) {
                el.focus()
            },
        })
    },
};
export { SpecialUploader };