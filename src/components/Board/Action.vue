<template lang="pug">
.cb-board-action(
  :class="actionClass"
)
  .cb-board-action__wrapper
    .cb-board-action__msg-box
      input.cb-board-action__input(
        type="text",
        v-model="messageText",
        ref="cbMessageInput",
        :disabled="inputDisable",
        :placeholder="inputPlaceholder",
        @keydown.enter="sendMessage",
      )
      .cb-board-action__disable-text(
        v-if="inputDisablePlaceholder && inputDisable"
      )
        span {{ inputDisablePlaceholder }}
    .cb-board-action__extra
      slot(name="actions")
      button.cb-action-item.cb-action-item--send(@click="sendMessage")
        slot(name="sendButton")
          IconSend.cb-action-icon.cb-action-icon--send
</template>
<script>
import IconSend from '../../assets/icons/send.svg'

export default {
  components: {
    IconSend
  },

  props: {
    inputPlaceholder: {
      type: String
    },

    inputDisablePlaceholder: {
      type: String
    },

    inputDisable: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      messageText: null
    }
  },

  computed: {
    actionClass () {
      const actionClasses = []

      if (this.inputDisable) {
        actionClasses.push('cb-board-action--disabled')
      }

      if (this.messageText) {
        actionClasses.push('cb-board-aciton--typing')
      }

      // TODO: sending

      return actionClasses
    }
  },

  mounted () {
    this.$refs.cbMessageInput.focus()
  },

  methods: {
    sendMessage () {
      if (this.messageText) {
        this.$emit('msg-send', { text: this.messageText })
        this.messageText = null
      }
    }
  }
}
</script>
