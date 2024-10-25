import { makeAutoObservable } from 'mobx';

export default class ItemStore {

  constructor() {

    this._types = [
      {id: 1, title: 'Мячи'},
      {id: 2, title: 'Обручи'}
    ]

    this._brands = [
      {id: 1, title: 'Pastorelli'},
      {id: 2, title: 'Chacott'}
    ]

    this._items = [
      {id: 1, title: 'Обруч 90 см', price: 1200, image: ''},
      {id: 2, title: 'Обруч 80 см', price: 1250, image: ''},
      {id: 3, title: 'Мяч 18 см', price: 5000, image: ''},
      {id: 4, title: 'Мяч 18 см', price: 3500, image: ''},
    ]

    makeAutoObservable(this)
  }

  setTypes(types) {
    this._types = types
  }

  setBrand(brands) {
    this._brands = brands
  }

  setItems(items) {
    this._items = items
  }


  get types() {
    return this._types
  }

  get brands() {
    return this._brands
  }

  get items() {
    return this._items
  }
}
