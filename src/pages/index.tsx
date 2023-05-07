import Head from "next/head"
import React from "react"

import { Index } from "@/components/features/Index"

const index = () => {
  return (
    <>
      <Head>
        <title>net-calender.com | Index</title>
      </Head>
      <Index />
    </>
  )
}

export default index
