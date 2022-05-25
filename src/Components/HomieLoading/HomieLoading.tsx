import { Spin } from 'antd'
import { FC } from 'react'
import styles from './HomieLoading.module.css'

interface LoadingProps {
  tip: string
}
export const HomieLoading: FC<LoadingProps> = ({ tip }) => {
  return (
    <div className={styles.loadingWrapper}>
      <Spin className={styles.spinner} size="large" tip={tip} />
    </div>
  )
}
