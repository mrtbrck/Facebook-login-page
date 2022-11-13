import React from 'react';
import {Box, Input, Button} from "@mui/material";
import {Add, ArrowForwardIos} from "@mui/icons-material";

const FaceBookLoginPage = () => {
    return (
        <div className="login-page">


            <div style={{
                color: '#3d69f3',
            }}>
                <h1 style={{fontFamily: 'Lucida Sans Unicode,Lucida Grande,sans-serif'}}>This is not You?</h1>
            </div>

            <Box className="login-box">

                <div className="login-items">
                    <Input placeholder="Your e-mail Adress"/>
                    <Input placeholder="Your Password"/>
                    <Button className="button-login" style={{
                        border: '1px solid #315afe',
                        color: '#fafdff',
                        backgroundColor: '#315afe',
                        marginTop: '40px',
                        fontFamily: 'Lucida Sans Unicode,Lucida Grande,sans-serif',
                        borderRadius: '40px',
                        margin: '4px 2px',
                        padding: '10px 80px',
                    }} endIcon={<ArrowForwardIos/>}>Login</Button>
                </div>
            </Box>

            <div>
                <Button style={{
                    border: '1px solid #315afe',
                    color: '#2e53fe',
                    backgroundColor: '#ffffff',
                    marginTop: '50px',
                    fontFamily: 'Lucida Sans Unicode,Lucida Grande,sans-serif',
                    borderRadius: '20px',
                    margin: '4px 2px',
                    padding: '10px 40px'
                }} endIcon={<Add/>}>Create a Profile</Button>
            </div>

        </div>

    );
};

export default FaceBookLoginPage;
