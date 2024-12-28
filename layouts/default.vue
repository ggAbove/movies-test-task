<template>
  <div class="bg-gray-950 text-gray-100 min-h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-[#292D32] shadow-md py-4">
      <div class="container px-8">
        <NuxtLink to="/">
          <h1 class="text-2xl font-bold">Test Task</h1>
        </NuxtLink>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow container mx-auto px-8 py-8">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="bg-[#292D32] shadow-md py-4">
      <div class="container px-8 flex items-center justify-between">
        <h5>Test Task, 2024</h5>
        <div>
          <a class="underline" href="tel:518-363-2121">518-363-2121</a>
          <p>
            91 Park St, Fairhope, AL 36532
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>

</script>
