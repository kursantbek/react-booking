import React,{useState} from 'react'
import './hotel.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLocationDot,faCircleArrowLeft,faCircleArrowRight, faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import MailList from './../../components/mailList/MailList';
import Footer from './../../components/footer/Footer';

export default function Hotel(){
  const [sildeNumber,setSlideNumber]=useState(0)
  const [open,setOpen]=useState(false)
  const photos=[
    {src:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/165584921.jpg?k=4bd5ee98f6bf22ae86f6e379bbdfd6f3bd12dc2e105cc61eebe84b0ae7ca4716&o=&hp=1'},
    {src:'https://cf.bstatic.com/xdata/images/hotel/max500/159938256.jpg?k=f1633932d9db6f3661cb5c37da9ab5ab058e2fbf19b0b2ad87f598ee10a0b698&o=&hp=1'},
    {src:'https://cf.bstatic.com/xdata/images/hotel/max500/159958995.jpg?k=ed1830aa2ed6a38c98f4fd9039d4f6481ebdb9d06c0de070d6791c0052f5d8b9&o=&hp=1'},
    {src:'https://cf.bstatic.com/xdata/images/hotel/max300/159959043.jpg?k=8230eb3bbb3a9c79d12f75acae452bc583965d038f18e1dd598678ec95eb7be5&o=&hp=1'},
    {src:'https://cf.bstatic.com/xdata/images/hotel/max300/180647510.jpg?k=be6ef08b8f304d064c6e615d70f97dc511479ae7b69d8b5065e413e2c87753c8&o=&hp=1'},
    {src:'https://cf.bstatic.com/xdata/images/hotel/max300/159937879.jpg?k=d83636e80114d8e97e52af53e0d69320f44667687dcb77889a8864ff798de9b2&o=&hp=1'}
  ]
  const handleOpen=(i)=>{
    setSlideNumber(i)
    setOpen(true)
  }
  return (
    <div>
      <Navbar />
      <Header type='list'/>
      <div className="hotelContainer">
       {open && <div className="slider">
        <FontAwesomeIcon
         icon={faCircleXmark}
         className='close'
         onClick={()=>setOpen(false)}
         />
        <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' />
        <div className="sliderWrapper">
          <img src={photos[sildeNumber].src}alt="" className="sliderImg" />
        </div>
        <FontAwesomeIcon icon={faCircleArrowRight} className='arrow'/>
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserver or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Elton St 123 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location- 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property
             and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo,i)=>(
              <div className="hotelImgWrapper">
                <img
                onClick={()=>handleOpen(i)}  
                  src={photo.src} 
                  alt="" 
                  className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St.Florian's Gate in Krakow,Tower
                Street Apartments has accommodations with air cond aonditioning and
                free Wi-Fi.The units come with hardwood floors and feature a 
                fully equipped kitchenette with shower and a hairdyer.A fridge is
                also offered,as well as an electric tea pot and a coffee
                machine.Popular points of interest near the apartment include
                Cloth Hall,Main Market Square and Town Hall Tower.The nearest
                airport is John Paul II International Krakow-Balice,16.1 km 
                from Tower Street Apartmens, and the property offers a paid 
                airport shuttle service.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-nigth stay!</h1>
              <span>
                Locted in the real heart of Krakow,this property has an 
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Resever or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}
