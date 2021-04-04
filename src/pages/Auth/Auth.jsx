import React from 'react'
import GoogleButton from 'react-google-button'
import Layout from '../../components/Layout'
import firebase, { auth } from '../../app/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Redirect } from 'react-router-dom'

const Auth = () => {
  const [user] = useAuthState(auth)
  
  const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }

  return (
    user ?
    <Redirect to={{ pathname: "/" }}/> : 
    <Layout>
      <h2>Auth</h2>
      <GoogleButton onClick={loginWithGoogle}/>
    </Layout>
  )
}

export default Auth