import { Col, Dropdown, Row, Space } from 'antd'
import { FC, useContext, useEffect, useState } from 'react'
import useGetRepoData from '../../../../Hooks/useGetRepoData/useGetRepoData'
import { DownArrowIcon } from '../../../../Icons/DownArrowIcon'
import { StarIcon } from '../../../../Icons/StarIcon'
import { HomieListType } from '../../../../Types/HomieListType'
import { RepositoryData } from '../../../../Types/RepositoryData'
import { HomieRepoItemDescription } from './HomieRepoItemSection/HomieRepoItemDescription'
import { HomieRepoItemHeader } from './HomieRepoItemSection/HomieRepoItemHeader'
import { HomieRepoItemActions } from './HomieRepoItemSection/HomieRepoItemActions'
import { HomieRepoItemMenu } from './HomieRepoItemSection/HomieRepoItemMenu'
import HomieRepoItemModal from './HomieRepoItemSection/HomieRepoItemModal'
import { MainStore } from '../../../../Stores/MainStore'
import { StoreContext } from '../../../Main/Main'
import { HomieRepoItemTopics } from './HomieRepoItemSection/HomieRepoItemTopics'
import styles from './HomieReposListItem.module.css'

interface HomieListItemProps {
  item: HomieListType
}
export const HomieReposListItem: FC<HomieListItemProps> = ({ item }) => {
  const [dropdownVisible, SetDropdownVisible] = useState<boolean>(false)
  const [starClicked, SetStarClicked] = useState<boolean>(false)

  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const { _storeLists: storeLists }: MainStore = useContext(StoreContext)!
  const repo = storeLists._reposListGet(item.id)

  const UpdateDropdownVisible = () => {
    SetDropdownVisible(!dropdownVisible)
  }
  const [values, refetchRepoData] = useGetRepoData(item.repo_name)
  const { data }: { data?: RepositoryData; loading?: boolean } = values

  useEffect(() => {
    refetchRepoData()
  }, [item.is_forked, refetchRepoData])

  return (
    <div className={styles.itemWrapper}>
      <Row>
        <Col span={18}>
          <Space size={10} direction="vertical">
            <HomieRepoItemHeader
              repo_name={item.repo_name}
              repo_url={item.repo_url}
              type={item.type}
            />
            <HomieRepoItemDescription
              is_forked={data?.fork || false}
              fork_name={data?.parent?.full_name}
              fork_url={data?.parent?.url}
              description={item.description}
            />
            <HomieRepoItemTopics topics={data?.topics} />
            <HomieRepoItemActions
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
            className={styles.starButton}
            style={{ float: 'right' }}
            onClick={() => SetStarClicked(!starClicked)}
            visible={dropdownVisible}
            onVisibleChange={UpdateDropdownVisible}
            overlay={() =>
              HomieRepoItemMenu(repo?.lists, UpdateDropdownVisible, showModal)
            }
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
      <HomieRepoItemModal
        repoId={item.id}
        handleCancel={handleCancel}
        isModalVisible={isModalVisible}
      />
    </div>
  )
}
