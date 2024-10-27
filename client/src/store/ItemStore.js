import { makeAutoObservable } from 'mobx';

export default class ItemStore {

  constructor() {

    this._types = [
      {id: 1, title: 'Мячи'},
      {id: 2, title: 'Обручи'},
      {id: 3, title: 'Булавы'},
      {id: 4, title: 'Скакалки'}
    ]

    this._brands = [
      {id: 1, title: 'Pastorelli'},
      {id: 2, title: 'Chacott'},
      {id: 3, title: 'Sasaki'},
      {id: 2, title: 'Indigo'}
    ]

    this._items = [
      {id: 1, title: 'Обруч 90 см', price: 1200, image: ''},
      {id: 2, title: 'Обруч 80 см', price: 1250, image: ''},
      {id: 3, title: 'Мяч 18 см', price: 5000, image: ''},
      {id: 4, title: 'Мяч 18 см', price: 3500, image: ''},
    ]

    this._selectedType = {}
    this._selectedBrand = {}
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

  setSelectedType(type) {
    this._selectedType = type
  }

  setSelectedBrand(brand) {
    this._selectedType = brand
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

  get selectedType() {
    return this._selectedType
  }

  get selectedBrand() {
    return this._selectedBrand
  }
}
