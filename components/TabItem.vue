<template>
  <li :class="[active, 'is-active']">
    <button @click="$emit('input', id)" :class="[active, 'tab']">
      {{ label }}
    </button>
  </li>
</template>

<script>
export default {
  props: {
    id: Number,
    label: String,
    value: Number
  },
  computed: {
    active() {
      return this.value === this.id ? 'active' : false
    }
  }
}
</script>

<style scoped>

</style>