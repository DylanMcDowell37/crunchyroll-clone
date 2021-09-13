import React, {useState} from 'react'
import HeaderHome from './header'
import MediaLinks from './header/mediaScreen'

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () =>{
      setIsOpen(!isOpen)
    }
    return (
        <div>
            <MediaLinks isOpen = {isOpen} toggle = {toggle}/>
            <HeaderHome isOpen = {isOpen} toggle = {toggle}/>
            
        </div> 
    )
}
