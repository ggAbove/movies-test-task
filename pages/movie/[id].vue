<template>
  <div class="container mx-auto">
    <div v-if="movie" class="flex flex-col lg:flex-row gap-16">
      <div class="flex flex-col gap-4 lg:w-1/4">
        <h1>{{ movie.name }}</h1>
        <img class="rounded-lg" :src="movie.poster" :alt="movie.name">
        <div class="flex items-center space-x-2 mt-3">
          <MovieBadge :class="ratingBackground" icon="base-star-small">
            {{ movie.rating }}
          </MovieBadge>
          <MovieBadge icon="base-film-small" class="bg-blue-600">
            {{ movie.genre }}
          </MovieBadge>
          <MovieBadge icon="base-clock-small" class="bg-purple-600">
            {{ movie.duration }}
          </MovieBadge>
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <div>
          <h1>Description</h1>
          <p>{{ movie.description }}</p>
        </div>
        <div>
          <h1>Trivia</h1>
          <ul class="list-disc ml-4">
            <li v-for="item in movie.trivia" :key="item">{{ item }}</li>
          </ul>
        </div>
        <div>
          <h1>Actors</h1>
          <ul class="list-disc ml-4">
            <li v-for="actor in movie.actors">
              <NuxtLink class="underline" external target="_blank" :to="`https://www.imdb.com/name/${actor.imdb_id}`">{{
                actor.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const id = route.params.id
const { data: movie } = await useLazyFetch(`/api/movie/${id}`)

const ratingBackground = computed(() => Number(movie.value.rating) >= 7 ? 'bg-green-600' : Number(movie.value.rating) >= 4 ? 'bg-purple-600' : 'bg-red-600')

</script>
