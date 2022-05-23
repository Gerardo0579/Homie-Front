import useAxios from 'axios-hooks'
import { RequestParamsProps } from '../../Types/RequestParamProps'

const GITHUB_API_TOKEN: string = process.env.REACT_APP_GITHUB_API_TOKEN || ''

const useRequest = (
  url: string,
  params?: RequestParamsProps,
  manualConfig: boolean = false
) => {
  return useAxios(
    {
      url: url,
      method: 'GET',
      headers: { authorization: GITHUB_API_TOKEN }
    },
    {
      manual: manualConfig
    }
  )
}

export default useRequest
