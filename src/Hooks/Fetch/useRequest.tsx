import useAxios from 'axios-hooks'

const useRequest = (url: string, manualConfig: boolean = false) => {
  return useAxios(
    {
      url: url,
      method: 'GET'
    },
    {
      manual: manualConfig
    }
  )
}

export default useRequest
