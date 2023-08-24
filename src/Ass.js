import React from "react";

import { useState,useEffect } from "react";

export default function Movie() {
    const [images,setImages] = useState([])
    
    useEffect(() => {
        const apiKey = "R5on-EY7I1IwUEJOyZaRI2sTAF5clV4DPyobE7Ou3F8"
        const apiUrl = "https://api.unsplash.com/photos"

        fetch(apiUrl,
            {
                headers: {
                    Authorization: `Client-ID ${apiKey}`,
                }
            }
            )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setImages(data)
            })
            .catch((error) => {
                console.error(error);
            })

    },
    []
    )

    return (
        <div>
            <h1>Movie Page</h1>
            <div className="BowWrapper">
                {
                    images.map((images) => (
                        <div key = {images.id} className="MovieBox">
                        <img src={images.urls.regular} alt="Images"/>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    )
}