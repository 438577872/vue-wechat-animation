<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      items: ref([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]),
      nextNum: ref(10)
    }
  },
  methods: {
    randomIndex() {
      return Math.floor(Math.random() * this.items.length)
    },
    add() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove() {
      this.items.splice(this.randomIndex(), 1)
    },
  }
})
</script>

<template>
  <!--  <button @click="handleClick">PUSH</button>-->
  <div id="list-demo" class="demo">
    <button @click="add">Add</button>
    <button @click="remove">Remove</button>
    <transition-group name="list" tag="p">
      <div v-for="(item,i) in items" v-bind:key="item" class="list-item">
        {{ item }}
      </div>
    </transition-group>
  </div>
</template>

<style>
.list-item {
  display      : inline-block;
  margin-right : 10px;
  transition   : all 1s;

}

.list-enter-active,
.list-leave-active {

}

.list-leave-active {
  position : absolute;
}

.list-enter-from,
.list-leave-to {
  opacity   : 0;
  transform : translateX(-100%);
}

.list-enter-to,
.list-leave {
  opacity : 1;
  /*transform : translateY(-30px);*/

}

/*.list-enter-to, .list-leave {*/
/*  opacity   : 1;*/
/*  transform : translateY(0px);*/
/*  color     : blue;*/
/*}*/


/*.fade-enter-active,*/
/*.fade-leave-active {*/
/*  transition : opacity .5s;*/
/*}*/

/*.fade-enter,*/
/*.fade-leave-to {*/
/*  opacity : 0;*/
/*}*/
</style>
