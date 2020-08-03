export default {
  register (detail) {
    return new Promis((resolve, reject) => {
      detail.emailAddress === 'sunny@local'
        ? resolve({result: 'success'})
        : reject(new Error('User already exist'))
    })
  }
}
