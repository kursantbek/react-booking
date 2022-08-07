import React from 'react'
import './featured.css'

export default function Featured() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/540x270/845317.webp?k=91703a03838c5245657f735b69a1a87f9ba0991e28b8bb5d8bc45d9e41e4ce5d&o=" className='featuredImg'/>
            <div className="featuredTitles">
                <span className='nameTitle'>Issyk Kul <br /></span>
                <span>123 Proporties</span>
            </div>
        </div>

        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/square250/962667.webp?k=96e22d3d669e313aa5f6a670f390f18a62b84dd16cbfd488a957b16445966100&o=" className='featuredImg'/>
            <div className="featuredTitles">
                <span className='nameTitle'>Issyk Kul <br /></span>
                <span>123 Proporties</span>
            </div>
        </div>

        <div className="featuredItem">
            <img src="https://avatars.mds.yandex.net/i?id=2a00000179f332292213bca64a9a7eae4022-4079315-images-thumbs&n=13" className='featuredImg'/>
            <div className="featuredTitles">
                <span className='nameTitle'>Issyk Kul <br /></span>
                <span>123 Proporties</span>
            </div>
        </div>
    </div>
  )
}
