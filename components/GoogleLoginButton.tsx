import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useEffect } from 'react';
import { Platform, Button } from 'react-native';

const GoogleLoginButton = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:'' ,
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info:', userInfo);
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User cancelled login');
      } else {
        console.log('Login failed:', error);
      }
    }
  };

  return (
    <>
      {Platform.OS === 'web' ? (
        // Web の場合
        <Button title="Login with aaa"/>
      ) : (
        // React Native の場合
        <Button title="Login with Google" onPress={signIn} />
      )}
    </>
  );
};

export default GoogleLoginButton;
