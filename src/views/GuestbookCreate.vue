<template>
  <main class="mt-3">
    <div class="container">
      <h2 class="text-center">방명록 등록</h2>
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
            <input type="text" class="form-control" v-model="this.guestbook.writer">
          </div>
        </div>
      </div>
      <div class="mb-3 row">
        <div class="col-6 d-grid p-1">
          <button type="button" class="btn btn-lg btn-dark">취소</button>
        </div>
        <div class="col-6 d-grid p-1">
          <button type="button" class="btn btn-lg btn-danger" @click="guestbookInsert">등록</button>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: '',
  components: {},
  data () {
    return {
      guestbook: {},
      guestNum : 1
    }
  },
  setup () {
  },
  created () {
  },
  mounted () {
  },
  unmounted () {
  },
  methods: {
    guestbookInsert () {
      if (this.guestbook.title == "") return this.$swal("제목을 입력해주세요")
      if (this.guestbook.content == "") return this.$swal("내용을 입력해주세요")
      if (this.guestbook.writer == "") return this.$swal("작성자를 입력해주세요")

      this.$swal.fire({
        title: '등록하시겠습니까?',
        showCancelButton: true,
        confirmButtonText: `등록`,
        cancelButtonText: `취소`
      }).then( async (result) => {
        if (result.isConfirmed) {
          await this.$save("/guestbook/register",  this.guestbook);
          this.$swal.fire('등록!', '', 'success')
          this.$router.push({path: '/list'});
        }
      })
    },
  }
}
</script>

<style scoped>

</style>
