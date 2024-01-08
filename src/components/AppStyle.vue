<template lang="pug">
.cb-bot-style(v-html="style", style="display: none")
</template>
<script>
export default {
  props: ['options'],
  computed: {
    style () {
      if (!this.options) {
        return ''
      }

      const {
        colorScheme,
        textColor,
        boardContentBg,
        bubbleBtnSize,
        botAvatarImg,
        botAvatarSize,
        inputDisableBg,
        msgBubbleBgBot,
        msgBubbleColorBot,
        msgBubbleBgUser,
        msgBubbleColorUser
      } = this.options

      const styles = `
<style type="text/css" id="cb-bot-style">
.cb-bubble-btn {
  background-color: ${colorScheme};
  width: ${bubbleBtnSize}px;
  height: ${bubbleBtnSize}px;
}
.cb-bubble-btn-icon {
  fill: ${textColor};
  color: ${textColor};
}
.cb-board {
  bottom: ${bubbleBtnSize}px;
}
.cb-board-header {
  background-color: ${colorScheme};
}
.cb-board-header__title {
  color: ${textColor};
}
.cb-board-content {
  background-color: ${boardContentBg};
}
${botAvatarImg
    ? `.cb-msg-avatar {
      width: ${botAvatarSize}px;
      height: ${botAvatarSize}px;
    }
    .cb-msg-avatar__img {
      background-image: url(${botAvatarImg});
    }`
    : ''
}
.cb-msg-bubble--bot .cb-msg-bubble-component__text {
  color: ${msgBubbleColorBot};
  background-color: ${msgBubbleBgBot};
}
.cb-msg-bubble__typing-indicator span,
.cb-msg-bubble__typing-indicator::before,
.cb-msg-bubble__typing-indicator::after {
  background-color: ${msgBubbleColorBot};
}
.cb-mb-button-options__btn::before {
  background-color: ${msgBubbleBgUser};
}
.cb-msg-bubble--user .cb-msg-bubble-component__text {
  color: ${msgBubbleColorUser};
  background-color: ${msgBubbleBgUser};
}
.cb-mb-button-options__btn {
  color: ${msgBubbleBgUser};
  border-color: ${msgBubbleBgUser};
}
.cb-mb-button-options__btn:hover {
  color: ${msgBubbleColorUser};
  background-color: ${msgBubbleBgUser};
}
.cb-board-action--disabled::before {
  background-color: ${inputDisableBg};
}
</style>
      `
      return styles
    }
  }
}
</script>
