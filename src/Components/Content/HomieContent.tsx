import { Col, List, Row, Select, Space, Typography } from 'antd'
import { FC } from 'react'
import { RepositoriesData } from '../../Types/RepositoriesData'
import { HomieRepoActions } from './ReposList/HomiRepoActions'
import { HomieRepoDescription } from './ReposList/HomieRepoDescription'
import { HomieRepoHeader } from './ReposList/HomieRepoHeader'
import { Input } from 'antd'

const { Search } = Input
const { Option } = Select

interface HomieContentProps {
  reposData: RepositoriesData[]
}

const manageReposData = ({ reposData }: HomieContentProps) => {
  return reposData.map((repo: RepositoriesData) => {
    return {
      repo_name: repo.full_name,
      repo_url: repo.url,
      type: repo.private ? 'Private' : 'Public',
      is_forked: repo.fork,
      fork_url: repo.forks_url,
      description: repo.description,
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
  const listDataSource = manageReposData(data)
  const pageSize = { pageSize: 30 }
  return (
    <>
      <Row gutter={16}>
        <Col span={15}>
          <Search placeholder="input search loading default" loading />
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
        <Col span={3}>
          <Select defaultValue="lucy" style={{ width: 120 }} allowClear>
            <Option value="lucy">Lucy</Option>
          </Select>
        </Col>
      </Row>
      <List
        itemLayout="vertical"
        size="large"
        pagination={pageSize}
        dataSource={listDataSource}
        renderItem={(item) => (
          <List.Item key={item.repo_name} actions={HomieRepoActions(item)}>
            <List.Item.Meta title={HomieRepoHeader(item)} />
            {HomieRepoDescription(item)}
          </List.Item>
        )}
      />
    </>
  )
}
