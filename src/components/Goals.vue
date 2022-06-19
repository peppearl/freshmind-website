<template>
  <section class="text-black">
    <div class="bg-red h-36 text-center shadow-l">
      <h2 class="text-white uppercase pt-12 text-5xl font-extrabold">Nos objectifs</h2>
    </div>
    <div class="flex mx-40 my-14 font-semibold justify-around">
      <div class="flex flex-col items-center">
        <span class="bg-blue w-24 h-24 rounded-full">
          <img src="../assets/img/charge-mentale.png" alt="Charge mentale icône" class="w-12 relative top-22 left-23">
        </span>
        <div class="mt-8">
          <p class="text-center">Diminuer votre<br>charge mentale</p>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <span class="bg-red w-24 h-24 rounded-full">
          <img src="../assets/img/icone-organisation.png" alt="Charge mentale icône" class="w-12 relative top-22 left-23">
        </span>
        <div class="mt-8">
          <p class="text-center">Vous apportez une<br>meilleure organisation</p>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <span class="bg-blue w-24 h-24 rounded-full">
          <img src="../assets/img/icone-app.png" alt="Charge mentale icône" class="w-8 relative top-22 left-32">
        </span>
        <div class="mt-8">
          <p class="text-center">Gérez votre quotidien<br>sur une seule application</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Goals"
}
</script>