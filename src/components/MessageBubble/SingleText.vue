<template lang="pug">
.cb-msg-bubble-component.cb-msg-bubble-component--single-text
  .cb-msg-bubble-component__text {{ mainData.text }}
</template>
<script>
export default {
  props: {
    mainData: {
      type: Object
    }
  }
}
</script>
