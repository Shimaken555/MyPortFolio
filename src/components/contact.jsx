import React, { Component,useEffect,useState } from 'react';
import styled from "@emotion/styled";
import {Device} from '../settings/setting';
import {container,sectionTitle,Button} from '../settings/commonParts';
import { FormLabel } from '../settings/form'; 
import WOW from 'wowjs';

export const Contact = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])

  const [state, setState] = useState({
    name: ' ',
    email: ' ',
    textbox: ' ',
  } ); 
  
    const onChangeHandler = (event) => {
      event.persist();
      setState((prevState) => {
        return {...prevState,  textbox: event.target.value };
      });
    };

  const handleInputChange = (event) => {
    event.persist();
    const target = event.target;
    const name = target.name;
    setState(() => {
      return {...state, [name]: target.value };
    });
  };

  const submitAlert = (event) => {
    event.persist();
    event.preventDefault();
    const error = Object.values(state).some((value) => {
      return value.length === 0;
    });
    if(error) {
      alert('未入力項目があります');
    } else {
      alert('送信します');
      console.log(state);
    }
  };

  const SContainer = styled.div`
  ${container}
  ${Device.sp}{
  width: calc(100% - 30px);
  }
  `;
  
  const SSectionTitle = styled.div`
  ${sectionTitle}
  `;
  
  const SContactForm = styled.div`
  margin-top: 60px;
  ${Device.sp}{
    margin-top: 30px;
  }
  `;
  
  const SContactFormMessage = styled.div`
  font-size: 24px;
  text-align: center;
  ${Device.sp}{
    font-size: 20px;
  }
  `;
  
  const SContactInputArea = styled.div`
  width: 760px;
  margin: auto;
  ${Device.sp}{
    width: 100%;
  }
  `;
  
  const SContactFormRow = styled.div`
  display: block;
  margin-top: 60px;
  &:not(:first-of-type){
    margin-top: 35px;
    ${Device.sp}{
      margin-top: 25px;
    }
    ${Device.sp}{
      margin-top: 40px;
    }
  `;
  
  const SContactBtn = styled.div`
  text-align: center;
  margin-top: 30px;
  `;
  
  const SContactButton = styled.button`
  ${Button}
  width: 266px;
  height: 60px;
  &:disabled{
    background: #b2b2b2;
  }
  ${Device.sp}{
    width: 200px;
    height: 48px;
  }
  `;
  
  const SContactMessage = styled.div`
  display: none;
  `;
  
  const SContactFormInput = styled.input`
  margin-top: 10px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: none;
  box-shadow: 5px 6px 15px #60606029;
  border-radius: 2px;
  border: none;
  color: inherit;
  font-family: inherit;
  width: 100%;
  height: 40px;
  padding-left: 8px;
  font-size: 16px;
  ${Device.sp}{
    width: 100%;
    margin-top: 3px;
    margin-left: 0;
  }
  `;
  
  const SContactFormInputBox = styled.textarea`
  margin-top: 10px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: none;
  box-shadow: 5px 6px 15px #60606029;
  border: none;
  border-radius: 2px;
  color: inherit;
  font-family: inherit;
  height: 165px;
  width: 100%;
  padding: 8px;
  font-size: 16px;
  line-height: 1.3;
  ${Device.sp}{
    width: 100%;
    margin-top: 3px;
    margin-left: 0;
  }
  `;
  
  const SContact = styled.section`
  background-color: #f7f7f7;
  padding: 80px 0;
  ${Device.sp}{
    padding: 60px 0;
  }
  `;

  return(
  <SContact id="contacts">
    <SContainer>
      <SSectionTitle>
        <h2>Contact</h2>
      </SSectionTitle>

      <SContactForm className="wow fadeInUp" data-wow-offset="100">
        <form id="js-form" method="post">
          <SContactFormMessage>
            <p>お気軽にお問い合せください！</p>
          </SContactFormMessage>

          <SContactInputArea>
            <SContactFormRow>
              <FormLabel htmlFor="field-name" labelName="お名前"/>
               <SContactFormInput type="text" name="name" value={state.name} id="field-name"required onChange={handleInputChange} />
            </SContactFormRow>

            <SContactFormRow>
            <FormLabel htmlFor="field-mail" labelName="メールアドレス"/>
              <SContactFormInput type="email" name="email" value={state.email} id="field-mail"  onChange={handleInputChange} required />
            </SContactFormRow>

            <SContactFormRow>
            <FormLabel htmlFor="field-inputbox" labelName="お問い合わせ内容"/>
              <SContactFormInputBox id="field-inputbox" name="textbox" required value={state.textbox} onChange={onChangeHandler}></SContactFormInputBox>
            </SContactFormRow>
            
          </SContactInputArea>

          <SContactBtn>
            <SContactButton id="js-submit" type="submit" onClick={submitAlert}>
            <span>送信</span>
            </SContactButton>
          </SContactBtn>
        </form>
  
        <SContactMessage id="js-success" >
          <p>送信完了しました。ありがとうございました。</p>
        </SContactMessage>
        <SContactMessage id="js-error" className="-error">
          <p>送信失敗しました。残念でした。</p>
        </SContactMessage>
      </SContactForm>
    </SContainer>
  </SContact>
    );
};


