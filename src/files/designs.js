import React from 'react';

import {
  View,
  Modal,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
} from 'react-native';
import {getHeightPer, getWidthPer} from '../Strings/strings';
import {coomonStyles} from '../Styles/commonStyles';



export const CustomTextInput = ({onSubmit, refrance, ...props}) => {
  const [secureEntry, setsecureEntry] = React.useState(true);
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: colors.primaryGrey2,
        borderRadius: 20,
        width: props.width,
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        marginVertical: props.marginVertical,
        marginLeft: props.marginLeft,
        marginRight: props.marginRight,
        alignSelf: props.alignSelf,
      }}>
      <TextInput
      keyboardType = {props.keyboardType}
        placeholder={props.placeholder}
        onSubmitEditing={onSubmit}
        maxLength = {props.maxLength}
        value = {props.value}
        secureTextEntry={props.iseyeshow ? secureEntry : false}
        returnKeyType={props.returnKeyType}
        ref={refrance}
        onChangeText={props.onChangeText}
        style={{
          width: props.iseyeshow ? '90%' : '100%',
          padding: 15,
          fontSize: 20,
          position: props.position,
          justifyContent: 'center',
          bottom: props.bottom,
          margin: props.margin,
        }}
      />
      {props.iseyeshow ? (
        <Ionicons
          onPress={() =>
            secureEntry ? setsecureEntry(false) : setsecureEntry(true)
          }
          name={secureEntry ? 'eye-off' : 'eye'}
          size={30}
          color="grey"
          style={{alignSelf: 'center'}}></Ionicons>
      ) : null}
    </View>
  );
};

export const CommonButton = ({button_text, ...props}) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        borderRadius: 30,
        alignSelf: props.alignSelf,
        backgroundColor: props.backgroundColor,
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        marginVertical: props.marginVertical,
        height: getHeightPer(7),
        width: props.width,
        position: props.position,
        justifyContent: 'center',
        bottom: props.bottom,
      }}>
      <Text
        style={{
          marginVertical: props.textMarginVertical,
          alignItems: 'center',
          alignSelf: 'center',
          color: 'white',
          textAlign: 'center',
          fontSize: 17,
          fontWeight: '600',
          fontFamily: 'Poppins',
        }}>
        {button_text}
      </Text>
    </TouchableOpacity>
  );
};
export const CommonButtonBorder = ({button_text, ...props}) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        borderRadius: 30,
        alignSelf: props.alignSelf,
        borderColor: props.borderColor,
        borderWidth: 3,
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        marginVertical: props.marginVertical,
        height: getHeightPer(7),
        width: props.width,
        position: props.position,
        justifyContent: 'center',
        bottom: props.bottom,
      }}>
      <Text
        style={{
          marginVertical: props.textMarginVertical,
          alignItems: 'center',
          alignSelf: 'center',
          color: '#DD5371',
          textAlign: 'center',
          fontSize: 17,
          fontWeight: '600',
          fontFamily: 'Poppins',
        }}>
        {button_text}
      </Text>
    </TouchableOpacity>
  );
};

export const CommonImgs = ({path, ...props}) => {
  return (
    <Image
      style={{
        height: props.height,
        resizeMode: props.resizeMode,
        width: props.width,
        flex: props.flex,
      }}
      source={path}
    />
  );
};
export const ImageButton = ({...props}) => {
  <TouchableOpacity
    style={{margin: props.margin,
       marginBottom: props.marginBottom,
       marginTop: props.marginTop,
       marginLeft: props.marginLeft,
       marginRight: props.marginRight,
       marginHorizontal: props.marginHorizontal,
       marginVertical: props.marginVertical,
      }}
    onPress={props.onPress}>
    <Image source={props.source}></Image>
  </TouchableOpacity>;
};
export const CommonTexts = ({string, ...props}) => {
  return (
    <Text
      onPress={props.onPress}
      style={{
        color: props.color,
        fontSize: props.fontSize,
        position: props.position,
        fontWeight: props.fontWeight,
        textAlign: props.textAlign,
        marginTop: props.marginTop,
        marginLeft: props.marginLeft,
        fontFamily: 'poppins',
        bottom: props.bottom,
        left: props.left,
        right: props.right,
        marginVertical: props.marginVertical,
        alignSelf: props.alignSelf,
        width: props.width,
        // backgroundColor:'green',
      }}>
      {string}
    </Text>
  );
};

