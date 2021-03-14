import React from 'react'
import Layout from '../../components/Layout'
import OperationsList from '../../components/OperationsList'
import FormAddOperation from '../../components/FormAddOperation'

const History = () => (
  <Layout>
    <FormAddOperation />
    <OperationsList />
  </Layout>
)

export default History