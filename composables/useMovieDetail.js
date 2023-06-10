import { defineStore } from 'pinia'

export const useMovieDetail = defineStore('movieDetail', {
  state: () => ({
    _visible: false,
    _id: null,
  }),
  getters: {
    visible: (state) => state._visible,
    id: (state) => state._id,
  },
  actions: {
    show(id) {
      this._id = id
      this._visible = true
    },
    close() {
      this._id = null
      this._visible = false
    },
  },
})
