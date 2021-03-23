import React from 'react'
import { useFirebase } from 'react-redux-firebase'
import GoogleButton from 'react-google-button'
import Layout from '../../components/Layout'

const Auth = () => {
  const firebase = useFirebase()
  const loginWithGoogle = () => firebase.login({ provider: 'google', type: 'popup' })

  return (
    <Layout>
      <h2>Auth</h2>
      <GoogleButton onClick={loginWithGoogle}/>
    </Layout>
  )
}

export default Auth