import { Row } from 'antd'
import { FC, useContext } from 'react'
import { HomieListType } from '../../../Types/HomieListType'
import { observer } from 'mobx-react'
import { HomieReposListItem } from './Item/HomieReposListItem'
import { MainStore } from '../../../Stores/MainStore'
import { StoreContext } from '../../Main/Main'
import { HomieDivider as Divider } from '../../../Components/HomieDivider/HomieDivider'
import { HomiePagination } from './HomiePagination'

interface HomieListProps {
  items: HomieListType[]
}

const HomieReposList: FC<HomieListProps> = ({ items }) => {
  const { _storeRepos: storeRepos }: MainStore = useContext(StoreContext)!
  const paginationInfo = `Page ${storeRepos._currentPage} of ${storeRepos._totalPages} (5 of ${storeRepos._totalResults} results in total)`

  return (
    <>
      <Divider />
      {paginationInfo}
      <Divider />
      {items?.map((item) => {
        return (
          <div key={item.repo_name}>
            <HomieReposListItem item={item} />
            <Divider />
          </div>
        )
      })}

      <Row style={{ marginTop: '5em', marginBottom: '2em' }} justify="center">
        <HomiePagination />
      </Row>
    </>
  )
}

export default observer(HomieReposList)
