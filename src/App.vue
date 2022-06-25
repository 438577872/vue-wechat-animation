<script lang="ts">
import { computed, defineComponent, shallowRef } from 'vue'
import { useStore } from 'vuex'
import Page3 from './components/Page3.vue'
import Page2 from './components/Page2.vue'
import Page1 from './components/Page1.vue'

export default defineComponent({
  setup() {
    const store = useStore()
    const stack = computed(() => store.getters.componentStack)
    const list = [ Page1, Page2, Page3 ]
    let i = 0
    const push = () => {
      store.commit('push', { component: shallowRef(list[(i++) % list.length]), props: { i }, key: i })
    }
    const pop = () => {
      store.commit('pop')
    }
    return { push, stack, list, pop }
  }
})
</script>

<template>
  <button @click="push">
    push
  </button>
  <button @click="pop">
    POP
  </button>
  <hr>
  <div style="overflow: hidden;position: relative;width:400px; height:600px;border:1px solid black;">
    <transition-group name="list" tag="div">
      <div class="list-item"
           :class="{'list-left': zIndex+1<stack.length}"
           v-for="({component,key,props},zIndex) in stack"
           :key="key"
           :style="{zIndex}"
           style="position: absolute;">
        <component :is="component" :props="props"/>
      </div>
    </transition-group>
  </div>

</template>
<style>
.list-item {
  display      : inline-block;
  margin-right : 10px;
  transition   : all 1s;
  width        : 100%;
  height       : 100%;
  background   : white;
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
  transform : translateX(+100%);
}

.list-enter-to,
.list-leave {
}

.list-left {
  transform : translateX(-100%);
}

.list-current {
  transform : translateX(0%);
}

</style>
