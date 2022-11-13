import React from 'react';
import facelogo from './images/facebook.svg'
import Foto from './images/foto.svg'
import {Button} from "@mui/material";
import {ArrowForwardIos} from "@mui/icons-material";


const Info = () => {
    return (
        <div className="info">
            <div>
                <img src={facelogo} style={{
                    width: 300,
                }}/>
            </div>

            <div>
                <h1 style={{
                    color: "white",
                    fontFamily: 'Lucida Sans Unicode,Lucida Grande,sans-serif'
                }}>Welcome back,Murat!</h1>
            </div>

            <div>
                <img className="mrt-foto" src={Foto}/>
            </div>

            <div style={{marginTop: 3}}>
                <h2 style={{
                    color: '#ebf9ff',
                    fontFamily: 'Lucida Sans Unicode,Lucida Grande,sans-serif'
                }}>
                    Murat Cicos
                </h2>
            </div>

            <div>
                <Button style={{
                    border: '1px solid #fdfeff',
                    backgroundColor: '#315afe',
                    color: '#eefdff',
                    borderRadius: '20px',
                    margin: '4px 2px',
                    padding: '10px 40px',
                }} endIcon={<ArrowForwardIos/>}>Continue to Facebook</Button>
            </div>
        </div>
    );
};

export default Info;
