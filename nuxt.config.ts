// https://nuxt.com/docs/api/configuration/nuxt-config
import webpack from 'webpack'

export default defineNuxtConfig({
  app: {
      head: {
        htmlAttrs: {
          lang: 'ja'
        }
      }
    },
   runtimeConfig: {
       newt: {
         spaceUid: 'konerublog',
         cdnApiToken: 'zqRueqTV1MjBhp5FaSXA_nk73blyfh396v4_61G0R50'
       }
     },
 head: {
   script: [
     { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
   ],
 },
 css: ["/assets/styles/main.scss","~/assets/styles/components/header.scss","~/assets/styles/components/footer.scss","~/assets/styles/components/hamburgermenu.scss"],
 vite: {
   css: {
     preprocessorOptions: {
       scss: {
         additionalData: `
           @import "/assets/styles/_variables.scss";
           @import "/assets/styles/_ress.scss";
         `
       }
     }
   }
 },
 build: {
   plugins: [
     new webpack.ProvidePlugin({
       $: 'jquery',
       jQuery: 'jquery'
     })
     
   ]
 },
 plugins: [
  '~/plugins/gsap.js',
],
})
