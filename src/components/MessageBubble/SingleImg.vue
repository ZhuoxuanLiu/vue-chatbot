<template lang="pug">
.cb-msg-bubble-component
    .cb-msg-bubble-component__img(v-viewer.static="viewerOps")
        img(:src="imgSrc", :style="{'max-width': '100%', 'max-height': '100%', 'object-fit': 'contain'}")
</template>
<script>
import 'viewerjs/dist/viewer.css'
import { directive as viewer } from 'v-viewer'
export default {
  data () {
    return {
      viewerOps: {
        inline: false,
        button: true,
        navbar: false,
        title: false,
        toolbar: false,
        initialCoverage: 0.5,
        loop: false
      }
    }
  },
  props: {
    mainData: {
      type: Object
    }
  },
  directives: {
    viewer: viewer()
  },
  computed: {
    imgSrc () {
      if (this.mainData.image.url) {
        return this.mainData.image.url
      } else if (this.mainData.image.base64) {
        return 'data:image/png;base64,' + this.mainData.image.base64
      } else {
        return ''
      }
    }
  }
}
</script>
