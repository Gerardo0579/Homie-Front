import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  Button,
  Card,
  Checkbox,
  Col,
  Divider,
  Dropdown,
  Menu,
  Row,
  Space
} from 'antd'
import { FC, ReactNode, useState } from 'react'
import { CubesIcon } from '../../Icons/CubesIcon'
import { DownArrowIcon } from '../../Icons/DownArrowIcon'
import { PlusIcon } from '../../Icons/PlusIcon'
import { RocketIcon } from '../../Icons/RocketIcon'
import { StarIcon } from '../../Icons/StarIcon'
import { WandSparklesIcon } from '../../Icons/WandSparklesIcon'
import { XMarkIcon } from '../../Icons/XMarkIcon'
import { HomieListType } from '../../Types/HomieListType'
import { HomieRepoDescription } from '../Content/ReposList/HomieRepoDescription'
import { HomieRepoHeader } from '../Content/ReposList/HomieRepoHeader'
import { HomieRepoActions } from '../Content/ReposList/HomiRepoActions'

interface HomieListProps {
  items: HomieListType[]
  pageSize: number
}

export const HomieList: FC<HomieListProps> = ({ items, pageSize }) => {
  return (
    <Space direction="vertical">
      <Divider />
      {items.map((item) => {
        return (
          <>
            <HomieListItem item={item} />
            <Divider />
          </>
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
  const checks: ReactNode[] = [
    <CubesIcon text={'Future ideas'} />,
    <RocketIcon text="My stack" />,
    <WandSparklesIcon text="Inspiration" />
  ]
  const menu = (UpdateDropdownVisible: () => void) => (
    <>
      <Card
        title="Suggested lists"
        extra={
          <Button type="link" onClick={() => UpdateDropdownVisible()}>
            <XMarkIcon />
          </Button>
        }
        actions={[
          <Button type="text" block>
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

  return (
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
            fork_url={item.fork_url}
            description={item.description}
          />
          <HomieRepoActions
            language={item.language}
            language_url={item.language_url}
            stars={item.stars}
            stars_url={item.stars_url}
            forks={item.forks}
            forks_url={item.forks_url}
            license_type={item.license_type}
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
          overlay={menu(UpdateDropdownVisible)}
          trigger={['click']}
          icon={<DownArrowIcon />}>
          {starClicked ? <StarIcon text="Starred" /> : <StarIcon text="Star" />}
        </Dropdown.Button>
      </Col>
    </Row>
  )
}
