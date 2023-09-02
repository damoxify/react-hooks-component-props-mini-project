import React from 'react'

const About = ({image, about}) => {
    if(!image){
        return <img src='https://via.placeholder.com/215' alt='blog logo'/>
    }
    else{
        return (
              <aside>
                <img src={image} alt='blog logo'/>
                <p>{about}</p>
              </aside>
          )
    }
  
}

export default About
