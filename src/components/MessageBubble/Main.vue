<template lang="pug">
.cb-msg-bubble(:class="bubbleClass")
  .cb-msg-avatar(v-if="message.agent === 'bot'")
    .cb-msg-avatar__img &nbsp;
  component(
    v-if="componentType",
    :is="componentType",
    :main-data="message"
  )
  .cb-msg-bubble__time(v-if="message.createdAt")
    | {{ message.createdAt }}
</template>
<script>
import SingleText from './SingleText'
import SingleImg from './SingleImg'
import ButtonOptions from './ButtonOptions'

export default {
  components: {
    SingleText,
    SingleImg,
    ButtonOptions
  },

  props: {
    message: {
      type: Object
    }
  },

  computed: {
    bubbleClass () {
      return this.message.agent === 'bot'
        ? 'cb-msg-bubble--bot'
        : 'cb-msg-bubble--user'
    },

    // Define the message type and return the specific component
    componentType () {
      let type = ''

      switch (this.message.type) {
        case 'button':
          type = 'ButtonOptions'
          break
        case 'image':
          type = 'SingleImg'
          break
        default:
          type = 'SingleText'
      }

      return type
    }
  }
}
</script>
