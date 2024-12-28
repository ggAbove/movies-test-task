<template>
  <NuxtLink :to="`/movie/${movie.id}`" class="relative group">
    <div class="absolute inset-0 bg-purple-600 rounded-lg">
    </div>
    <div
      class="relative z-10 bg-[#292D32] p-4 h-full transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-lg shadow-lg active:outline outline-purple-600">
      <img :src="movie.poster" :alt="movie.name" class="w-full h-48 object-contain rounded-lg" />
      <div class="flex flex-col gap-2 mt-4">
        <h2 class="text-lg xl:text-2xl font-bold">{{ movie.name }}</h2>
        <p class="text-sm overflow-hidden line-clamp-2">{{ movie.description }}</p>
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
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const { movie } = defineProps({
  movie: {
    type: Object,
    required: true
  }
})
const ratingBackground = computed(() => Number(movie.rating) >= 7 ? 'bg-green-600' : Number(movie.rating) >= 4 ? 'bg-purple-600' : 'bg-red-600')

</script>

<style scoped></style>
