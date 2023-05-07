import { useRouter } from "next/router"
import { useEffect } from "react"

import { useStore } from "@/globalState/store"
import { LogoutWithGoogle, getLoginUser } from "@/lib/apiClient"

export const useUserLayout = () => {
  const router = useRouter()
  const user = useStore((state) => state.user)
  const setUser = useStore((state) => state.setUser)

  useEffect(() => {
    const unsubscribe = getLoginUser((user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })
    unsubscribe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onClickLoginPage = () => {
    router.push("/admin/login")
    LogoutWithGoogle()
  }
  const onClickHomePage = () => {
    router.push("/")
  }

  return { user, onClickLoginPage, onClickHomePage }
}
