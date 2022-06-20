<template>
  <section class="flex flex-wrap text-black bg-body-texture">
    <hr class="h-3px bg-blue w-full">
    <div class="flex items-center text-center w-full mx-40 my-12 flex-col">
      <p class="mb-6">
        Vous souhaitez tester notre solution en avant première ?<br>
        <span class="text-blue font-semibold">Laissez nous votre adresse mail</span>
      </p>
      <div>
        <input class="border-solid border-2 border-blue rounded-full w-96 h-8 px-4 py-6 focus-visible:border-blue" type="email" placeholder="Email">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Newsletter"
}
</script>