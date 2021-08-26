<template>
  <main class="mt-3">
    <div class="container">
      <div class="row">
        <div class="col-md-10">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title pt-3 pb-3 ">글 번호 : {{ guestbook.guestNum }}</h5>
              <h5 class="card-title pt-3 pb-3 border-top">제목 : {{ guestbook.title }}</h5>
              <h5 class="card-title pt-3 pb-3 border-top" >내용 : {{ guestbook.content }}</h5>
              <div class="card-text pt-3 border-top">
                <div class="row">
                  <div class="col-auto">
                    <label class="col-form-label">작성자 : {{ guestbook.writer }}</label>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-between align-item-center">
                <div class="col-3 d-grid p-1">
                  <button type="button" class="btn btn-lg btn-dark " @click="getList">목록</button>
                </div>
                <div class="col-3 d-grid p-1">
                  <button type="button" class="btn btn-lg btn-dark " @click="goToUpdate">수정</button>
                </div>
                <div class="col-3 d-grid p-1">
                  <button type="button" class="btn btn-lg btn-danger " @click="goToDelete">삭제</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: 'GuestbookRead',
  props: {
    guestNum: {
      type: Number,
      default: 1
    },
    page: {
      type: Number,
      default: 1
    }
  },
  components: {},
  data () {
    return {
      guestbook: {
        guestNum : 1
      },
      params: 1
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
    },
    getList () {
      this.$router.push({name:'GuestbookList' , params:{page: this.page}})
    },
    goToUpdate () {
      console.log(this.guestNum)
      this.$router.push({name:'GuestbookUpdate' , params:{guestNum : encodeURIComponent(this.guestNum) , page : this.page}})
    },
    async goToDelete () {
      this.$swal.fire({
        title: '삭제 하시겠습니까?',
        showCancelButton: true,
        confirmButtonText: `삭제`,
        cancelButtonText: `취소`
      }).then( async (result) => {
        if (result.isConfirmed) {
          await this.$save('/guestbook/remove?guestNum='+encodeURIComponent(this.guestNum))
          this.$swal.fire('삭제!', '', 'success')
          this.$router.push({name: 'GuestbookList' ,  params:{page: this.page}});
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
