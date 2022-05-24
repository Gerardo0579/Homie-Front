import { Col, Input, Row, Select } from 'antd'
import { FC, useContext } from 'react'
import { StoreContext } from '../../Main/Main'
import { observer } from 'mobx-react'
import { MainStore } from '../../../Stores/MainStore'
import styles from './HomieReposList.module.css'

const { Option, OptGroup } = Select

const HomieReposSearchBar: FC = () => {
  return (
    <div className={styles.reposSearchBar}>
      <Row gutter={8}>
        <Col span={9}>{SearchInputField()}</Col>
        <Col span={5}>{SelectTypeInput()}</Col>
        <Col span={5}>{SelectLanguageInput()}</Col>
        <Col span={5}>{SelectSortInput()}</Col>
      </Row>
    </div>
  )
}

const SearchInputField = () => {
  const { _storeRepos: store }: MainStore = useContext(StoreContext)!
  const handleOnchage = (event: React.ChangeEvent<HTMLInputElement>) =>
    store?._updateSearchRepoTextInput(event.target.value)

  return (
    <Input
      allowClear
      className={styles.searchInput}
      placeholder="Find a repository..."
      value={store?._searchRepoTextInput}
      onChange={(e) => handleOnchage(e)}
    />
  )
}

const SelectTypeInput = () => {
  const { _storeRepos: store }: MainStore = useContext(StoreContext)!
  const types: string[] = ['All', 'Forks', 'Archived', 'Mirrors']
  const handleOnchage = (value: string) => store?._updateSelectTypeInput(value)

  return (
    <Select
      className={styles.selectInput}
      style={{ width: '100%' }}
      value={store?._selectTypeInput}
      onChange={(e) => handleOnchage(e)}
      placeholder="Type"
      allowClear>
      <OptGroup label="Select type">
        {types.map((type) => {
          return (
            <Option key={type} value={type}>
              {type}
            </Option>
          )
        })}
      </OptGroup>
    </Select>
  )
}

const SelectLanguageInput = () => {
  const { _storeRepos: store }: MainStore = useContext(StoreContext)!
  const languages: string[] | undefined = store?._reposList
    ?.map((item) => item.language)
    .filter((v, i, a) => a.indexOf(v) === i)
  return (
    <Select
      className={styles.selectInput}
      style={{ width: '100%' }}
      value={store?._selectLanguageInput}
      onChange={store?._updateSelectLanguageInput}
      placeholder="Language"
      allowClear>
      <OptGroup label="Select language">
        {languages?.map((lang) => {
          return (
            <Option key={lang} value={lang}>
              {lang}
            </Option>
          )
        })}
      </OptGroup>
    </Select>
  )
}

const SelectSortInput = () => {
  const { _storeRepos: store }: MainStore = useContext(StoreContext)!
  const sorts: string[] = ['stars', 'forks', 'updated']
  const handleOnchage = (value: string) => store?._updateSelectSortInput(value)

  return (
    <Select
      className={styles.selectInput}
      style={{ width: '100%' }}
      value={store?._selectSortInput}
      onChange={(e) => handleOnchage(e)}
      placeholder="Sort"
      allowClear>
      <OptGroup label="Select order">
        {sorts.map((sort) => {
          return (
            <Option key={sort} value={sort}>
              {sort}
            </Option>
          )
        })}
      </OptGroup>
    </Select>
  )
}

export default observer(HomieReposSearchBar)
