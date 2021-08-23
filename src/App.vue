<template>
  <h1 class="text-3xl font-bold text-primary">Hello world!</h1>

  <div class="space-x-4">
    <Button variant="primary">Join our crew</Button>

    <Button variant="secondary">Testing</Button>
  </div>
</template>

<script>
import Button from './components/Button/Button.vue'

export default {
  components: { Button },
}
</script>
