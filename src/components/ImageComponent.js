import React from "react"


const ImageComponent = (props) => (

    <div className="image-container">
        <a href={props.imag.urls.full}><img className="image" alt={props.imag.alt_description} src={props.imag.urls.small} /></a>
    </div>
)
      
export default ImageComponent
    

