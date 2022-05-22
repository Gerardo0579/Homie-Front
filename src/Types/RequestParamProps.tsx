export interface RequestParamsProps {
  q?: string
  type: 'All' | 'Sources' | 'Forks' | 'Archived' | 'Mirrors' | 'Templates'
  language?: string
  sort?: 'stars' | 'forks' | 'updated'
  page: number
}