export const CommonHeadder = ({ ...props}) => {
  return (
    <View
      style={{
        marginTop: Platform.OS === 'android' ? 16 : 0,
        height: props.height,
        width: props.width,
        flexDirection: 'row',
        top: props.top,
        alignSelf: 'center',
        
        justifyContent:'center',
        position: props.position,
      }}>
      {props.isLeftIconShow ? (
        <View style = {{position:'absolute',left:0}}>
        <MaterialIcons
          
          width="10%"
          name={props.isCloseShow ? 'close' : 'arrow-back-ios'}
          color={'#F65E7F'}
          size={30}
          onPress={props.onPress}
        />
        </View>
      ) : null}

      <Text
        style={{
          color: props.titleColor,
          fontWeight: '600',
          fontSize: 18,
          alignSelf: 'center',
          textAlign: 'center',
          
          
        }}>
        {props.headerTitle}
      </Text>

      {props.isRightIocnShow ? (
        <TouchableOpacity onPress={props.onRightPress}>
          <Image source={props.right_img_path} onPress />
        </TouchableOpacity>
      ) : null}
      {props.isAddIconShow ? (
        <TouchableOpacity onPress={props.onRightPress}>
          <Ionicons name="ios-add-outline" size={30} color={'#F65E7F'} />
        </TouchableOpacity>
      ) : null}
      {props.isRightTextShow ? (
        <TouchableOpacity style = {{position:'absolute',right:0}} onPress = {props.rightTextonpRess}>
        <Text style = {{color:props.rightTextColor,fontSize:20,}}>
          {props.rightText}
        </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
export const CommonModalDialog = ({message, ...props}) => {
  return (
    <Modal
      style={{
        justifyContent: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
      }}
      animationType="slide"
      visible={props.visible}
      transparent={true}
      onRequestClose={props.onRequestClose}>
      <View
        style={{
          marginTop: getHeightPer(30),
          width: getWidthPer(70),
          backgroundColor: 'white',
          borderRadius: 20,
          padding: 35,
          alignSelf: 'center',
          alignItems: 'center',
          shadowColor: '#000',

          shadowOffset: {
            width: 0,
            height: 2,
          },

          shadowRadius: 4,
          elevation: 5,
        }}>
        <Text style={{color: 'black'}}>{message}</Text>
        <View style  = {{flexDirection:'row'}}>
          {props.isAddIconShow?
        <TouchableOpacity
          onPress={props.leftBtnPress}
          style={{
            borderRadius: 20,
            marginTop: 40,
            height: 40,
            width: '50%',
            marginRight:'5%',
            backgroundColor: '#F65E7F',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', alignSelf: 'center'}}>{props.leftBtnText}</Text>
        </TouchableOpacity>:null}
        <TouchableOpacity
          onPress={props.rightBtnPress}
          style={{
            borderRadius: 20,
            marginTop: 40,
            height: 40,
            width: '50%',
            marginRight:'5%',
            backgroundColor: '#F65E7F',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', alignSelf: 'center'}}>{props.rightBtnText}</Text>
        </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export const CirculerImageView = ({...props}) => {
  return (
    <Image
      source={props.source}
      style={{
        borderRadius: getHeightPer(props.size) / 2,
        height: getWidthPer(props.size),
        width: getWidthPer(props.size),
        backgroundColor: props.backgroundColor,
        alignSelf: props.alignSelf,
      }}
    />
  );
};
