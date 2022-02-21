// $store.state.test.msg
export const state = {
  msg: ['msg 1', 'msg 2', 'msg 3']
}

// $store.getters['test/get_msg']
export const getters = {
  get_msg(state: any) {
    return state.msg
  }
}

// $store.commit('test/add_msg', {msg: 'new Value'})
export const mutations = {
  add_msg(state: any, data: any) {
    state.msg.push(data.msg)
  }
}
