import useAxios from 'axios-hooks'
import { RequestParamsProps } from '../../Types/RequestParamProps'

const useRequest = (
  url: string,
  params?: RequestParamsProps,
  manualConfig: boolean = false
) => {
  return useAxios(
    {
      url: url,
      method: 'GET',
      headers: { authorization: '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' }
    },
    {
      manual: manualConfig
    }
  )
}

export default useRequest
