<template lang="pug">
.cb-board-header
  slot(name="header")
    .cb-board-header__title {{ botTitle }}
</template>
<script>
export default {
  props: {
    botTitle: {
      type: String,
      default: 'Chatbot'
    }
  }
}
</script>
