"use client"

import { useEffect, useState } from "react"

export function OgImage({ url }: { url: string }) {
  const [src, setSrc] = useState<string | null>(null)

  useEffect(() => {
    fetch(`/api/og-image?url=${encodeURIComponent(url)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.ogImage) setSrc(data.ogImage)
      })
      .catch(() => {})
  }, [url])

  if (!src) return null

  return (
    <div className="mb-6 flex w-1/2 max-h-56 items-center overflow-hidden rounded-2xl border border-border">
      <img
        src={src}
        alt=""
        className="w-full object-cover"
        onError={() => setSrc(null)}
      />
    </div>
  )
}
