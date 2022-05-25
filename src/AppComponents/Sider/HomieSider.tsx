import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useGetUser from '../../Hooks/useGetUser/useGetUser'
import { HomieSiderProfile } from './HomieSiderProfile'
import styles from './HomieSider.module.css'
import { HomieAlert } from '../../Components/HomieAlert/HomieAlert'
import { HomieLoading } from '../../Components/HomieLoading/HomieLoading'

export const HomieSider: FC = () => {
  const { username } = useParams<{ username: string }>()
  const [{ data: userData, loading: loadingUser, error }, refetchUser] =
    useGetUser(username)

  useEffect(() => {
    refetchUser()
  }, [username, refetchUser])

  return (
    <div className={styles.bioWrapper}>
      {!loadingUser && error && (
        <>
          <HomieAlert
            status="info"
            message="We have a problem retrieving this user :("
          />
        </>
      )}

      {!loadingUser && userData && (
        <>
          <HomieSiderProfile userData={userData} />
        </>
      )}

      {loadingUser && <HomieLoading tip="Loading user" />}
    </div>
  )
}
