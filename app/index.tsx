import { Redirect } from 'expo-router'
import React from 'react'

function index() {
  return <Redirect href={'/(drawer)/Landing'} />
}

export default index
