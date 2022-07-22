import React, { useEffect, useState } from 'react'
import { BsFillArrowUpCircleFill } from "react-icons/bs"
import './ScrollToTop.css'

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () =>
            window.pageYOffset > 2000 ? setIsVisible(true) : setIsVisible(false)

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    return isVisible ? (
        <div className='scroll-top'>
            <a href='#top'>
                <BsFillArrowUpCircleFill className='scrollToTop-icon' />
            </a>
        </div>
    ) : null
}