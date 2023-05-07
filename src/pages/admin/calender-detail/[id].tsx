import Head from "next/head"
import React from "react"

import { CalenderDetail } from "@/components/features/admin/CalenderDetail"

const calenderDetail = () => {
  return (
    <>
      <Head>
        <title>net-calender.com | CalenderDetail</title>
      </Head>
      <CalenderDetail />
    </>
  )
}

export default calenderDetail
