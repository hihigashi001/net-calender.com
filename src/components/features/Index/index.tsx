import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"

import { Button } from "@/components/shared/Button"
import { UserLayout } from "@/components/shared/LayoutParts/UserLayout"

export const Index = () => {
  const router = useRouter()

  return (
    <UserLayout>
      <h2 className="text-2xl font-semibold mb-4">本システムの説明</h2>
      <p className="text-gray-700 mb-8">
        このシステムは完全無料で使えるネット公開用カレンダーシステムです。ご自由にお使いください。予定を共有することで、お客様に営業日や休業日を周知することができます。簡易な作りになっているのでどなたでも簡単に使えます。
      </p>
      <h2 className="text-2xl font-semibold mb-4">このサイトの利用方法</h2>
      <ol className="list-decimal list-inside text-gray-700 mb-8">
        <li>Googleアカウントでログイン</li>
        <li>カレンダーを作成する</li>
        <li>URLを共有する</li>
      </ol>
      <Button
        className="mb-8"
        onClick={() => router.push("/admin/login")}
        text="カレンダー作成ページに移動する"
        variant="primary"
      />
      <h2 className="text-2xl font-semibold mb-4">サンプル画像</h2>
      <p className="text-gray-700">このサイトで作成できるカレンダーのサンプル画像です。作成に1分もかかりません。パソコンやスマホなど、端末の種類に関係なく表示できます。</p>
      <Image alt="サンプル画像" height={500} src={"/sample_calender.png"} width={500} />
      <h2 className="text-2xl font-semibold mb-4">プライバシーポリシー・免責事項</h2>
      <div className="text-gray-700 mb-8 bg-white p-4">
        <p className="mb-4">
          当サイトからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。また当サイトのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
        </p>
        <p className="mb-4">
          著作権について
          当サイトで掲載している文章や画像などにつきましては、無断転載することを禁止します。
          当サイトは著作権や肖像権の侵害を目的としたものではありません。
        </p>
        <p>
          リンクについて
          当サイトは基本的にリンクフリーです。リンクを行う場合の許可や連絡は不要です。むしろ多くの方に利用されたいのでSNSで拡散して頂けると幸いです。
          ただし、インラインフレームの使用や画像の直リンクはご遠慮ください。
        </p>
      </div>
      <h2 className="text-2xl font-semibold mb-4">よくある質問Q&A</h2>
      <div className="text-gray-700 mb-8">
        <div className="mb-4">
          <h4>Q. なぜ無料ですか？</h4>
          <br />
          A.
          特にメンテナンス費用などがかからないように簡易な作りになっています。営利目的ではなく便利な物を作りたいという思いから成り立っています。
        </div>
        <div className="mb-4">
          <h4>Q. 何に使えますか？</h4>
          <br />
          A. お店の営業日などを周知することに使えます。
        </div>
        <div className="mb-4">
          <h4>Q. スケジュールを共有などで利用できますか？</h4>
          <br />
          A.
          カレンダーはURLを共有する事で誰でも閲覧できるようになりますが、予定の項目名は1つしか設定できません。（例：営業日）その仕様であるため、スケジュール共有などには向いていません。
        </div>
        <div className="mb-4">
          <h4>Q. 機能が足りません。カスタマイズできますか？</h4>
          <br />
          A.
          このシステムはカスタマイズできないようになっています。機能が足りない場合はご了承ください。
        </div>
        <div>
          <h4>Q. Googleアカウント持ってないです。他のログイン方法はありませんか？</h4>
          <br />
          A.
          すみません。ログイン方法はGoogleアカウントのみになっています。ただし、閲覧者はGoogleアカウントを持っていなくても誰でも閲覧できます。
        </div>
      </div>
      <Button
        className="mb-8"
        onClick={() => router.push("/admin/login")}
        text="カレンダー作成ページに移動する"
        variant="primary"
      />
    </UserLayout>
  )
}
