import React, { Component,useEffect } from 'react';
import styled from "@emotion/styled";
import sunset from '../img/sunset.jpg';
import {Colors,Device} from '../settings/setting';
import WOW from 'wowjs';

export const Top = () => {

  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])

  const STop = styled.section`
  position: relative;
  height: 100vh;
  background: url(${sunset}) no-repeat center center /cover;
  margin-top: -70px;
  &::before{
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;


const StopVisual = styled.div`
  position: absolute;
  text-align: left;
  top: 48%;
  left: 10%;
  transform: translateY(-50%);
  ${Device.sp}{
    right: 10%;
    top: 50%;
  }
`;

const STopMessage = styled.h1`
  font-size: 56px;
  line-height: 1.5;
  padding-top: 30px;
  font-family: "Courgette", cursive;
  color: ${Colors.accentColor};
  ${Device.sp}{
  font-size: 42px;
  }
`;

const SSubMessage = styled.h2`
font-size: 32px;
margin-top: 30px;
color: ${Colors.accentColor};
${Device.sp}{
font-size: 24px;
margin-top: 10px;
line-height: 1.5;
}
`;

  return(
      <STop id="top">
      <StopVisual>
        <STopMessage className="wow fadeInDown" data-wow-delay=".3s">Welcome to<br/> Shimaken's Portfolio site!</STopMessage>
        <SSubMessage className="wow fadeInDown" data-wow-delay="1.3s">Webシステム制作を通じて世の中に幸せを提供したい</SSubMessage>
      </StopVisual>
    </STop>
  );
};
