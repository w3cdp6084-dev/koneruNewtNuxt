<template>
  <transition name="slide-in">
    <div v-if="isLoaded" class="hamburger-menu">
      <Nav />
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

let isLoaded = ref(false)

onMounted(() => {
  const isLoadedFromLocalStorage = window.localStorage.getItem('isLoaded')
  isLoaded.value = isLoadedFromLocalStorage === 'true'
  
  if (isLoaded.value) {
    gsap.to('.hamburger-menu', {transform: 'translateX(0px)', duration: 1})
  }
})
</script>


<style scoped>
.hamburger-menu {
  position: fixed;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 110px;
  height: calc(100% - 20px);
  margin: auto 0;
  transform: translateX(120px);
  z-index: 11;
}
.hambergerMenu-overlay-01, .hambergerMenu-overlay-01:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    pointer-events: none;
}
.hambergerMenu-overlay-01:before {
 content: "";
 box-shadow: inset 2px 35px 16px 5px rgba(24,23,13,.2);
 z-index: 1;
 opacity: 0;
 transition: opacity 1s cubic-bezier(.26,.16,.1,1);
}
.hambergerMenu-overlay-01{
    background-color: #dfded9;
    transform-origin: right;
}
.hambergerMenu-overlay-01:before {
 content: "";
 box-shadow: inset 2px 35px 16px 5px rgba(24,23,13,.2);
 z-index: 1;
 opacity: 0;
 transition: opacity 1s cubic-bezier(.26,.16,.1,1);
}
.hambergerMenu-overlay-02:before {
 content: "";
 left: 0;
 width: 100%;
 box-shadow: inset 35px 60px 50px 20px rgba(24,23,13,.5);
 z-index: 1;
}
.hambergerMenu-overlay-02, .hambergerMenu-overlay-0:before {
 position: absolute;
 top: 0;
 height: 100%;
 border-radius: 10px;
 pointer-events: none;
}

.hambergerMenu-overlay-02 {
 right: 0;
 width: 510px;
 background-color: #bcbbb4;
 transform-origin: right;
 transform: scaleX(0);
 overflow: hidden;
}

.hambergerMenu-contents {
 position: absolute;
 top: 0;
 right: 0;
 width: 510px;
 height: 100%;
 padding: 50px 26px 50px 16px;
 overflow-y: scroll;
 opacity: 0;
 pointer-events: none;
}

.hambergerMenu-title{
 position: relative;
 margin: 0 0 36px;
 color: #302c1a;
 font-size: 120px;
 font-family: "Six Caps",sans-serif;
 letter-spacing: -.002em;
 z-index: 2;
}


.hambergerMenu-title-wrapper-01 {
 display: block;
 cursor: pointer;
}

button {
 background: 0 0;
 border: none;
 padding: 0;
 font-size: inherit;
 font-family: inherit;
 line-height: inherit;
}
.app-text-animation{
 display: block;
 pointer-events: none;
 -webkit-user-select: none;
 -moz-user-select: none;
 -ms-user-select: none;
 user-select: none;
}

.app-text-animation-wrapper {
 display: inline-block;
 position: relative;
 overflow: hidden;
}

.app-text-animation-block{
 display: inline-block;
 opacity: 0;
 white-space: nowrap;
}

.hambergerMenu-title-wrapper-02 {
 display: inline-block;
 cursor: pointer;
}
.hambergerMenu-section-title {
 position: relative;
 margin: 0 0 36px;
 z-index: 2;
}

.app-read-title {
 display: block;
 font-size: 12px;
 font-family: helvetica,"Helvetica Neue",arial,sans-serif;
 letter-spacing: .02em;
 line-height: 1.04;
}

.app-read-title--section .app-read-title-wrapper-00 {
 font-size: 36px;
 text-indent: -2px;
 line-height: .79;
}

.hambergerMenu-hover {
 display: flex;
 justify-content: center;
 align-items: center;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background-color: #fff;
 transition: transform .25s cubic-bezier(.43,.05,.17,1);
 border-radius: inherit;
}


.hambergerMenu-openarea {
 position: relative;
 width: 37px;
 height: 13px;
}

.hambergerMenu-openarea-line-01 {
 top: 0;
}
.hambergerMenu-openarea-line {
 position: absolute;
 left: 0;
 width: 100%;
 height: 4px;
 background-color: #302c1a;
 border-radius: 2px;
 cursor: pointer;
}

.hambergerMenu-openarea-line-02{
 bottom: 0;
}
.hambergerMenu-openarea-line{
 position: absolute;
 left: 0;
 width: 100%;
 height: 4px;
 background-color: #302c1a;
 border-radius: 2px;
 cursor: pointer;
}
.hambergerMenu-hover:hover {
 transform: scale(.9,.98);
}
.hambergerMenu-btn {
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 10px;
    cursor: pointer;
}
.hambergerMenu.is-open .hambergerMenu-overlay-01:before {
    opacity: 1;
}

</style>
