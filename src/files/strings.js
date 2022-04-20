import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width * 0.01;
const windowHeight = Dimensions.get('window').height * 0.01;
export const commonNames = {
    HomeScreen:'HomeScreen',
    LoginScreen:'LoginScreen',
    SplashScreen:'SplashScreen',
    WalkthroughScreen:'WalkthroughScreen',
}

export const ErrorMessages = {
    ccp_empty: 'Please Select Country Code',
    num_length: 'Please Enter Valid Number',
    num_empty: 'Please Enter Number',
    email_empty: 'Please Enter email',
    email_valid: 'Please Enter Valid email',
    pass_empty: 'Please Enter Password',
    pass_valid: 'Please Enter Valid Password',
    otp_valid: 'Please Enter Valid OTP \n OTP Has 4 Digits',
    otp_empty: 'Please Enter OTP',
    card_num_empty: 'Please Enter Card Number',
    card_num_valid: 'Please Enter Valid Card Number',
    date_empty: 'Please Select Date',
    cvv_empty: 'Please Enter CVV',
    cvv_valid: 'Please Enter Valid CVV',
    name_Empty: 'Please Enter Name',
    name_valid: 'Please Enter Valid Name',
  };

  export const colors = {
      
  }
  export const StringRegex = {
    email_regex: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  
    pass_regex: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  };
  
  export const AsyncStorageStrings = {
    IS_LOGIN: 'IS_LOGIN',
  };
  
  export function getHeightPer(per) {
    return windowHeight * per;
  }
  export function getWidthPer(per) {
    return windowWidth * per;
  }