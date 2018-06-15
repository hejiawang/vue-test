<template>
  <transition name="el-zoom-in-top">
    <div>
        <h1>测试······2</h1>
        <h1>{{msgTest}}</h1>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Test2',
  data () {
    return {
      msgTest: 'Welcome to Your Vue.js App Two'
    }
  }
}
</script>
