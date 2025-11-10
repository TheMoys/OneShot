<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    <div v-for="id in videoIds" :key="id" class="bg-white rounded shadow p-2">
      <div class="aspect-w-16 aspect-h-9">
        <iframe
          :src="'https://www.youtube.com/embed/' + id"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="w-full h-full"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    videoIds: { type: Array, default: () => [] }
  }
}
</script>
