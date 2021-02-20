<template>
    <div class="menu-container">
      <ul class="menu-list"> 
      <li class="menu-item" v-for="coffee in coffeeTypes" :key="coffee.id">
          <div class="wrap">
            <img src="../assets/add.svg" alt="add" width="64px" height="64px"
            @click="addToCart(coffee)">  
            <div class="type-price">
                <h2 class="type">{{coffee.type}}</h2>
                <h2 class="price">{{coffee.price}}kr</h2>
            </div>
            <div class="coffee-info">
                <p>{{coffee.info}}</p>
            </div> 
        </div>   
      </li>
      </ul> 
  </div>
</template>

<script>
export default {

    computed: {
        coffeeTypes: function() {
            return this.$store.getters.coffeeTypes;
        }
    },

    methods: {
        addToCart(coffee) {
            this.$store.state.cart.push(coffee);
            console.log(this.$store.state.cart)
        }
    }
}
</script>

<style lang="scss" scoped>

.menu-container {

    width: 90%;

    .menu-item {
        display: flex;
        flex-direction: column;

        .wrap {

            .type-price {
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                .type, .price {
                    font-size: 1.2em;
                }
            }

            .coffee-info {
                display: flex;

                p {
                    font-size: 0.8em;
                    margin-top: -15px;
                }
            }
        }
    }
}

</style>>