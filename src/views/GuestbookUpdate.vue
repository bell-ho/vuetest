<template>
  <main class="mt-3">
    <div class="container">
      <h2 class="text-center">방명록 수정</h2>
      <div class="mb-3 row">
        <label class="col-md-3 form-label">제목</label>
        <div class="col-md-9">
          <input type="text" class="form-control" v-model="this.guestbook.title">
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-3 form-label">내용</label>
        <div class="col-md-9">
          <div class="input-group mb-3">
            <textarea name="" id="" cols="300" rows="5" v-model="this.guestbook.content"></textarea>
          </div>
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-3 form-label">작성자</label>
        <div class="col-md-9">
          <div class="input-group mb-3">
            <input type="text" class="form-control" v-model="this.guestbook.writer" readonly>
          </div>
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-3 form-label">등록날짜</label>
        <div class="col-md-9">
          <div class="input-group mb-3">
            <input type="text" class="form-control" v-model="this.guestbook.regDate" readonly>
          </div>
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-3 form-label">수정날짜</label>
        <div class="col-md-9">
          <div class="input-group mb-3">
            <input type="text" class="form-control" v-model="this.guestbook.modDate" readonly>
          </div>
        </div>
      </div>
      <div class="mb-3 row">
        <div class="col-6 d-grid p-1">
          <button type="button" class="btn btn-lg btn-dark" @click="cancel">취소</button>
        </div>
        <div class="col-6 d-grid p-1">
          <button type="button" class="btn btn-lg btn-danger" @click="guestbookUpdate">수정</button>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  props: {
    guestNum: {
      type: String,
      default: ''
    },
    page: {
      type: Number,
      default: 1
    }
  },
  name: '',
  components: {},
  data () {
    return {
      guestbook: {
      },
      test: '',
      test2: ''
    }
  },
  setup () {
  },
  created () {
    this.getGuestbook()
    console.log(this.guestNum)
  },
  mounted () {
  },
  unmounted () {
  },
  methods: {
    async getGuestbook () {
      this.guestbook = await this.$api('/guestbook/modify?guestNum=' + this.guestNum, 'get', {})
    },
    cancel () {
      this.$router.push({name:'GuestbookRead' , params:{guestNum : encodeURIComponent(this.guestNum) , page : this.page}})
    },
    guestbookUpdate () {
      if (this.guestbook.title == "") return this.$swal("제목을 입력해주세요")
      if (this.guestbook.content == "") return this.$swal("내용을 입력해주세요")
      if (this.guestbook.writer == "") return this.$swal("작성자를 입력해주세요")

      this.$swal.fire({
        title: '수정 하시겠습니까?',
        showCancelButton: true,
        confirmButtonText: `수정`,
        cancelButtonText: `취소`
      }).then( async (result) => {
        if (result.isConfirmed) {
          await this.$save("/guestbook/modify",  this.guestbook);
          this.$swal.fire('수정!', '', 'success')
          this.$router.push({name: 'GuestbookRead' ,  params:{guestNum : encodeURIComponent(this.guestNum) , page: this.page}});
        }
      }).catch(err=>{
        console.log(err)
      })
    },
  }
}
</script>

<style scoped>

</style>
