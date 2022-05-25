import { makeAutoObservable } from 'mobx'
import StoreLists from './StoreLists'
import StoreRepos from './StoreRepos'

export class MainStore {
  _storeRepos: StoreRepos
  _storeLists: StoreLists

  constructor(storeRepos: StoreRepos, storeLists: StoreLists) {
    this._storeRepos = storeRepos
    this._storeLists = storeLists
    makeAutoObservable(this)
  }
}
