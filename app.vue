<template>
  <div>
    <NuxtLayout />
  </div>
</template>
<style>
html {
  @apply bg-gray-950
}

h1 {
  font-size: 32px;
  font-weight: 700;
}

h2 {
  font-size: 28px;
  font-weight: 700;
}

h3 {
  font-size: 24px;
  font-weight: 700;
}

h4 {
  font-size: 20px;
  font-weight: 700;
}

h5 {
  font-size: 18px;
  font-weight: 700;
}

h6 {
  font-size: 16px;
  font-weight: 700;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
