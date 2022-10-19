import React, { useEffect, useState } from 'react'

export default function NavBar() {

    const [time, setTime] = useState([]);
    const [display, setDisplay] = useState(false); 
    const timeNow = new Date();
    const timeList = timeNow.toString().split(" "); 
    console.log(timeList);
    useEffect(()=>{
        setTime(timeList[0] + " " + timeList[1] + " " + timeList[2] + " " + timeList[3])
    }, [timeList]);
    const changeDisplay = () =>{
        setDisplay(!display); 
    }

  return (
    <div>
        <div className='navBar'>
            <a href='/'><h1 className='navHeader'>Baby Names <i className='fa-solid fa-baby-carriage fa-xl'></i></h1></a>
            <div className='contactAbout'>
                <a href='/contact'><strong className='navLink'>Contact</strong></a>
                <a href='/about'><strong className='navLink'>About</strong></a>
                <div className='timeText'>
                    <strong id="time"><i className='fa-solid fa-calendar-days'></i> {time}</strong>
                </div>
            </div>
        </div>

        <div className='navBarMobile'>
            <a href='/'><h1 className='navHeaderMobile'>Baby Names <i className='fa-solid fa-baby-carriage fa-xl'></i></h1></a>
            <div className='threeLinesMobile'>
                <i className='fa-solid fa-bars fa-2x' onClick={changeDisplay}></i>
            </div>
        </div>

        <div className={ display ?'contactAboutMobile' : "displayNone"}>
            <a href='/contact'className='navLinkMobile'><strong className='navLinkMobile'>Contact</strong></a>
            <a href='/about' className='navLinkMobile'><strong className='navLinkMobile'>About</strong></a>
            <div className='timeTextMobile'>
                <strong id="time"><i className='fa-solid fa-calendar-days'></i> {time}</strong>
            </div>
        </div>
    </div>
  )
}
