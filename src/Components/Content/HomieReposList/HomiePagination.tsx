import { Button } from 'antd'
import { FC, useContext } from 'react'
import { MainStore } from '../../../Stores/MainStore'
import { StoreContext } from '../../Main/Main'
import styles from './HomieReposList.module.css'

interface PaginationButtonProps {
  clickEvent: () => void
  disable: boolean
  content: string
}
const PaginationButton: FC<PaginationButtonProps> = (props) => {
  return (
    <Button
      className={styles.repoListPageButton}
      onClick={props.clickEvent}
      disabled={props.disable}>
      {props.content}
    </Button>
  )
}

export const HomiePagination: FC = () => {
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
      {paginationButtons.map((btn) => {
        return (
          <>
            <PaginationButton
              clickEvent={btn.clickEvent}
              disable={btn.disable}
              content={btn.content}
            />
          </>
        )
      })}
    </>
  )
}
