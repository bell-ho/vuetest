import axios from 'axios'

// eslint-disable-next-line no-unused-vars
export default {
  methods: {
    async $api (url, method, data) {
      url = 'http://localhost:8080' + url
      return (await axios({
        method: method,
        url,
        data
      }).catch(e => {
        console.log(e)
      })).data
    }
  }
}
