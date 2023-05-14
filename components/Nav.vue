<template>
 <nav>
   <hamburger-menu></hamburger-menu>
 </nav>
</template>

<script lang="ts">
import HamburgerMenu from './HamburgerMenu.vue';

export default {
 name: 'Nav',
 components: {
   HamburgerMenu,
 }
}
</script>
