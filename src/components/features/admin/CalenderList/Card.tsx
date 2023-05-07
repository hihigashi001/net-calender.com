import React, { useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { AiOutlineTwitter, AiOutlineLink, AiFillInstagram } from "react-icons/ai"
import { RiLineFill } from "react-icons/ri"

import { Button } from "@/components/shared/Button"
import { FirebaseStoreWithId } from "@/types"

type Props = {
  data: FirebaseStoreWithId
  onClickCard: (id: string) => void
}

export const Card = ({ data, onClickCard }: Props) => {
  const { id, name, note } = data
  const [copied, setCopied] = useState(false)
  const url = `${window.location.protocol}//${window.location.hostname}/${id}`

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const instagramShareLink = `instagram://camera?caption=${encodeURIComponent(`${name}\n${url}`)}`

  return (
    <div className="bg-white rounded-md p-4 shadow-md mb-8">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold mb-4">{name}</h2>
        <Button onClick={() => onClickCard(id)} text="編集する" />
      </div>
      <div className="space-y-2">
        <div className="flex items-center">
          <span className="font-semibold w-24">URL</span>
          <a className="text-blue-500" href={url} rel="noopener noreferrer" target="_blank">
            {url}
          </a>
        </div>
        <div className="flex items-center">
          <span className="font-semibold w-24">備考</span>
          <span>{note}</span>
        </div>
      </div>
      <div className="flex mt-4 space-x-2">
        <span className="font-semibold w-24">共有ボタン</span>
        <a
          className="text-gray-600"
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            url
          )}&text=${encodeURIComponent(name)}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <AiOutlineTwitter size={24} />
        </a>
        <a
          className="text-gray-600"
          href={instagramShareLink}
          rel="noopener noreferrer"
          target="_blank"
        >
          <AiFillInstagram size={24} />
        </a>
        <a
          className="text-gray-600"
          href={`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <RiLineFill size={24} />
        </a>
        <CopyToClipboard onCopy={handleCopy} text={url}>
          <button className="text-gray-600">
            {copied ? <span>コピーしました！</span> : <AiOutlineLink size={24} />}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  )
}
