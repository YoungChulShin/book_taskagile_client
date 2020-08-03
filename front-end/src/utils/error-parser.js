import _ from 'lodash'

export default {
  parse (error) {
    if (error.response) {
      const status = error.response.status
      const data = error.response.data

      if (status === 400) {
        if (data && data.message) {
          return new Error(data.message)
        } else {
          return new Error('Bad request')
        }
      } else if (status === 401) {
        return new Error('Request not authorized')
      } else if (status === 403) {
        return new Error('Request forbidden')
      } else if (status === 404) {
        return new Error('Request failed. Request endpoint not found on server')
      } else if(status === 500) {
        if (data && data.message) {
          return new Error(data.message + ' Please try again later')
        } else {
          return new Error('There is an error on the server side. Please try again later.')
        }
      } else {
        return new Error('Request failed. Please try again later.')
      }
    } else if (error.request) {
      return new Error('Request failed. No response from the server.')
    } else {
      // 에러라면 에러를 넘기고 그게 아니면 생성해서 전달
      // https://lodash.com/docs/4.17.15
      return _.isError(error) ? error : new Error(error)
    }
  }
}
