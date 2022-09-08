import React, { Component,useEffect } from 'react';
// import styled from 'styled-components';
import styled from "@emotion/styled";
import {Colors,Device} from '../settings/setting';
import {container} from '../settings/commonParts';
export const Footer = () => {

  const SFooterCopyright = styled.div`
  color: #c8c8c8;
  text-align: center;
  margin-top: 5px;
  ${Device.sp}{
    font-size: 14px
  }
  `;
  
  const SFooterSns = styled.ul`
  text-align: center;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content:space-around;
  li a{
    display: block;
    border-radius: 50%;
    transition: all 0.5s;
    background-color: rgba(241, 241, 241, 0.08);
    width: 50px;
    height: 50px;
    line-height: 50px;
    padding-top: 7px;
    text-align: center;
    color: #c8c8c8;
    &:hover{
      color: ${Colors.subColor};
    }
  }
  text-align: center;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content:space-around;
  `;
  
  const SFooter = styled.footer`
  background-color: #343a40;
  padding: 20px 0;
  `;
  
  const SContainer = styled.div`
  ${container}
  `;

  return(
    <SFooter id="footer">
    <SContainer>
      <SFooterSns>
        <li><a href="https://twitter.com/shima954_ken" target="_blank"><i className="fab fa-twitter fa-2x"></i></a></li>
      </SFooterSns>
      
      <SFooterCopyright>
        <p><small lang="en">© 2022 Shimaken Portfolio Website</small></p>
    </SFooterCopyright>
    </SContainer>
  </SFooter>
  );
};
