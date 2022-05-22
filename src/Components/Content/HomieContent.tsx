import { Col, Row, Select } from 'antd'
import { FC } from 'react'
import {
  RepositoriesData,
  RepositoriesItemData
} from '../../Types/RepositoriesData'
import { Input } from 'antd'
import { HomieList } from '../HomieList/HomieList'
import { HomieListType } from '../../Types/HomieListType'
import { useParams } from 'react-router-dom'

const { Option, OptGroup } = Select

interface HomieContentProps {
  reposData: RepositoriesData
}

const manageReposData = (
  { reposData }: HomieContentProps,
  username: string
): HomieListType[] => {
  return reposData.items.map((repo: RepositoriesItemData) => {
    return {
      username: username,
      repo_name: repo.full_name,
      repo_url: repo.url,
      type: repo.private ? 'Private' : 'Public',
      is_forked: repo.fork,
      fork_url: repo.forks_url,
      description: repo.description,
      topics: repo.topics,
      language: repo.language,
      language_url: repo.languages_url,
      stars: repo.stargazers_count,
      stars_url: repo.stargazers_url,
      forks: repo.forks_count,
      forks_url: repo.forks_url,
      license_type: 'temp',
      last_update: new Date(repo.updated_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  })
}

export const HomieContent: FC<HomieContentProps> = (data) => {
  const { username } = useParams<{ username: string }>()
  const listDataSource: HomieListType[] = manageReposData(data, username)
  const pageSize = 30
  return (
    <>
      <Row gutter={16}>
        <Col span={15}>
          <Input placeholder="Find a repository..." />
        </Col>
        <Col span={3}>
          <Select defaultValue="lucy" style={{ width: 120 }} allowClear>
            <OptGroup label="Manager">
              <Option value="lucy">Lucy</Option>
            </OptGroup>
          </Select>
        </Col>
        <Col span={3}>
          <Select defaultValue="lucy" style={{ width: 120 }} allowClear>
            <Option value="lucy">Lucy</Option>
          </Select>
        </Col>
        <Col span={3}>
          <Select defaultValue="lucy" style={{ width: 120 }} allowClear>
            <Option value="lucy">Lucy</Option>
          </Select>
        </Col>
      </Row>

      <HomieList items={listDataSource} pageSize={pageSize} />
    </>
  )
}
