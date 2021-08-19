<template>
  <div>
    <table>
      <thead>
      <tr>
        <td>이름</td>
        <td>주소</td>
      </tr>
      </thead>
      <tbody>
      <tr :key="i" v-for="(person , i) in personList">
        <td>{{ person.name }}</td>
        <td>{{ person.address }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data () {
    return {
      personList: []
    }
  },
  setup () {
  },
  created () {
    this.getList()
  },
  mounted () {
  },
  unmounted () {
  },
  methods: {
    async getList () {
      this.personList = await this.$api('http://localhost:8080/sample/test', 'get')
      console.log(this.personList)
    }
  }
}
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 50%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
