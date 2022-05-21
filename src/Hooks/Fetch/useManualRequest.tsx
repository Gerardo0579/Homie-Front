import useRequest from './useRequest'

const useManualRequest = (url: string) => useRequest(url, true)

export default useManualRequest
