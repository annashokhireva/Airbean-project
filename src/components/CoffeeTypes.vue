<template>
    <div>
      <div v-for="coffee in coffeeTypes" :key="coffee.id">
          <h2>{{coffee.type}}</h2>
          <p>{{coffee.price}}</p>
          <p>{{coffee.info}}</p>
      </div>
  </div>
</template>

<script>
export default {

    computed: {
        coffeeTypes: function() {
            return this.$store.getters.coffeeTypes;
        }
    }
}
</script>

<style>

</style>