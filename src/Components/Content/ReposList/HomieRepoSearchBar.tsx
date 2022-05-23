import { Col, Input, Row, Select } from 'antd'
import { FC, useContext } from 'react'
import { StoreContext } from '../../Main/Main'

const { Option, OptGroup } = Select

export const HomieRepoSearchBar: FC = () => {
  return (
    <Row gutter={16}>
      <Col span={12}>{SearchInputField()}</Col>
      <Col span={4}>{SelectTypeInput()}</Col>
      <Col span={4}>{SelectLanguageInput()}</Col>
      <Col span={4}>{SelectSortInput()}</Col>
    </Row>
  )
}

const SearchInputField = () => {
  const store = useContext(StoreContext)
  return (
    <Input
      placeholder="Find a repository..."
      value={store?._searchRepoTextInput}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        store?._updateSearchRepoTextInput(event.target.value)
      }
    />
  )
}

const SelectTypeInput = () => {
  const store = useContext(StoreContext)
  const types: string[] = [
    'All',
    'Sources',
    'Forks',
    'Archived',
    'Mirrors',
    'Templates'
  ]
  return (
    <Select
      style={{ width: '100%' }}
      value={store?._selectTypeInput}
      onChange={store?._updateSelectTypeInput}
      placeholder="Type"
      allowClear>
      <OptGroup label="Select type">
        {types.map((type) => {
          return <Option value={type}>{type}</Option>
        })}
      </OptGroup>
    </Select>
  )
}

const SelectLanguageInput = () => {
  const store = useContext(StoreContext)
  const languages: string[] | undefined = store?._reposList?.map(
    (item) => item.language
  )
  return (
    <Select
      style={{ width: '100%' }}
      value={store?._selectLanguageInput}
      onChange={store?._updateSelectLanguageInput}
      placeholder="Language"
      allowClear>
      <OptGroup label="Select language">
        {languages?.map((lang) => {
          return <Option value={lang}>{lang}</Option>
        })}
      </OptGroup>
    </Select>
  )
}

const SelectSortInput = () => {
  const store = useContext(StoreContext)
  const sorts: string[] = ['start', 'forks', 'updated']

  return (
    <Select
      style={{ width: '100%' }}
      value={store?._selectSortInput}
      onChange={store?._updateSelectSortInput}
      placeholder="Sort"
      allowClear>
      <OptGroup label="Select order">
        {sorts.map((sort) => {
          return <Option value={sort}>{sort}</Option>
        })}
      </OptGroup>
    </Select>
  )
}
