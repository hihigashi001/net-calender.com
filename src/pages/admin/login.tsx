import Head from "next/head"
import React from "react"

import { Login } from "@/components/features/admin/Login"

const login = () => {
  return (
    <>
      <Head>
        <title>net-calender.com | admin Login page</title>
      </Head>
      <Login />
    </>
  )
}

export default login
