import { useLogin } from "./useLogin"

import { Button } from "@/components/shared/Button"
import { Card } from "@/components/shared/Card"
import { AdminLayout } from "@/components/shared/LayoutParts/AdminLayout"
import { Loading } from "@/components/shared/Loading"
import { PageWrapper } from "@/components/shared/PageWrapper"
import { Title } from "@/components/shared/Title"
import { VStack } from "@/components/shared/VStack"

export const Login = () => {
  const { loading, onClickLogin } = useLogin()

  if (loading)
    return (
      <PageWrapper variant="center">
        <Loading />
      </PageWrapper>
    )

  return (
    <AdminLayout>
      <VStack gap>
        <VStack className="mt-16" gap>
          <Title text="管理者ページ" />
          <Button icon="google-logo" onClick={onClickLogin} text="Googleアカウントでログイン" />
          <Card className="p-4">
            [説明]
            管理者ページにログインすることで、公開用カレンダーを作成できます。Googleアカウントが必要ですので、お持ちでない方は先にGoogleアカウントを作成してからご利用ください。
          </Card>
        </VStack>
      </VStack>
    </AdminLayout>
  )
}
