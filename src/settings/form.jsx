import React from 'react';
// import styled, { css } from 'styled-components';
import styled from "@emotion/styled";

import {Device} from './setting';

export const FormLabel = (props) => {
  const {htmlFor, labelName} = props;

  const SContactFormLabel = styled.label`
  text-align: center;
  width: 170px;
  height: 40px;
  padding: 13px 0;
  ${Device.sp}{
    width: auto;
    height: 32px;
    display: inline-block;
  }
  span{
    font-size: 18px;
    ${Device.sp}{
      font-size: 14px;
    }
  }
  `;

  return (
  <SContactFormLabel htmlFor={htmlFor}>
    <span>{labelName}</span>
  </SContactFormLabel>
  )
}
