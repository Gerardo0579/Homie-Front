import { Col, Result, Row } from 'antd'
import { FC } from 'react'

interface HomieAlertProps {
  message: string
  status: 'success' | 'warning' | 'info' | 'error'
}

export const HomieAlert: FC<HomieAlertProps> = ({ message, status }) => {
  return (
    <Row style={{ marginTop: '25%' }} justify="center">
      <Col>
        <Result status={status} title={message} />
      </Col>
    </Row>
  )
}
