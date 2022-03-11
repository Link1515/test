import { ref, onBeforeMount } from 'vue';

export default function () {
  const a = ref('aa');

  onBeforeMount(() => {
    console.log('我是 hook 中的 beforeMount');
  });

  return a;
}
