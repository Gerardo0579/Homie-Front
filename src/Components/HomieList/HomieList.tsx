import {
  Button,
  Card,
  Checkbox,
  Col,
  Divider,
  Dropdown,
  Row,
  Space
} from 'antd'
import { FC, ReactNode, useEffect, useState } from 'react'
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
import { HomieRepoDescription } from '../Content/ReposList/HomieRepoDescription'
import { HomieRepoHeader } from '../Content/ReposList/HomieRepoHeader'
import { HomieRepoActions } from '../Content/ReposList/HomiRepoActions'
import { HomieListModal } from './HomieListModal'

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

      <Row style={{ marginTop: '2em', marginBottom: '2em' }} justify="center">
        <Col>
          <Button>Previos</Button>
        </Col>
        <Col>
          <Button>Next</Button>
        </Col>
      </Row>
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
          {checks.map((check, i) => {
            return <Checkbox key={`check_${i}`}>{check}</Checkbox>
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
    refetchRepoData()
  }, [item.is_forked, refetchRepoData])

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
              is_forked={data?.fork || false}
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
      <HomieListModal
        handleCancel={handleCancel}
        isModalVisible={isModalVisible}
      />
    </>
  )
}
