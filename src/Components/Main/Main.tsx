import { createContext, FC, useEffect } from 'react'
import { Col, Row } from 'antd'
import { useParams } from 'react-router-dom'
import useGetUser from '../../Hooks/useGetUser/useGetUser'
import { HomieHeader } from '../Header/HomieHeader'
import { HomieSider } from '../Sider/HomieSider'
import { HomieFooter } from '../Footer/Footer'
import HomieContent from '../Content/HomieContent'
import { MainStore } from '../../Stores/MainStore'

export const StoreContext = createContext<MainStore | null>(null)

export const Main: FC = () => {
  const { username } = useParams<{ username: string }>()
  const [{ data: userData, loading: loadingUser }, refetchUser] =
    useGetUser(username)

  useEffect(() => {
    refetchUser()
  }, [username, refetchUser])

  return (
    <StoreContext.Provider value={new MainStore()}>
      <Row>
        <Col span={12} push={8}>
          <HomieHeader />
        </Col>
        <Col span={16} push={4}>
          <Row justify="center" gutter={32}>
            <Col span={6}>{userData && <HomieSider userData={userData} />}</Col>
            <Col span={18}>
              <HomieContent />
            </Col>
          </Row>
        </Col>
        <Col span={16} push={4}>
          <HomieFooter />
        </Col>
      </Row>
    </StoreContext.Provider>
  )
}
