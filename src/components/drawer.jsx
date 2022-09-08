
/** @jsxImportSource @emotion/react */

import React, { useState,memo } from 'react';
import styled from 'styled-components';
import {Colors,Device} from '../settings/setting';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { css } from "@emotion/react";
// import styled from "@emotion/styled";

export const Drawer = memo((props) => {

const {visible, setVisible} = props;

const SDrawerMenuSp = styled.div`
${Device.sp}{
z-index: 200;
position: fixed;
-webkit-transition:ease .5s;
transition:ease .5s;
position: fixed;
background-color: rgba(0, 0, 0, 0.8);
top: 60px;
left: 0;
right: 0;
bottom: 0;
width: 100%;
height: 100vh;
}
`;

const SDrawerMenuUl = styled.ul`
${Device.sp}{
  height: 80vh;
  margin: 40px;
  background-color: #fff;
  border-radius: 20px;
}
`;

const SDrawerMenuLi = styled.li`
${Device.sp}{
  width: 100%;
  text-align: center;
  line-height: 4;
  a{
    display: block;
    width: 90%;
    margin: auto;
    border-bottom: 1px solid #dcdcdc;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.1em;
    &:hover{
      color: ${Colors.subColor};
    }
  }
}
`;

const messageStyle = (visible) =>
  css({
    visibility: visible ? "visible" : "hidden",
  });

  return (
    <div css={messageStyle(visible)} className='drawer__menu'>
      <SDrawerMenuSp>
        <SDrawerMenuUl>
          <SDrawerMenuLi><AnchorLink href="#top" onClick={() => setVisible(!visible)}>Home</AnchorLink></SDrawerMenuLi>
          <SDrawerMenuLi><AnchorLink href="#about" offset="50" onClick={() => setVisible(!visible)}>About</AnchorLink></SDrawerMenuLi>
          <SDrawerMenuLi><AnchorLink href="#products" offset="50" onClick={() => setVisible(!visible)}>Products</AnchorLink></SDrawerMenuLi>
          <SDrawerMenuLi><AnchorLink href="#contacts" offset="50" onClick={() => setVisible(!visible)}>Contact</AnchorLink></SDrawerMenuLi>
        </SDrawerMenuUl>
      </SDrawerMenuSp>
    </div>

  )
});