<template>
  <div>
    <div v-if="!isLoaded" class="loading-screen">
      <p>{{ counter.toFixed(0) }}%</p>
    </div>
    <transition name="fade">
      <div v-show="isLoaded">
        <ul>
          <li v-for="article in articles" :key="article._id">
            <NuxtLink :to="`/articles/${article.slug}`">
              <h1>{{ article.title }}</h1>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </transition>
  </div>
  <div class="test-element">
      Test Element
  </div>
</template>


<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { useAsyncData, useNuxtApp } from '#app'
import type { Article } from '~/types/article'
import { useHead } from '@vueuse/head'

let counter = ref(0)
let isLoaded = ref(false)

const { data } = await useAsyncData('articles', async () => {
  const { $newtClient } = useNuxtApp()
  const result = await $newtClient.getContents<Article>({
    appUid: 'blog',
    modelUid: 'article',
    query: {
      select: ['_id', 'title', 'slug', 'body']
    }
  })
  return result
})
const articles = data.value?.items

useHead({
  title: 'Newt・Nuxtブログ',
  meta: [
    { name: 'description', content: 'NewtとNuxtを利用したブログです' }
  ]
})

onMounted(() => {
  gsap.to(counter, {
    duration: 2,
    value: 100,
    ease: 'linear',
    onComplete: () => {
      isLoaded.value = true
      gsap.to('.hamburger-menu', {transform: 'translateX(0px)', duration: 1})
    }
  })
})

</script>



<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-to, .fade-leave-from {
  opacity: 1;
}

</style>
