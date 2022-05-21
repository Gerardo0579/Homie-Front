import { FC, useState } from 'react'
import { Button, Divider, Image, Space } from 'antd'
import { UserData } from '../../Types/UserData'
import { FallBackImg } from './fallback'
import styles from './HomieSider.module.css'
import { Typography } from 'antd'
import { UserOutlined, LineOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { BuildingIcon } from '../../Icons/BuildingIcon'
import { LocationIcon } from '../../Icons/LocationIcon'

const { Text } = Typography

interface HomieSiderProps {
  userData: UserData
}

export const HomieSider: FC<HomieSiderProps> = ({ userData }) => {
  const [followText, SetFollowText] = useState<string>('Follow')

  const onClickFollow = () => {
    if (followText === 'Follow') SetFollowText('Unfollow')
    else SetFollowText('Follow')
  }

  return (
    <>
      <Image
        className={styles.avatarImg}
        src={userData.avatar_url}
        fallback={FallBackImg}
      />
      <Space direction="vertical">
        <Text className={styles.title1}>{userData.name}</Text>
        <Text className={styles.title2}>{userData.login}</Text>
      </Space>
      <Button onClick={onClickFollow} block>
        {followText}
      </Button>
      <Text>{userData.bio}</Text>
      <Space direction="horizontal">
        <Link to={userData.followers_url} type="text">
          <UserOutlined />
          {`${userData.followers} Follower`}
        </Link>
        <LineOutlined />
        <Link
          to={userData.following_url}
          type="text">{`${userData.following} following`}</Link>
      </Space>
      <Space direction="vertical">
        <Link to={userData.organizations_url} type="text">
          <BuildingIcon text={userData.company} />
        </Link>
        <LocationIcon text={userData.location} />
        <Link to={userData.email} type="text">
          <BuildingIcon text={userData.email} />
        </Link>
        <Link to={userData.blog} type="text">
          <BuildingIcon text={userData.blog} />
        </Link>
      </Space>
      <Divider />
    </>
  )
}

const LoadingUser: FC = () => {
  return <>Loading</>
}

const UserNotFound: FC = () => {
  return <>User not found</>
}
