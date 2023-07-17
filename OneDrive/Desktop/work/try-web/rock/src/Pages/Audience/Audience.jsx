import React from 'react'
import './Audience.css'
// import NavbarTwo from '../Navbartwo/NavbarTwo'
import AudienceRight from '../../Components/AudienceCard/AudienceRight'
import { AudienceLeft } from '../../Components/AudienceCard/AudienceLeft'
import NavbarTwo from '../../Components/NavbarTwo/NavbarTwo'
import Footer from '../../Components/Footer/Footer'

const Audience = () => {

    const arr=[

        {
    
          heading:"Students",
          description:"Rockfort Labs is dedicated to nurturing young talent and helping students dream big. We provide opportunities for students who aspire to work on cutting-edge projects using the latest technology. Join us and unleash your potential to make a real-world impact.",
          position:'right',
          image:"../assests/Students.jpg"
              },
        {
          heading:"Entrepreneurs",
          description:"If you have a bold idea and the drive to turn it into a successful venture, Rockfort Labs is here to support you. Our venture studio incubates and connects aspiring entrepreneurs with experienced mentors, successful business people, and academics. We provide the necessary resources and investment to help you build scalable businesses and achieve entrepreneurial success."
            , position:'left'  ,
            image:"../assests/Entrepreneur.jpg"
          },{
    heading:'Investors',
    description:"Invest in the future of innovation with Rockfort Labs. We offer curated investment opportunities for visionary investors looking to support groundbreaking projects and high-potential startups. By partnering with us, you gain access to a diverse portfolio of ventures driven by passionate teams and backed by our extensive network of experts. Together, we can shape the future.",
    position:'right',
    image:"../assests/Investors.jpg"
        },
        {
          heading:'Projects',
          description:"At Rockfort Labs, we identify pressing problems across industries and domains. We bring together talented students, successful entrepreneurs, experienced faculty, and investors to work on innovative solutions. Our projects harness cutting-edge technology and aim to make a real difference in the world. Explore our ongoing projects and be a part of the transformation.",
          position:'left',
          image:"../assests/Projects.jpg"
              },
              {
                heading:'Portfolio Companies',
                description:"Discover the success stories that have emerged from Rockfort Labs. Our portfolio companies are the result of hard work, collaboration, and support. These companies have disrupted industries and created sustainable value. Explore the inspiring stories of our portfolio companies and witness the transformative power of entrepreneurship.",
                position:'right',
                image:"../assests/Portfolio.jpg"
                    }
      ]
    
      return (
        <>
    <NavbarTwo/>
    {arr.map((e)=>{
      if(e.position==='right'){
    <AudienceRight/>
      }else{
    <AudienceLeft/>
      }
    })}
    
    {arr.map((e)=>e.position==='right' ? <AudienceRight data={e}/>:<AudienceLeft data={e}/>)}
    <Footer/>
        </>
      )
}

export default Audience