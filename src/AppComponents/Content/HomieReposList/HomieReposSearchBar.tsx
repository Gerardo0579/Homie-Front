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

  const selectProp = {
    value: store?._selectTypeInput,
    options: types,
    onChange: handleOnchage,
    placeholder: 'Type',
    label: 'Select type'
  }

  return <SelectBuilder {...selectProp} />
}

const SelectLanguageInput = () => {
  const { _storeRepos: store }: MainStore = useContext(StoreContext)!
  const languages: string[] | undefined = store?._reposList
    ?.map((item) => item.language)
    .filter((v, i, a) => a.indexOf(v) === i)

  const selectProp = {
    value: store?._selectLanguageInput,
    options: languages,
    onChange: store?._updateSelectLanguageInput,
    placeholder: 'Language',
    label: 'Select language'
  }

  return <SelectBuilder {...selectProp} />
}

const SelectSortInput = () => {
  const { _storeRepos: store }: MainStore = useContext(StoreContext)!
  const sorts: string[] = ['stars', 'forks', 'updated']
  const handleOnchage = (value: string) => store?._updateSelectSortInput(value)

  const selectProp = {
    value: store?._selectSortInput,
    options: sorts,
    onChange: handleOnchage,
    placeholder: 'Sort',
    label: 'Select order'
  }

  return <SelectBuilder {...selectProp} />
}

interface SelectBuilderProps {
  value: string | undefined
  options: string[]
  onChange: (value: string) => void
  placeholder: string
  label: string
}
const SelectBuilder: FC<SelectBuilderProps> = ({
  value,
  options,
  onChange,
  placeholder,
  label
}) => {
  return (
    <Select
      className={styles.selectInput}
      style={{ width: '100%' }}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      allowClear>
      <OptGroup label={label}>
        {options.map((opt) => {
          return (
            <Option key={opt} value={opt}>
              {opt}
            </Option>
          )
        })}
      </OptGroup>
    </Select>
  )
}

export default observer(HomieReposSearchBar)
