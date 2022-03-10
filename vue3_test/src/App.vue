<script setup>
import { ref, reactive, watch } from 'vue';

const name = ref('Link');
const age = ref(23);
const obj = reactive({
  data1: 123,
  data2: 456,
  data3: {
    d1: 'hi',
    d2: 'hello'
  }
});
// Vue 3 可以監測陣列!
const arr = reactive(['d1', 'd2', 'd3']);

function change() {
  name.value = 'Link2';
  age.value = 24;
  obj.data1 = 777;
  obj.data3.d1 = 123;
  arr[0] = 'dd';
}

watch(name, () => {
  console.log('名字改變');
});

// 都是新值
// watch(obj, (newVal, oldVal) => {
//   console.log(newVal, oldVal);
// });

// watch(
//   () => obj.data1,
//   (newVal, oldVal) => {
//     console.log(newVal, oldVal);
//   }
// );

watch(
  () => obj.data3,
  (newVal, oldVal) => {
    console.log(newVal, oldVal);
  },
  {
    deep: true
  }
);
</script>

<template>
  <h1>測試</h1>
  <h2>{{ name }}</h2>
  <h2>{{ age }}</h2>
  <hr />
  <h2>{{ obj.data1 }}</h2>
  <h2>{{ obj.data2 }}</h2>
  <h2>{{ arr }}</h2>
  <input type="button" value="console" @click="change" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
