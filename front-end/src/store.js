export default {
  debug: true,
  state: {
    is_new: false
  },
  setNewAction () {
    if (this.debug) { console.log('setNewAction triggerd') }
    this.state.is_new = true
  },
  resetNotNewAction () {
    if (this.debug) { console.log('resetNewAction triggerd') }
    this.state.is_new = false
  }
}
