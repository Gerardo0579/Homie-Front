import { Button, Card, Checkbox, Space } from 'antd'
import { PlusIcon } from '../../Icons/PlusIcon'
import { XMarkIcon } from '../../Icons/XMarkIcon'
import { ReposListsItem } from '../../Types/ReposLists'

export const HomieRepoListMenu = (
  lists: ReposListsItem[],
  UpdateDropdownVisible: () => void,
  showModal: () => void
) => {
  return (
    <>
      <Card
        title="Suggested lists"
        extra={
          <Button type="link" onClick={() => UpdateDropdownVisible()}>
            <XMarkIcon />
          </Button>
        }
        actions={[
          <Button
            onClick={() => {
              UpdateDropdownVisible()
              showModal()
            }}
            type="text"
            block>
            <PlusIcon text="Create list" />
          </Button>
        ]}
        style={{ width: 300 }}>
        <Space direction="vertical">
          {lists?.map((list, i) => {
            return <Checkbox key={`checkList_${i}`}>{list.name}</Checkbox>
          })}
        </Space>
      </Card>
    </>
  )
}
