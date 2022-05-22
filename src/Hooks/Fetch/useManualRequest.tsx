import { RequestParamsProps } from '../../Types/RequestParamProps'
import useRequest from './useRequest'

const useManualRequest = (url: string, params?: RequestParamsProps) =>
  useRequest(url, params, true)

export default useManualRequest
