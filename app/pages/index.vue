<template>
  <pre>todo: {{ title }}</pre>
</template>

<script lang="ts">
import axios from 'axios';
import Vue from 'vue';

export default Vue.extend({
  async asyncData() {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/1`,
    );

    return { title: data.title };
  },
});
</script>
