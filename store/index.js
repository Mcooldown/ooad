import create from 'zustand'

export const authContext = create( set => ({
  authStore : false,
  setAuthStore : param => set (() => ({authStore:param}))
}))

export const modalContext = create( set => ({
  isShowModalStore : false,
  tipeModalStore : "",
  dataModalStore: null,  
  statusDataModalStore : false,
  isConfirmStore: false,
  showModalStore : (param) => set(()=>({isShowModalStore:true, tipeModalStore:param})),
  hideModalStore : () => set(()=>({isShowModalStore:false})),  
  setDataModalStore : param => set(()=>({dataModalStore:param, statusDataModalStore:true})),
  clearDataModalStore : () => set(()=>({dataModalStore:null, statusDataModalStore:false})),
  setIsConfirmStore : param => set(()=>({isConfirmStore:param}))
}))
