import { makeAutoObservable } from 'mobx'
import StoreLists from './StoreLists'
import StoreRepos from './StoreRepos'

export class MainStore {
  _storeRepos: StoreRepos
  _storeLists: StoreLists

  constructor() {
    this._storeRepos = new StoreRepos()
    this._storeLists = new StoreLists()
    makeAutoObservable(this)
  }
}
