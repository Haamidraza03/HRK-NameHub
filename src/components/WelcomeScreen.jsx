import React from 'react';
import { Row, Col } from 'react-bootstrap';
import {useTypewriter,Cursor} from "react-simple-typewriter";

export default function WelcomeScreen() {
    const [text] = useTypewriter({
        words : ["HRK-NameHub"],
        loop:{},
        typeSpeed:150,
        deleteSpeed:80,
      });
  return (
    <div className="justify-content-center row h-100 text-center align-items-center" id='welcome' style={{marginTop:"120px"}} data-aos="zoom-in" data-aos-duration="1400" data-aos-easing="ease-in-out">
      <div className='col-md-12 h-100'>
        <h1 className="display-1 fw-bold mt-5">Welcome to <span className='clip'>{text}</span><Cursor/></h1>
        <p className='fs-2'>Find GitHub profiles just by name!</p>
      </div>
    </div>
  );
}
