import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useGetUser from '../../Hooks/useGetUser/useGetUser'
import { HomieSiderProfile } from './HomieSiderProfile'
import { LoadingComponent } from '../HomieLoading/HomieLoading'
import { HomieAlert } from '../HomieAlert/HomieAlert'

export const HomieSider: FC = () => {
  const { username } = useParams<{ username: string }>()
  const [{ data: userData, loading: loadingUser, error }, refetchUser] =
    useGetUser(username)

  useEffect(() => {
    refetchUser()
  }, [username, refetchUser])

  return (
    <>
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

      {loadingUser && <LoadingComponent tip="Loading user" />}
    </>
  )
}
