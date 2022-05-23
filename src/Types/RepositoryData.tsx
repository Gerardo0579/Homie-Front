export interface RepositoryData {
  id: number
  fork: boolean
  license: {
    key: string
    name: string
    spdx_id: string
    url: string
  }
  parent: {
    id: number
    name: string
    full_name: string
    private: false
    description: string
    url: string
  }
  topics: string[]
}
