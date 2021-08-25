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
          <tr :key="i" v-for="(person , i) in guestList.dtoList">
            <th scope="row">
              <a href="#" @click="goToDetail(person.guestNum ,this.guestList.page)">
                {{person.guestNum}}
              </a>
            </th>
            <td>{{ person.title }}</td>
            <td>{{ person.writer }}</td>
            <td>{{ person.modDate }}</td>
          </tr>
          </tbody>
        </table>

        <ul class="pagination h-100 justify-content-center align-items-center">
          <li class="page-item" v-if="this.guestList.prev">
            <a href="#" class="page-link" tabindex="-1" @click="getList(this.params = (this.guestList.start -1))">
              이전
            </a>
          </li>

          <li :class="['page-item' + this.guestList.page == page ? 'active' : ''  ]" v-for="(page , i) in this.guestList.pageList">
            <a class="page-link" href="#" @click="getList(this.params = page)">
              {{ page }}
            </a>
          </li>

          <li class="page-item" v-if="this.guestList.next">
            <a href="#" class="page-link" tabindex="-1" @click="getList(this.params = (this.guestList.end +1))">
              다음
            </a>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  props: {
    page: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      guestList: {
        dtoList: [],
        start: 1,
        end: 10,
        prev: true,
        next: false,
        page: 1,
        pageList: [],
        size: 10,
        totalPage: 100,
      },
       params: 1
    }
  },
  computed: {},
  mounted () {
  },
  created () {
    this.getList (this.page)
  },
  methods: {
    async getList (page) {
      this.guestList = await this.$api('/guestbook/list?page=' + page, 'get',{})
    },
    goToDetail (guestNum ,page ) {
      this.$router.push({name:'GuestbookRead' , params:{guestNum : encodeURIComponent(guestNum) , page : page}})
    }
  }
}
</script>
