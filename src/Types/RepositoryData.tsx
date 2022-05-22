export interface RepositoryData {
  id: number
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
}
