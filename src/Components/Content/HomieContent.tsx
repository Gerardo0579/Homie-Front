import { List, Space, Typography } from 'antd'
import { FC } from 'react'
import { RepositoriesData } from '../../Types/RepositoriesData'
import { Link } from 'react-router-dom'
import { StarIcon } from '../../Icons/StarIcon'
import { ForkIcon } from '../../Icons/ForkIcon'
import { BalanceIcon } from '../../Icons/BalanceIcon'
import { HomieBadge } from '../Badge/HomieBadge'
import { HomieLanguageItem } from '../LanguageItem.tsx/HomieLanguageItem'
import { LanguagesColorSchemasData } from './LanguagesColorSchemasData'

const { Text } = Typography

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
    <List
      itemLayout="vertical"
      size="large"
      pagination={pageSize}
      dataSource={listDataSource}
      renderItem={(item) => (
        <List.Item key={item.repo_name} actions={RepoActions(item)}>
          <List.Item.Meta title={RepoHeader(item)} />
          {RepoDescription(item)}
        </List.Item>
      )}
    />
  )
}

function RepoDescription(item: {
  is_forked: boolean
  fork_url: string
  description: string
}) {
  return (
    <Space direction="vertical">
      {item.is_forked && (
        <Text>
          Forked from{' '}
          <Link to={item.fork_url}>{formatForkUrl(item.fork_url)}</Link>
        </Text>
      )}
      <Text>{item.description}</Text>
    </Space>
  )
}

const formatForkUrl = (url: string) => url.replace('https://github.com/', '')

function RepoHeader(item: {
  repo_name: string
  repo_url: string
  type: string
}) {
  return (
    <Space>
      <a href={item.repo_url}>{item.repo_name}</a>
      <HomieBadge content={item.type} />
    </Space>
  )
}

function RepoActions(item: {
  language: string
  language_url: string
  stars: number
  stars_url: string
  forks: number
  forks_url: string
  license_type: string
  last_update: string
}) {
  return [
    <Link to={item.language_url} type="text">
      <HomieLanguageItem
        Content={item.language}
        CircleColor={GetLangaugeColor(item.language)}
      />
    </Link>,
    <Link to={item.stars_url} type="text">
      <StarIcon text={item.stars} />
    </Link>,
    <Link to={item.forks_url} type="text">
      <ForkIcon text={item.forks} />
    </Link>,
    <BalanceIcon text={item.license_type} />,
    <Link to={item.forks_url} type="text">
      <ForkIcon text={item.forks} />
    </Link>,
    <Text>{`Updated on ${item.last_update}`}</Text>
  ]
}

const GetLangaugeColor = (language: string): string => {
  const langColor = LanguagesColorSchemasData.filter(
    (langColor) =>
      langColor.Language.toLowerCase() === language?.toLocaleLowerCase()
  )

  if (langColor?.length == 0) return 'grey'
  else return langColor[0].Color
}
