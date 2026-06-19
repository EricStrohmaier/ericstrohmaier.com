"use client"

import { useEffect, useState } from "react"

/**
 * Fetches a URL's OpenGraph image via /api/og-image and renders it.
 * Renders nothing until (and unless) an image is found, so it degrades cleanly.
 * `className` styles the wrapper, `imgClassName` the <img> - both have sensible
 * defaults matching the project detail page.
 */
export function OgImage({
  url,
  href,
  className = "mb-6 flex max-h-56 w-1/2 items-center overflow-hidden rounded-2xl border border-border",
  imgClassName = "w-full object-cover",
}: {
  url: string
  /** When set, the image becomes a link to this URL (opens in a new tab). */
  href?: string
  className?: string
  imgClassName?: string
}) {
  const [src, setSrc] = useState<string | null>(null)

  useEffect(() => {
    let active = true
    fetch(`/api/og-image?url=${encodeURIComponent(url)}`)
      .then((res) => res.json())
      .then((data) => {
        if (active && data.ogImage) setSrc(data.ogImage)
      })
      .catch(() => {})
    return () => {
      active = false
    }
  }, [url])

  if (!src) return null

  const img = (
    <img
      src={src}
      alt=""
      className={imgClassName}
      onError={() => setSrc(null)}
    />
  )

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener"
        className={`${className} cursor-pointer transition-opacity hover:opacity-90`}
      >
        {img}
      </a>
    )
  }

  return <div className={className}>{img}</div>
}
