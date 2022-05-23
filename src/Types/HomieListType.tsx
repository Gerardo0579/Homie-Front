export interface HomieListType {
  id: number
  repo_name: string
  repo_url: string
  type: 'Private' | 'Public'
  is_forked: boolean
  fork_url: string
  description: string
  topics: string[]
  language: string
  language_url: string
  stars: number
  stars_url: string
  forks: number
  forks_url: string
  license_type: string
  last_update: string
  username: string
}
