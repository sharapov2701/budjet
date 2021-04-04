import React from 'react'
import { Redirect } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../app/firebase'
import Layout from '../../components/Layout'
import OperationsList from '../../components/OperationsList'
import OperationAdd from '../../components/OperationAdd'

const History = () => {
  const [user] = useAuthState(auth)

  return (
    user ?
    <Layout>
      <OperationAdd />
      <OperationsList />
    </Layout> :
    <Redirect to={{ pathname: "/auth" }}/>
  )
}

export default History