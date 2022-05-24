import { Spin } from 'antd'
import { FC } from 'react'
import styles from './HomieLoading.module.css'

interface LoadingComponentProps {
  tip: string
}
export const HomieLoadingComponent: FC<LoadingComponentProps> = ({ tip }) => {
  return (
    <div className={styles.loadingWrapper}>
      <Spin className={styles.spinner} size="large" tip={tip} />
    </div>
  )
}
