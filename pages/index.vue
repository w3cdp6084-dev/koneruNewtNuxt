<template>
  <div>
    <transition>
      <div>
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
</template>


<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { useAsyncData, useNuxtApp } from '#app'
import type { Article } from '~/types/article'
import { useHead } from '@vueuse/head'

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

</script>


