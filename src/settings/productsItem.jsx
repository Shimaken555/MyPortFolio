import React from 'react';
import styled from "@emotion/styled";
import {Colors,Device} from '../settings/setting';

export const ProductsItem = (props) => {

const {Title , Lead} = props;

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

  return (
    <>
    <SProductsTitle>{Title}</SProductsTitle>
    <SProductsLead>{Lead}</SProductsLead>
    </>
  );
};