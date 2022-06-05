import Image from 'next/image'
import { CSSProperties } from 'styled-components'
import Img1 from 'assets/images/img1.jpg'
import Img2 from 'assets/images/img2.jpg'
import Img3 from 'assets/images/img3.jpg'
import Img4 from 'assets/images/img4.jpg'
import Img5 from 'assets/images/img5.jpg'
import Img6 from 'assets/images/img6.jpg'
import Img7 from 'assets/images/img7.jpg'

const styled: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  width: 660,
  margin: '0 auto'
}

function HandleImages() {
  return (
    <div style={styled}>
      <Image src={Img1} alt="Image 1" placeholder="blur" />
      <Image src={Img2} alt="Image 2" placeholder="blur" />
      <Image src={Img3} alt="Image 3" placeholder="blur" />
      <Image src={Img4} alt="Image 4" placeholder="blur" />
      <Image src={Img5} alt="Image 5" placeholder="blur" />
      <Image src={Img6} alt="Image 6" placeholder="blur" />
      <Image src={Img7} alt="Image 7" placeholder="blur" />
    </div>
  )
}

export default HandleImages
