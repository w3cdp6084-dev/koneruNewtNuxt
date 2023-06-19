<template>
<div>
 <main class="main">
   <h2>{{ article?.title }}</h2>
   <div v-html="article?.body" ></div>
 </main>
 <NuxtLink to="/">test</NuxtLink>
</div>
</template>

<script lang="ts" setup>
import type { Article } from '~/types/article'

const route = useRoute()
const { slug } = route.params

const { data } = await useAsyncData(`article-${slug}`, async () => {
  const { $newtClient } = useNuxtApp()
  return await $newtClient.getFirstContent<Article>({
    appUid: 'blog',
    modelUid: 'article',
    query: {
      slug,
      select: ['_id', 'title', 'slug', 'body']
    }
  })
})
const article = data.value

useHead({
  title: article?.title,
  meta: [
    { name: 'description', content: '投稿詳細ページです' }
  ]
})
</script>