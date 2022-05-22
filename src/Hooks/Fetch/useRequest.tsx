import useAxios from 'axios-hooks'
import { RequestParamsProps } from '../../Types/RequestParamProps'

const useRequest = (
  url: string,
  params?: RequestParamsProps,
  manualConfig: boolean = false
) => {
  const fixedUrl = `${url}?${formatParams(params)}`
  return useAxios(
    {
      url: fixedUrl,
      method: 'GET',
      headers: { authorization: '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' }
    },
    {
      manual: manualConfig
    }
  )
}

const formatParams = (params?: RequestParamsProps) => {
  const q = params?.q ? `q=${encodeURIComponent(params.q)}` : ''
  const type = params ? `&type=${params.type}` : ''
  const language = params?.language ? `&language=${params.language}` : ''
  const sort = params?.sort ? `&sort=${params.sort}` : ''
  const page = params ? `&page=${params.page}` : ''

  return `${q}${type}${language}${sort}${page}`
}

export default useRequest
