<template>
  <div>
    <div class="loading-screen" :style="{ opacity: isLoaded ? 0 : 1 }">
      <!-- Loading content goes here -->
      <p>{{ counter.toFixed(0) }}%</p>
    </div>
    <div>
      <ul>
        <li v-for="article in articles" :key="article._id">
          <NuxtLink :to="`/articles/${article.slug}`">
            <h1>{{ article.title }}</h1>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import type { Article } from '~/types/article'

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
  isLoaded.value = true
  return result
})
const articles = data.value?.items

useHead({
  title: 'Newt・Nuxtブログ',
  meta: [
    { name: 'description', content: 'NewtとNuxtを利用したブログです' }
  ]
})

// GSAP animations
onMounted(() => {
  gsap.to(counter, {
    duration: 2,
    value: 100,
    ease: 'linear',
    onUpdate: () => {
      if (counter.value >= 100 && isLoaded.value) {
        isLoaded.value = true
      }
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
  opacity: 0;
  transition: opacity 1s;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
