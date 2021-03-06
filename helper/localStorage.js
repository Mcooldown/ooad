export const getToken = () => {
  if(typeof window === 'undefined') return null;
  return localStorage.getItem("tokenOOAD");
}
export const setToken = (token) => {
  if(token == null) return null;
  if(typeof window === 'undefined') return null;
  localStorage.setItem("tokenOOAD", token);
}
export const checkToken = () => {
  const token = getToken()
  if(token === null || token === ""){
    return false
  }
  return true
}
export const getDataRegister = () => {
  if(typeof window === 'undefined') return null;
  return localStorage.getItem("dataRegisterOOAD");
}
export const setDataRegister = (token) => {
  if(token == null) return null;
  if(typeof window === 'undefined') return null;
  localStorage.setItem("dataRegisterOOAD", token);  
}
export const clearDataRegister = () => {
  if(typeof window === 'undefined') return null;
  localStorage.removeItem('dataRegisterOOAD')
  return
}
export const clear = () => {
  if(typeof window === 'undefined') return null;
  return localStorage.clear();
}
