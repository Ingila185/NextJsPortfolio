import Image from 'next/image'
import { ScriptProps } from 'next/script'
 
export default function CustomImage({ imagePath , width , height} :  any) {

  return (
    <Image
    className='p-5'
      src={imagePath}
      width={width}
      height={height}
      alt="Picture of the author"
    />
  )
}