import React from 'react'
import Layout from '../../components/Layout'
import OperationsList from '../../components/OperationsList'
import OperationAdd from '../../components/OperationAdd'

const History = () => (
  <Layout>
    <OperationAdd />
    <OperationsList />
  </Layout>
)

export default History