<template>
  <div>
    <h1>GuestBook Read Page</h1>
    <br>
    <h2>{{ guestbook.title }}</h2>
    <h2>{{ guestbook.content }}</h2>
    <h2>{{ guestbook.writer }}</h2>
    <h3>{{ guestbook.regDate }}</h3>
    <h3>{{ guestbook.modDate }}</h3>

  </div>
</template>
<script>
export default {
  name: 'GuestbookRead',
  props: {
    guestNum: {
      type: String,
      default: ''
    },
    page: {
      type: Number,
      default: ''
    }
  },
  components: {},
  data () {
    return {
      guestbook: {},
    }
  },
  setup () {
  },
  created () {
    this.getGuestbook()
  },
  mounted () {
  },
  unmounted () {
  },
  methods: {
    async getGuestbook () {
      this.guestbook = await this.$api('/guestbook/read?guestNum=' + encodeURIComponent(this.guestNum), 'get', {})
    }
  }
}
</script>

<style scoped>

</style>
