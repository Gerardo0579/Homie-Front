import { Button, Card, Checkbox, Space } from 'antd'
import { PlusIcon } from '../../../../../Icons/PlusIcon'
import { XMarkIcon } from '../../../../../Icons/XMarkIcon'
import { ReposListsItem } from '../../../../../Types/ReposLists'
import styles from '../HomieReposListItem.module.css'

export const HomieRepoItemMenu = (
  lists: ReposListsItem[],
  UpdateDropdownVisible: () => void,
  showModal: () => void
) => {
  return (
    <>
      <Card
        className={styles.repoListMenu}
        title="Suggested lists"
        extra={
          <Button type="link" onClick={() => UpdateDropdownVisible()}>
            <XMarkIcon />
          </Button>
        }
        actions={[
          <Button
            data-testid="createListBtn"
            className={styles.createListBtn}
            onClick={() => {
              UpdateDropdownVisible()
              showModal()
            }}
            type="text"
            block>
            <PlusIcon text="Create list" />
          </Button>
        ]}>
        <Space direction="vertical">
          {lists?.map((list, i) => {
            return <Checkbox key={`checkList_${i}`}>{list.name}</Checkbox>
          })}
        </Space>
      </Card>
    </>
  )
}
