import useManualRequest from '../Fetch/useManualRequest'

const useGetRepos = (url: string) => {
  const [{ data, loading, error }, refetch] = useManualRequest(url)

  return [data, loading, error, refetch]
}

export default useGetRepos
