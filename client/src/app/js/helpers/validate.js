export const validate = (val , type , fieldLabel )=> {
  let errorMsg=null
  const filterEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
  const filterMobile = /^((05){1}[0-9]{8,16})$/
  if(!val){
    errorMsg = fieldLabel? ( 'Please Insert ' + fieldLabel) : 'Please Insert All Info'
  }else if('email' == type &&!filterEmail.test(val)){
    errorMsg='InValid Email '
  }else if('phone' == type &&!filterMobile.test(val)){
    errorMsg='InValid Phone Number'
  }
  if(errorMsg!=null){
    return (errorMsg)
  }
  return true;
}
