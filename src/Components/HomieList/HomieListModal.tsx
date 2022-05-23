import { Button, Divider, Form, Input, Modal, Space } from 'antd'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { HomieBadge } from '../Badge/HomieBadge'

interface HomieListModalProps {
  handleCancel: () => void
  isModalVisible: boolean
}
export const HomieListModal: FC<HomieListModalProps> = ({
  handleCancel,
  isModalVisible
}) => {
  return (
    <Modal
      title="Create list"
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={null}>
      <>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}>
          <Form.Item name="listName">
            <Input placeholder="Name this list" />
          </Form.Item>
          <Form.Item name="description">
            <Input.TextArea placeholder="Write a description" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" block>
              Create
            </Button>
            Tip: Sorry, original tip doesn't work here
          </Form.Item>
        </Form>
        <Divider />
        <Space>
          <HomieBadge content="Beta" />
          <div>
            Lists are currently in beta.
            <Link to="https://github.com/github/feedback/discussions/categories/lists-feedback">
              Share feedback and report bugs.
            </Link>
          </div>
        </Space>
      </>
    </Modal>
  )
}
