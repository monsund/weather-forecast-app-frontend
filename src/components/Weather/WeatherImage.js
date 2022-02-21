import React, {useEffect, useState} from 'react'

import './weatherImageStyles.css'

const WEATHER_IMAGE_URLS = {
    sunnyDog : "https://www.petguide.com/wp-content/uploads/2013/02/sun-protection-for-dogs1.jpg",
    warmDog: "https://www.akc.org/wp-content/uploads/2021/02/Golden-Retriever-laying-down-under-a-blanket.jpeg",
    wetCat: "https://i.pinimg.com/originals/26/97/01/269701dde3a23c7065921213e05c9aee.jpg",
    cloudyDog: "https://image.shutterstock.com/image-photo/clouds-shaped-like-wolf-260nw-1106311649.jpg",
    snowyCat: "https://i.ytimg.com/vi/awmehLxoFV0/maxresdefault.jpg",
    other: "https://classroomclipart.com/images/gallery/Clipart/People/boy-confused-as-to-directions-clipart-6163.jpg"
}
  

const WeatherImage = ({ weather }) => {

    const [imageDisplay, setImageDisplay] = useState(null);

    useEffect(()=>{
        if(weather?.IconPhrase?.toLowerCase().includes('rain')) setImageDisplay(WEATHER_IMAGE_URLS.wetCat)
        else if(weather?.IconPhrase?.toLowerCase().includes('cloud')) setImageDisplay(WEATHER_IMAGE_URLS.cloudyDog)
        else if(weather?.IconPhrase?.toLowerCase().includes('snow')) setImageDisplay(WEATHER_IMAGE_URLS.snowyCat)
        else if(weather?.IconPhrase?.toLowerCase().includes('cold')) setImageDisplay(WEATHER_IMAGE_URLS.warmDog)    
        else if(weather?.IconPhrase?.toLowerCase().includes('sun')) setImageDisplay(WEATHER_IMAGE_URLS.sunnyDog)    
        else  setImageDisplay(WEATHER_IMAGE_URLS.other)    
    },[weather])

    return (
        <div className="weatherImage">{
            imageDisplay &&
            <img src={imageDisplay} alt="imageUrl" />
        }
        </div>
    )
}

export default WeatherImage;