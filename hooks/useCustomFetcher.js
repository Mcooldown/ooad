import useSWR from "swr";

import { NET2 } from "../helper/axios";
import { getToken } from "../helper/localStorage";

const fetcher = async (url,data) => {
  url = (url||"")
  data = (data||{})
  return await NET2("GET", url, data, getToken())
}

export function useCustomFetcher(url, param, func, initialData){
    
  url = (url||"")
  param = (param||{})
  initialData = (initialData||{})

  func = (func||null)    

  const {data, error, mutate} = useSWR(url, ()=>fetcher(url, param), initialData)

  const isLoading = !data && !error
  const isNotFound = (data?.data?.data?.length === 0) || (data?.data == null)

  const res = data?.data?.data

  const resDetail = data?.data

  return{
    mutate,
    isLoading,
    isNotFound,
    resDetail,
    res
  }

}

export function useCustomFetcherWithFunction(url, param, func, initialData){
    
  url = (url||"")
  param = (param||{})
  initialData = (initialData||{})

  func = (func||null)  

  const {data, error, mutate} = useSWR(url, ()=>func(url, param), initialData)    

  const isLoading = !data && !error
  const isNotFound = (data?.data?.data?.length === 0) || (data?.data == null)

  const res = data?.data?.data

  const resDetail = data?.data

  return{
    mutate,
    isLoading,
    isNotFound,
    resDetail,
    res
  }

}

