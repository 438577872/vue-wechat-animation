<template>
  <div class="page3">
    <button @click="close">
      关闭
    </button>
    Page3
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  name: 'Page3',
  props: [ 'props' ],
  setup(props) {
    const store = useStore()

    const close = () => {
      store.commit('close', props)
    }
    return { props, close }
  }
}
</script>

<style scoped>
.page3 {
  background : palevioletred;
  height     : 100%;
  width      : 100%;
}
</style>
