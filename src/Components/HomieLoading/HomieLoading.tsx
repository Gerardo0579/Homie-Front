import { Col, Row, Spin } from 'antd'
import { FC } from 'react'

interface LoadingComponentProps {
  tip: string
}
export const LoadingComponent: FC<LoadingComponentProps> = ({ tip }) => {
  return (
    <>
      <Row style={{ marginTop: '50%' }} justify="center">
        <Col span={4}>
          <Spin size="large" tip={tip} />
        </Col>
      </Row>
    </>
  )
}
