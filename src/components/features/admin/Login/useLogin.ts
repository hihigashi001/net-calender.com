import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import { useStore } from "@/globalState/store"
import { loginWithGoogle, getLoginUser } from "@/lib/apiClient"

export const useLogin = () => {
  const router = useRouter()
  const setUser = useStore((state) => state.setUser)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    setLoading(true)
    const unsubscribe = getLoginUser((user) => {
      if (user) {
        setUser(user)
        router.push("/admin/calender-list")
      } else {
        setUser(null)
        setLoading(false)
      }
    })

    return () => {
      unsubscribe()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onClickLogin = async () => {
    try {
      setLoading(true)
      setError("")
      await loginWithGoogle()
    } catch (error) {
      setError("error")
      setLoading(false)
    }
  }

  return {
    loading,
    error,
    onClickLogin,
  }
}
