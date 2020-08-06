<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >
    <q-btn color="primary" label="Primary" />
    <p v-text="name"></p>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      name: 'hello'
    }
  },
  methods: {
    getData() {
      console.log('hatdog ng pinas')
    }
  },
  computed: {
    getMenu() {
      return 'hello'
    }
  }
}
</script>
