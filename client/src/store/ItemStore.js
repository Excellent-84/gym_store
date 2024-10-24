import { makeAutoObservable } from 'mobx';

export default class ItemStore {

  constructor() {
    this._types = [
      {id: 1, title: 'Мячи'},
      {id: 1, title: 'Обручи'}
    ]
    this._brands = [
      {id: 1, title: 'Pastorelli'},
      {id: 1, title: 'Chacott'}
    ]
    makeAutoObservable(this)
  }

  setAuth(bool) {
    this._isAuth = bool
  }

  setUser(user) {
    this._user = user
  }

  get isAuth() {
    return this._isAuth
  }

  get user() {
    return this._user
  }
}
