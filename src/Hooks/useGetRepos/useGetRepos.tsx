import useManualRequest from '../Fetch/useManualRequest'

const BASE_URL = 'https://api.github.com/users'

const useGetRepos = (user: string) => {
  return useManualRequest(`${BASE_URL}/${user}/repos`)
}

export default useGetRepos
