<template>
  <div>
    <p>Hello world</p>
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <Button @click="changeValue">Change Value</Button>
  </div>
</template>

<style>
</style>

<script>
export default {
  data() {
    return {
      name: 'thaycacac',
      age: '20'
    }
  },
  methods: {
    changeValue() {
      this.$axios.post(`/api`)
      .then(result => {
        console.log(result)
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
};

</script>
