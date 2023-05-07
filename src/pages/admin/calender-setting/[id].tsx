import Head from "next/head"
import React from "react"

import { CalenderSetting } from "@/components/features/admin/CalenderSetting"

const calenderSetting = () => {
  return (
    <>
      <Head>
        <title>net-calender.com | CalenderSetting</title>
      </Head>
      <CalenderSetting />
    </>
  )
}

export default calenderSetting
