<template>
  <main class="mt-3">
    <div class="container">
      <div>
        <h1 class="mt-4">GuestBook List Page</h1>
        <table class="table table-bordered">
          <thead>
          <tr>
            <td>#</td>
            <td>제목</td>
            <td>작성자</td>
            <td>작성날짜</td>
          </tr>
          </thead>
          <tbody>
          <tr :key="i" v-for="(person , i) in guestList">
            <td>{{ i + 1 }}</td>
            <td>{{ person.title }}</td>
            <td>{{ person.writer }}</td>
            <td>{{ person.modDate }}</td>
          </tr>
          </tbody>
        </table>

<!--          <ul class="pagination h-100 justify-content-center align-items-center">-->
<!--            <li class="page-item" v-if="">-->
<!--              <a href="#" class="page-link" tabindex="-1">이전</a>-->
<!--            </li>-->

<!--            <li class="page-item" v-if="">-->
<!--              <a href="#" class="page-link" tabindex="-1">다음</a>-->
<!--            </li>-->
<!--          </ul>-->

      </div>
    </div>
  </main>
</template>
<script>
export default {
  data () {
    return {
      guestList: [],
      prev: true
    }
  },
  computed: {},
  mounted () {

  },
  created () {
    this.getList()
  },
  methods: {
    async getList () {
      this.guestList = await this.$api('/guestbook/list', 'get')

      this.prev = this.guestList[0].prev

      console.log(this.prev)
    }
  }
}
</script>
<style scoped>
table {
  /*font-family: arial, sans-serif;*/
  /*border-collapse: collapse;*/
  /*width: 100%;*/
}

td, th {
  /*border: 1px solid #dddddd;*/
  /*text-align: left;*/
  /*padding: 8px;*/
}
</style>
