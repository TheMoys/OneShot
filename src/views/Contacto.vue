<template>
  <div>
    <Navbar />
    <div class="p-8">
      <h2 class="text-2xl font-bold">Contacto</h2>
      <form class="mt-4 space-y-4 max-w-lg">
        <input placeholder="Nombre" class="w-full p-2 border rounded" />
        <input placeholder="Email" class="w-full p-2 border rounded" />
        <textarea placeholder="Mensaje" class="w-full p-2 border rounded"></textarea>
        <button class="px-4 py-2 bg-indigo-600 text-white rounded">Enviar</button>
      </form>
    </div>
  </div>
</template>
