import { Button, Divider, Form, Input, Modal, Space } from 'antd'
import { FC, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { HomieBadge } from '../../../../Badge/HomieBadge'
import { observer } from 'mobx-react'
import { MainStore } from '../../../../../Stores/MainStore'
import { StoreContext } from '../../../../Main/Main'

const GITHUB_URL =
  'https://github.com/github/feedback/discussions/categories/lists-feedback'

interface HomieRepoItemModalProps {
  repoId: number
  handleCancel: () => void
  isModalVisible: boolean
}

const HomieRepoItemModal: FC<HomieRepoItemModalProps> = ({
  repoId,
  handleCancel,
  isModalVisible
}) => {
  const { _storeLists: store }: MainStore = useContext(StoreContext)!
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  const handleChangeDescription = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value)
  }
  const addListToStore = () => {
    setName('')
    setDescription('')
    store._reposListAdd(repoId, name, description)
  }

  return (
    <Modal
      title="Create list"
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={null}
      destroyOnClose>
      <>
        <Form name="normal_login" className="login-form">
          <Form.Item name="listName">
            <Input
              value={name}
              placeholder="Name this list"
              onChange={handleChangeName}
            />
          </Form.Item>
          <Form.Item name="description">
            <Input.TextArea
              value={description}
              placeholder="Write a description"
              onChange={handleChangeDescription}
            />
          </Form.Item>

          <Form.Item>
            <Button
              onClick={() => {
                addListToStore()
                handleCancel()
              }}
              type="primary"
              block>
              Create
            </Button>
            Tip: Sorry, original tip doesn't work here
          </Form.Item>
        </Form>
        <Divider />
        <Space>
          <HomieBadge
            borderColor="#2da44e"
            backgroundColor="#fff"
            fontColor="#1a7f37"
            content="Beta"
          />
          <div>
            Lists are currently in beta.{' '}
            <Link to={{ pathname: GITHUB_URL }} type="text" target="_blank">
              Share feedback and report bugs.
            </Link>
          </div>
        </Space>
      </>
    </Modal>
  )
}

export default observer(HomieRepoItemModal)
