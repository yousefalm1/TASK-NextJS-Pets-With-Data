'use client'

import placeholder from '@/images/placeholder.jpg'
import Image from "next/image"
import { useState } from 'react'

function ImageWithFallback(props) {
  const [src, setSrc] = useState(props.src.startsWith("http") ? props.src : placeholder)
  return <Image
    {...props}
    src={src}
    onError={() => setSrc(placeholder)}
  />

}

export default ImageWithFallback