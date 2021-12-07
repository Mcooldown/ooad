export const numberToRupiah = (val) => {
  val = (val || "");
  if (val == 0) {
    return 'Rp. ' + 0
  }
  if (val) {
    const num = parseInt(val).toFixed(0)
    const rp = new Intl.NumberFormat('id-ID', {
    }).format(num)

    return 'Rp. ' + rp
  }
  return '0'
}

export const isFormatEmail = (email = new String()) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const isFormatPassword = (password) => {
  const mediumRegex = new RegExp("^(((?=.*[a-z])))");    
  return mediumRegex.test(password)
}

export function rupiahToNumber(rupiah){
  if(rupiah === "0" || rupiah?.length === 0) return 0
  const str =  String(rupiah)?.replaceAll(/([.])+/g, "")  
  return parseInt(str)
}

export function formatDateNow(date){
  date = (date||new Date())  
  return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
} 