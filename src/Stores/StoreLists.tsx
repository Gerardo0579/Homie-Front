import { makeAutoObservable } from 'mobx'
import { RepositoriesData } from '../Types/RepositoriesData'
import { ReposLists, ReposListsItem } from '../Types/ReposLists'
class StoreLists {
  _reposLists: ReposLists[] = []

  constructor() {
    makeAutoObservable(this)
  }

  _createLists = (repos: RepositoriesData) => {
    const basicList: ReposListsItem[] = [
      { name: 'Future ideas', description: '' },
      { name: 'My stack', description: '' },
      { name: 'Inspiration', description: '' }
    ]
    this._reposLists = repos?.items
      .map((repo) => repo.id)
      .map((id) => {
        const list: ReposLists = { id: id, lists: basicList }
        return list
      })
  }

  _reposListAdd = (id: number, name: string, description: string) => {
    this._reposLists.filter((list) => list.id === id)[0].lists =
      this._reposLists
        .filter((list) => list.id === id)[0]
        .lists.concat({ name: name, description: description })
  }

  _reposListGet = (id: number) => {
    return this._reposLists.filter((list) => list.id === id)[0]
  }
}

export default StoreLists
