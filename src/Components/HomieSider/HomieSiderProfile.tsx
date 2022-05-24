import { Space, Image, Button, Divider, Typography } from 'antd'
import { UserOutlined, LineOutlined } from '@ant-design/icons'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { BuildingIcon } from '../../Icons/BuildingIcon'
import { LocationIcon } from '../../Icons/LocationIcon'
import { UserData } from '../../Types/UserData'
import { FallBackImg } from './fallback'
import styles from './HomieSider.module.css'

const { Text } = Typography

interface HomieSiderProfileProps {
  userData: UserData
}

export const HomieSiderProfile: FC<HomieSiderProfileProps> = ({ userData }) => {
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
        <Link
          to={{ pathname: userData.followers_url }}
          type="text"
          target="_blank">
          <UserOutlined />
          {`${userData.followers} Follower`}
        </Link>
        <LineOutlined />
        <Link
          to={{ pathname: userData.following_url }}
          type="text"
          target="_blank">{`${userData.following} following`}</Link>
      </Space>
      <Space direction="vertical">
        <Link
          to={{ pathname: userData.organizations_url }}
          type="text"
          target="_blank">
          <BuildingIcon text={userData.company} />
        </Link>
        <LocationIcon text={userData.location} />
        <Link to={{ pathname: userData.blog }} type="text" target="_blank">
          <BuildingIcon text={userData.blog} />
        </Link>
      </Space>
      <Divider />
    </>
  )
}
