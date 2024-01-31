import {useEffect, useState } from 'react'
import { View, Text ,StyleSheet, Pressable} from 'react-native'
import { useSignUpMutation } from '../app/services/auth'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { colors } from '../global/colors'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import { signUpSchema } from '../validations/signUpSchema'


const Signup = ({navigation}) => {

  const dispatch = useDispatch()
  const [triggerSignUp, {data, isError, isSuccess, error, isLoading}] = useSignUpMutation()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  const [emailError,setEmailError] = useState("")
  const [passwordError,setPasswordError] = useState("")
  const [confirmPasswordError,setConfirmPasswordError] = useState("")


  useEffect(()=>{
    if(isSuccess) dispatch(setUser(data))
    if(isError) console.log(error)
  },[data,isError,isSuccess])

  const onSubmit = () => {
    try {
      setEmailError("")
      setPasswordError("")
      setConfirmPasswordError("")
      signUpSchema.validateSync({email,password,confirmPassword})
      triggerSignUp({email,password})
  } catch (error) {
      switch(error.path) {
        case 'email':
          setEmailError(error.message)
          break
        case 'password':
          setPasswordError(error.message)
          break
        case 'confirmPassword':
          setConfirmPasswordError(error.message)
          break
        default:
          break
  }
  }}

  return (
    <View style={styles.main}>
      <View style={styles.container}>
          <Text style={styles.title} >Sign up</Text>
          <InputForm
            label="Email"
            value={email}
            onChangeText={(t) => setEmail(t)}
            isSecure={false}
            error={emailError}
            type='email'
            autoCapitalize="none"
          />
          <InputForm
            label="Password"
            value={password}
            onChangeText={(t) => setPassword(t)}
            isSecure={true}
            error={passwordError}
            type='password'
            autoCapitalize="none"
          />
           <InputForm
            label="Confirm password"
            value={confirmPassword}
            onChangeText={(t) => setConfirmPassword(t)}
            isSecure={true}
            error={confirmPasswordError}
            type='password'
            autoCapitalize="none"
          />
          <SubmitButton title="Send" onPress={onSubmit} 
          />
          <Text style={styles.sub}>Alredy have an account?</Text>
          <Pressable onPress={()=> navigation.navigate('Login')}>
              <Text style={styles.subLink}>Login</Text>
          </Pressable>
      </View>
    </View>
  )
}


export default  Signup


const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primaryBackground, 
  },
  container: {
    width: "90%",
    backgroundColor: colors.secondaryBackground, 
    gap: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  title: {
    fontSize: 22,
    color: colors.textPrimary, 
  },
  sub: {
    fontSize: 14,
    color: colors.textSecondary, 
  },
  subLink: {
    fontSize: 14,
    color: colors.accent,
  },
})