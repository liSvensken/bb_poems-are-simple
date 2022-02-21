export interface BookmarkInterface {
  text: string,
  url: string
}

// $store.state.bookmarks.list
export const state = {
  list: []
}

// $store.getters['bookmarks/getList']
export const getters = {
  getList(state: any): BookmarkInterface[] {
    return state.list
  }
}

// $store.commit('bookmarks/setList', {list: 'new Value'})
export const mutations = {
  setList(state: any, data: { list: BookmarkInterface[] }) {
    state.list = data.list
  }
}
