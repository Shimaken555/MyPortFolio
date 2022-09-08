import React from 'react';
import { css } from "@emotion/react";
import {Colors,Device} from './setting';


export const container = css`
  max-width: 1140px;
  width: calc(100% - 40px);
  margin-left: auto;
  margin-right: auto;
  ${Device.sp}  {
  width: calc(100% - 30px);
  }
}
`;
export const sectionTitle = css`
text-align: center;
h2{
  font-size: 48px;
  position: relative;
  display: inline-block;
  ${Device.sp}{
    font-size: 35px;
  }
&::before,
&::after{
  content: "";
  position: absolute;
  display: inline-block;
  top: 50%;
  width: 90px;
  height: 3px;
  background-color: ${Colors.fontColor};
  ${Device.sp}{
  width: 50px;
  }
}
&::before{
  left: 105%;
}
&::after{
  right: 105%;
}
}
`;

export const Button = css`
background-color: ${Colors.subColor};
color: #fff;
width: 374px;
height: 70px;
box-shadow: 0px 3px 5px rgba(62, 62, 62, 0.2);
border: 0;
border-radius: 10px;
text-align: center;
font-family: inherit;
appearance: none;
cursor: pointer;
display: inline-block;
transition: all 0.1s ease 0s;
opacity: 1;
${Device.sp} {
width: 222px;
height: 48px;
}
&:hover{
  color: #fff;
  opacity: 0.7;
}
span{
  letter-spacing: 0.45px;
  font-size: 20px;
  font-weight: bold;
  ${Device.sp} {
  letter-spacing: 0;
  font-size: 16px;
  }
}
`;

export const productsImg = css`
width: 100%;
padding-top: 60%;
background-position:top;
`;

