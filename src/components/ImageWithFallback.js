import placeholder from '@/images/placeholder.jpg'
import Image from "next/image"

function ImageWithFallback(props) {
  return <Image {...props} src={props.src.startsWith("http") ? props.src : placeholder} />

}

export default ImageWithFallback