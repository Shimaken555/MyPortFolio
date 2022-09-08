import React, { Component,useEffect } from 'react';
import styled from "@emotion/styled";
import portfolio from '../img/portfolio.png';
import Corporation from '../img/Corporation.png';
import HandmadeJewelry from '../img/Handmade-Jewelry.png';
import DentalClinic from '../img/Dental-Clinic.png';
import {Device} from '../settings/setting';
import {container,sectionTitle,productsImg} from '../settings/commonParts';
import { ProductsItem } from '../settings/productsItem';
import WOW from 'wowjs';

export const Products = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])


const SProducts = styled.section`
background-color: #fff;
padding: 80px 0;
${Device.sp}{
padding: 60px 0;
}
`;

const SContainer = styled.div`
${container}
`;

const SSectionTitle = styled.div`
${sectionTitle}
`;

const SProductsItems = styled.div`
margin-top: 80px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
list-style: none;
text-align: center;
${Device.sp}{
  display: block;
  margin-top: 40px;
}
`;

const SProductsItem = styled.div`
width: calc(50% - 40px);
margin: 10px;
padding: 0;
&:nth-of-type(n + 3){
margin-top: 50px;
}
  ${Device.sp}{
  width: 100%;
  margin: 0;
  &:nth-of-type(n + 2){
    margin-top: 40px;
  }
}
`;

const SProductsImg1 = styled.div`
${productsImg}
background:url(${portfolio}) no-repeat center; background-size:cover; 
`;
const SProductsImg2 = styled.div`
${productsImg}
background:url(${Corporation}) no-repeat center; background-size:cover; 
`;
const SProductsImg3 = styled.div`
${productsImg}
background:url(${HandmadeJewelry}) no-repeat center; background-size:cover; 
`;
const SProductsImg4 = styled.div`
${productsImg}
background:url(${DentalClinic}) no-repeat center; background-size:cover; 
`;

const SProductsTitle = styled.div`
font-size: 24px;
text-align: left;
margin-top: 40px;
font-weight: bold;
${Device.sp}{
  margin-top: 10px;
  font-size: 22px;
}
`;

const SProductsLead = styled.div`
font-size: 22px;
margin-top: 10px;
text-align: left;
${Device.sp}{
  font-size: 20px;
  margin-top: 5px;
}
`;

const SProductsAlert = styled.div`
font-size: 16px;
line-height: 1.3;
margin-top: 10px;
text-align: left;
${Device.sp}{
  font-size: 15px;
  margin-top: 5px;
}
`;

  return(
    <SProducts id="products">
    <SContainer>
      <SSectionTitle>
        <h2>Products</h2>
      </SSectionTitle>
    <SProductsItems>
    <SProductsItem className="wow fadeInLeft" data-wow-offset="100">
      <a href="#">
      <SProductsImg1></SProductsImg1>
      <ProductsItem Title="My PortFoilo Site" Lead="HTML/CSS/React"/> 
      </a>
    </SProductsItem>
    <SProductsItem className="wow fadeInLeft" data-wow-offset="100">
      <a href="https://shima-ken.org/sample/">
        <SProductsImg2></SProductsImg2>
      <ProductsItem Title="Corporation Demo Site" Lead="HTML/CSS/Javascript"/> 
      </a>
    </SProductsItem>
    <SProductsItem className="wow fadeInRight" data-wow-offset="100">
      <a href="https://shima-ken.org/sample2/">
      <SProductsImg3></SProductsImg3>
      <ProductsItem Title="Handmade Jewelry Demo Site" Lead="HTML/CSS/Javascript"/> 
        </a>
    </SProductsItem>
    <SProductsItem className="wow fadeInRight" data-wow-offset="100">
      <a href="http://lapraspica.com/">
      <SProductsImg4></SProductsImg4>
      <ProductsItem Title="Dental Clinic Demo Site" Lead="HTML/CSS/Javascript/PHP"/> 
        <SProductsAlert>※Basic認証がかかってます。
          <br/>　ユーザー名:shimaken5
          <br/>　パスワード:Syouto9ta14
          </SProductsAlert>
        </a>
    </SProductsItem>
  </SProductsItems>
</SContainer>
</SProducts>
);
};
