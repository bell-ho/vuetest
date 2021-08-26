import axios from 'axios'

export default {
  methods: {
    async $api (url, method, data) {
      url = 'http://localhost:8080' + url
      return (await axios({
        method: method,
        url,
        data
      }).catch(e => {
        console.log('api error ' + e)
      })).data
    },

    async $save (url,method, data) {
      return await axios.post(
        'http://localhost:8080' + url,
        JSON.stringify(data),
        { headers: { 'Content-Type': 'application/json' } }
      ).then(response => {
        return response.data
        console.log(response.data)
      })
    }
  }
}
