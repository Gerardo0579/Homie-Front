import useManualRequest from '../Fetch/useManualRequest'

const BASE_URL = 'https://api.github.com/repos'

const useGetRepoData = (repo_name: string) => {
  return useManualRequest(`${BASE_URL}/${repo_name}`)
}

export default useGetRepoData
