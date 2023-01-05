import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import electronicsImg from "../../assets/images/daniele-franchi--xbz_WB4hp8-unsplash.jpg"
import womanImg from "../../assets/images/felipe-galvan-AhfrA5VQNpM-unsplash.jpg"
import manImg from "../../assets/images/ivana-cajina-_7LbC5J-jw4-unsplash.jpg"
import jewelleryImg from "../../assets/images/mong-bui-rwb35vZTpBo-unsplash.jpg"

export default function Home() {
  const images = [
    { url: womanImg},
    { url: manImg},
    { url: jewelleryImg},
    { url: electronicsImg}
  ]
  return (
    <div>
      <SimpleImageSlider
        width={window.innerWidth}
        height={window.innerHeight}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  )
}
