import { useState } from "react";
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs"

export const Carousel = () => {
    
    const [index , setIndex] = useState(0);

    const images = [
        "/src/images/carrusel_1.jpg",
        "/src/images/carrusel_2.jpg",
        "/src/images/carrusel_3.jpg",
        "/src/images/carrusel_4.jfif",
        "/src/images/carrusel_5.webp",
        "/src/images/carrusel_6.webp",
        "/src/images/carrusel_7.jpg",
        "/src/images/carrusel_8.webp",
        "/src/images/carrusel_9.jpg",
    ];

    const prevSlide = () => {
        const isFirstIndex = index === 0;
        const newIndex = isFirstIndex ? images.length - 1 : index - 1;
        setIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastIndex = index === images.length - 1;
        const newIndex = isLastIndex ? 0 : index + 1;
        setIndex(newIndex);
    }


    return(
        <div className="max-w-[1400px] w-full m-auto h-[600px] relative group">

            <img className="w-full h-full object-cover transition-opacity duration-500" src={images[index]} alt="" />

            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30}/>
            </div>

            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30}/>
            </div>
        
        </div>
    )
}

