import Head from "next/head"
import React from "react"

import { CalenderList } from "@/components/features/admin/CalenderList"

const calenderList = () => {
  return (
    <>
      <Head>
        <title>net-calender.com | CalenderList</title>
      </Head>
      <CalenderList />
    </>
  )
}

export default calenderList
