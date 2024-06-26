import React, {useEffect, useState} from 'react'

import './weatherImageStyles.css'

const WEATHER_IMAGE_URLS = {
    sunnyDog : "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F06%2F07%2Fdog-on-sunny-beach-764782369-2000.jpg",
    warmDog: "https://www.akc.org/wp-content/uploads/2021/02/Golden-Retriever-laying-down-under-a-blanket.jpeg",
    wetCat: "https://i.pinimg.com/originals/26/97/01/269701dde3a23c7065921213e05c9aee.jpg",
    cloudyDog: "https://image.shutterstock.com/image-photo/clouds-shaped-like-wolf-260nw-1106311649.jpg",
    snowyCat: "https://i.ytimg.com/vi/awmehLxoFV0/maxresdefault.jpg",
    showerCat: "https://blog.petloverscentre.com/wp-content/uploads/2021/04/How-to-bathe-a-cat.png",
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
        else if(weather?.IconPhrase?.toLowerCase().includes('shower')) setImageDisplay(WEATHER_IMAGE_URLS.showerCat)    
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
