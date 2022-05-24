import { createContext, FC } from 'react'
import { Col, Row } from 'antd'
import { HomieHeader } from '../Header/HomieHeader'
import { HomieSider } from '../HomieSider/HomieSider'
import { HomieFooter } from '../Footer/Footer'
import HomieContent from '../Content/HomieContent'
import { MainStore } from '../../Stores/MainStore'

export const StoreContext = createContext<MainStore | null>(null)

export const Main: FC = () => {
  return (
    <StoreContext.Provider value={new MainStore()}>
      <Row>
        <Col span={12} push={8}>
          <HomieHeader />
        </Col>
        <Col span={16} push={4}>
          <Row justify="center" gutter={32}>
            <Col span={6}>
              <HomieSider />
            </Col>
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
