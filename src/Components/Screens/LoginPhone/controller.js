export const handleValidatePhoneNumber = (phoneNumber) => {
  return /[a-zA-Z]/.test(phoneNumber)&& /[^\d\+\-]/.test(input)
     
    };
    export const handleValidateOtp = (otp) => {
        return /[!@#$%^&*(),.?":{}|<>]/.test(otp);
    }