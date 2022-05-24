import { createContext, FC } from 'react'
import { Divider } from 'antd'
import { HomieHeader } from '../Header/HomieHeader'
import { HomieSider } from '../Sider/HomieSider'
import { HomieFooter } from '../Footer/HomieFooter'
import HomieContent from '../Content/HomieContent'
import { MainStore } from '../../Stores/MainStore'
import styles from './Main.module.css'

export const StoreContext = createContext<MainStore | null>(null)

export const Main: FC = () => {
  return (
    <StoreContext.Provider value={new MainStore()}>
      <div className={styles.websiteWrapper}>
        <Divider className={styles.divider} />
        <div className={styles.pageWrapper}>
          <div className={styles.contentWrapper}>
            <div className={styles.bioContent}>
              <HomieSider />
            </div>
            <div className={styles.reposContent}>
              <HomieHeader />
              <HomieContent />
            </div>
          </div>
          <HomieFooter />
        </div>
      </div>
    </StoreContext.Provider>
  )
}