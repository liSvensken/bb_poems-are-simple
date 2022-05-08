import { RouterParamsEnum } from "~/enums/routerParams.enum";

export interface BookmarkInterface {
  text: string;
  value: number | null;
}

// $store.state.bookmarks.list
export const state = {
  list: [],
  pageNameLink: RouterParamsEnum.PoemsListByGrade
}

// $store.getters['bookmarks/getList']
export const getters = {
  getList(state: any): BookmarkInterface[] {
    return state.list
  },

  getPageLink(state: any): BookmarkInterface[] {
    return state.pageNameLink
  }
}

// $store.commit('bookmarks/setList', {list: 'new Value'})
export const mutations = {
  setList(state: any, data: { list: BookmarkInterface[], pageName: RouterParamsEnum.PoemsListByAuthor }) {
    state.list = data.list;
    state.pageNameLink = data.pageName;
  }
}
