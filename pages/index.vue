<template>
  <div>
    <div>
      <ul>
        <li v-for="article in articles" :key="article._id">
          <NuxtLink :to="`/articles/${article.slug}`">
            <div>
              <img v-if="article.coverImage" :src="article.coverImage.src" :alt="article.title" width="150" height="150" />
            </div>
            <h1>{{ article.title }}</h1>
            <p>{{ formatDate(article._sys.createdAt) }}</p>
            <ul>
              <li v-for="category in article.categories" :key="category">
                {{ category.name }}
              </li>
            </ul>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { useAsyncData, useNuxtApp } from '#app'
import type { Article } from '~/types/article'
import { useHead } from '@vueuse/head'
import { formatDate } from '~/utils/formatDate'

const { data } = await useAsyncData('articles', async () => {
  const { $newtClient } = useNuxtApp()
  const result = await $newtClient.getContents<Article>({
  appUid: 'blog',
  modelUid: 'article',
  query: {
    select: ['_id', 'title', 'slug', 'body', 'coverImage', '_sys.createdAt', 'categories']
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