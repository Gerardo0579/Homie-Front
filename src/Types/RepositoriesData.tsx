export interface RepositoriesItemData {
  id: number
  name: string
  full_name: string
  private: boolean
  description: string
  fork: boolean
  url: string
  forks_url: string
  keys_url: string
  hooks_url: string
  languages_url: string
  stargazers_url: string
  subscribers_url: string
  subscription_url: string
  created_at: string
  updated_at: string
  stargazers_count: number
  language: string
  forks_count: number
  archived: boolean
  license: string
  is_template: boolean
  topics: string[]
  visibility: string
  forks: number
}

export interface RepositoriesData {
  incomplete_results: boolean
  items: RepositoriesItemData[]
  total_count: number
}
