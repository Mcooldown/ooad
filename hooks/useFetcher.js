import useSWR from "swr";

import { NET } from "../helper/axios";
import { getToken } from "../helper/localStorage";

const fetcher = async (url,data) => {

  url = (url||"")
  data = (data||{})

  return await NET("GET", url, data, getToken())

}

export default function useFetcher(url, param, initialData){
    
  url = (url||"")
  param = (param||{})
  initialData = (initialData||{})

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

