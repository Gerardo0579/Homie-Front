import useManualRequest from '../Fetch/useManualRequest'

const BASE_URL = 'https://api.github.com/users/'

const useGetUser = (user: string) => {
  return useManualRequest(BASE_URL + user)
}

export default useGetUser
