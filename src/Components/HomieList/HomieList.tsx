import {
  Button,
  Card,
  Checkbox,
  Col,
  Divider,
  Dropdown,
  Form,
  Input,
  Modal,
  Row,
  Space
} from 'antd'
import { FC, ReactNode, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useGetRepoData from '../../Hooks/useGetRepoData/useGetRepoData'
import { CubesIcon } from '../../Icons/CubesIcon'
import { DownArrowIcon } from '../../Icons/DownArrowIcon'
import { PlusIcon } from '../../Icons/PlusIcon'
import { RocketIcon } from '../../Icons/RocketIcon'
import { StarIcon } from '../../Icons/StarIcon'
import { WandSparklesIcon } from '../../Icons/WandSparklesIcon'
import { XMarkIcon } from '../../Icons/XMarkIcon'
import { HomieListType } from '../../Types/HomieListType'
import { RepositoryData } from '../../Types/RepositoryData'
import { HomieBadge } from '../Badge/HomieBadge'
import { HomieRepoDescription } from '../Content/ReposList/HomieRepoDescription'
import { HomieRepoHeader } from '../Content/ReposList/HomieRepoHeader'
import { HomieRepoActions } from '../Content/ReposList/HomiRepoActions'

interface HomieListProps {
  items: HomieListType[]
}

export const HomieList: FC<HomieListProps> = ({ items }) => {
  return (
    <Space direction="vertical">
      <Divider />
      {items?.map((item) => {
        return (
          <div key={item.repo_name}>
            <HomieListItem item={item} />
            <Divider />
          </div>
        )
      })}
    </Space>
  )
}

interface HomieListItemProps {
  item: HomieListType
}

const HomieListItem: FC<HomieListItemProps> = ({ item }) => {
  const [dropdownVisible, SetDropdownVisible] = useState<boolean>(false)
  const [starClicked, SetStarClicked] = useState<boolean>(false)

  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  const checks: ReactNode[] = [
    <CubesIcon text={'Future ideas'} />,
    <RocketIcon text="My stack" />,
    <WandSparklesIcon text="Inspiration" />
  ]
  const menu = (UpdateDropdownVisible: () => void, showModal: () => void) => (
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
          {checks.map((check) => {
            return <Checkbox>{check}</Checkbox>
          })}
        </Space>
      </Card>
    </>
  )

  const UpdateDropdownVisible = () => {
    SetDropdownVisible(!dropdownVisible)
  }
  const [values, refetchRepoData] = useGetRepoData(item.repo_name)
  const { data, loading }: { data?: RepositoryData; loading?: boolean } = values

  useEffect(() => {
    if (item.is_forked) refetchRepoData()
  }, [refetchRepoData])

  return (
    <>
      <Row>
        <Col span={18}>
          <Space direction="vertical">
            <HomieRepoHeader
              repo_name={item.repo_name}
              repo_url={item.repo_url}
              type={item.type}
            />
            <HomieRepoDescription
              is_forked={item.is_forked}
              fork_name={data?.parent?.full_name}
              fork_url={data?.parent?.url}
              description={item.description}
            />
            <HomieRepoActions
              language={item.language}
              language_url={item.language_url}
              stars={item.stars}
              stars_url={item.stars_url}
              forks={item.forks}
              forks_url={item.forks_url}
              license_type={data?.license?.name}
              license_url={data?.license?.url}
              last_update={item.last_update}
            />
          </Space>
        </Col>
        <Col span={6}>
          <Dropdown.Button
            style={{ float: 'right' }}
            onClick={() => SetStarClicked(!starClicked)}
            visible={dropdownVisible}
            onVisibleChange={UpdateDropdownVisible}
            overlay={menu(UpdateDropdownVisible, showModal)}
            trigger={['click']}
            icon={<DownArrowIcon />}>
            {starClicked ? (
              <StarIcon text="Starred" />
            ) : (
              <StarIcon text="Star" />
            )}
          </Dropdown.Button>
        </Col>
      </Row>
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
    </>
  )
}
