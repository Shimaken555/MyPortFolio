/** @jsxImportSource @emotion/react */
import React, { Component, useEffect, useState } from "react";
import logo from "../img/logo.png";
import { Colors, Device } from "../settings/setting";
import { container } from "../settings/commonParts";
import styled from "@emotion/styled";
import { Drawer } from "./drawer";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const PcHead = () => {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleVisibility = () => {
    window.scrollY > 200 ? setScrolled(true) : setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const SHeader = styled.header`
    height: 70px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.2);
    z-index: 100;
    &.scrolled {
      background-color: rgba(255, 255, 255, 0.8);
    }
    ${Device.sp} {
      height: 60px;
    }
  `;

  const SHeaderInner = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    ${container}
    ${Device.sp} {
      height: 60px;
    }
  `;

  const SHeaderLogo = styled.div`
    margin-right: auto;
    padding-top: 6px;
    width: 140px;
    line-height: 70px;
    h1 {
      margin: auto;—
    }
    img {
      margin: auto;
      width: 100%;
      display: block;
    }
  `;

  const SHeaderMenuPc = styled.div`
    margin: auto;
    margin-right: 0;
    ${Device.sp} {
      display: none;
    }
  `;
  const SHeaderMenuUl = styled.ul`
    display: flex;
    margin-left: auto;
  `;

  const SHeaderMenuLi = styled.li`
a{
  text-align: center;
  letter-spacing: 0.1em;
  position: relative;
  &::after{
    background: $sub_color;
    bottom: -8px;
    content: '';
    height: 2px;
    left: 0;
    position: absolute;
    width: 101%;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: -webkit-transform .2s;
    transition: -webkit-transform .2s;
    transition: transform .2s;
    transition: transform .2s, -webkit-transform .2s;
  }
  &:hover::after{
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
 }
&:not(:first-of-type){
 margin-left: 48px;   
}
}
`;

  const SHeaderDrawerSp = styled.nav`
    visibility: hidden;
    ${Device.sp} {
      position: fixed;
      height: 60px;
      top: 0;
      right: 15px;
      width: 30px;
      visibility: visible;
      cursor: pointer;
      z-index: 101;
    }
  `;

  const SHeaderDrawerOpen = styled.div`
    visibility: hidden;
    ${Device.sp} {
      position: relative;
      margin: auto;
      margin-right: 0;
      height: 60px;
      visibility: visible;
      display: block;
      &.true span:nth-of-type(1) {
        top: 28px;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
      }
      &.true span:nth-of-type(2) {
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        opacity: 0;
      }
      &.true span:nth-of-type(3) {
        top: 28px;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
    }
  `;

  const SDrawerOBar = styled.span`
    visibility: hidden;
    ${Device.sp} {
      position: absolute;
      visibility: visible;
      display: block;
      right: 0;
      height: 2px;
      width: 30px;
      background-color: ${Colors.fontColor};
      transition: all 1.4s;
      &:nth-of-type(1) {
        top: 22px;
      }
      &:nth-of-type(2) {
        top: 30px;
      }
      &:nth-of-type(3) {
        top: 38px;
      }
    }
  `;

  return (
    <>
      <SHeader className={scrolled ? "scrolled" : ""}>
        <SHeaderInner>
          <SHeaderLogo>
            <h1>
              {" "}
              <img src={logo} alt="Shimaken logo" />
            </h1>
          </SHeaderLogo>
          <SHeaderMenuPc>
            <SHeaderMenuUl>
              <SHeaderMenuLi>
                <AnchorLink href="#top">Home</AnchorLink>
              </SHeaderMenuLi>
              <SHeaderMenuLi>
                <AnchorLink href="#about" offset="60">
                  About
                </AnchorLink>
              </SHeaderMenuLi>
              <SHeaderMenuLi>
                <AnchorLink href="#products" offset="60">
                  Products
                </AnchorLink>
              </SHeaderMenuLi>
              <SHeaderMenuLi>
                <AnchorLink href="#contacts" offset="60">
                  Contacts
                </AnchorLink>
              </SHeaderMenuLi>
            </SHeaderMenuUl>
          </SHeaderMenuPc>
        </SHeaderInner>
        <SHeaderDrawerSp onClick={() => setVisible(!visible)}>
          <SHeaderDrawerOpen className={visible}>
            <SDrawerOBar></SDrawerOBar>
            <SDrawerOBar></SDrawerOBar>
            <SDrawerOBar></SDrawerOBar>
          </SHeaderDrawerOpen>
        </SHeaderDrawerSp>
      </SHeader>

      <Drawer visible={visible} setVisible={setVisible} />
    </>
  );
};
