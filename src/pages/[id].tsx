import Head from "next/head"
import React from "react"

import { CalenderDetail } from "@/components/features/user/CalenderDetail"

const CalenderPage = () => {
  return (
    <>
      <Head>
        <title>net-calender.com</title>
      </Head>
      <CalenderDetail />
    </>
  )
}

export default CalenderPage
