import { FC, useEffect } from 'react'
import { Col, Row } from 'antd'
import { useParams } from 'react-router-dom'
import useGetUser from '../../Hooks/useGetUser/useGetUser'
import { HomieHeader } from '../Header/HomieHeader'
import { HomieSider } from '../Sider/HomieSider'
import { HomieContent } from '../Content/HomieContent'
import { HomieFooter } from '../Footer/Footer'
import useGetRepos from '../../Hooks/useGetRepos/useGetRepos'

export const Main: FC = () => {
  const { username } = useParams<{ username: string }>()
  const [{ data: userData, loading: loadingUser }, refetchUser] =
    useGetUser(username)
  const [{ data: reposData, loading: loadingRepos }, refetchRepos] =
    useGetRepos(username)

  useEffect(() => {
    refetchUser()
  }, [username, refetchUser])

  useEffect(() => {
    refetchRepos()
  }, [username, refetchRepos])

  return (
    <>
      <Row>
        <Col span={12} push={8}>
          <HomieHeader />
        </Col>
        <Col span={16} push={4}>
          <Row gutter={32}>
            <Col span={6}>{userData && <HomieSider userData={userData} />}</Col>
            <Col span={18}>
              {reposData && <HomieContent reposData={reposData} />}
            </Col>
          </Row>
        </Col>
        <Col span={16} push={4}>
          <HomieFooter />
        </Col>
      </Row>
    </>
  )
}
