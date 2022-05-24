import { Button, Col, Row } from 'antd'
import { FC, useContext } from 'react'
import { HomieListType } from '../../../Types/HomieListType'
import { observer } from 'mobx-react'
import { HomieReposListItem } from './Item/HomieReposListItem'
import { MainStore } from '../../../Stores/MainStore'
import { StoreContext } from '../../Main/Main'
import { HomieDivider as Divider } from '../../HomieDivider/HomieDivider'

interface PaginationButtonProps {
  clickEvent: () => void
  disable: boolean
  content: string
}
const PaginationButton: FC<PaginationButtonProps> = (props) => {
  return (
    <Button onClick={props.clickEvent} disabled={props.disable}>
      {props.content}
    </Button>
  )
}

interface HomieListProps {
  items: HomieListType[]
}

const HomieReposList: FC<HomieListProps> = ({ items }) => {
  const { _storeRepos: storeRepos }: MainStore = useContext(StoreContext)!

  const paginationButtons = [
    {
      clickEvent: () => {
        storeRepos._updateCurrentPage(storeRepos._currentPage - 1)
      },
      disable: storeRepos._currentPage === 1,
      content: 'Previous'
    },
    {
      clickEvent: () => {
        storeRepos._updateCurrentPage(storeRepos._currentPage + 1)
      },
      disable: storeRepos._currentPage === storeRepos._totalPages,
      content: 'Next'
    }
  ]

  return (
    <>
      <Divider />
      {`${storeRepos._totalResults} results over ${storeRepos._totalPages} pages. Page ${storeRepos._currentPage}`}
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
        {paginationButtons.map((btn) => {
          return (
            <Col>
              <PaginationButton
                clickEvent={btn.clickEvent}
                disable={btn.disable}
                content={btn.content}
              />
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default observer(HomieReposList)