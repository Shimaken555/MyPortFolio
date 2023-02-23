import React from "react";
// import styled from 'styled-components';
import styled from "@emotion/styled";
import profile from "../img/profile.jpeg";
import { Colors, Device } from "../settings/setting";
import { container, sectionTitle, Button } from "../settings/commonParts";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const About = () => {
  const SAbout = styled.section`
    padding: 80px 0;
    ${Device.sp} {
      padding: 60px 0;
    }
  `;

  const SContainer = styled.div`
    ${container}
    ${Device.sp} {
      width: calc(100% - 30px);
    }
  `;

  const SSectionTitle = styled.div`
    ${sectionTitle}
  `;

  const SAboutMain = styled.div`
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${Device.sp} {
      margin-top: 45px;
      display: block;
    }
  `;

  const SABoutLeft = styled.div`
    width: calc(50% - 16px);
    ${Device.sp} {
      width: 100%;
    }
  `;

  const SABoutRight = styled.div`
    width: calc(50% - 16px);
    ${Device.sp} {
      width: 100%;
    }
  `;

  const SABoutProfile = styled.div`
    font-size: 25px;
    line-height: 1.5;
    font-family: monospace;
    ${Device.sp} {
      margin-top: 20px;
      font-size: 21px;
      line-height: 1.25;
    }
  `;

  const SABoutHistory = styled.div`
    margin-top: 30px;
    font-size: 21px;
    line-height: 1.5;
    font-family: monospace;
    ${Device.sp} {
      margin-top: 20px;
      font-size: 18px;
      line-height: 1.25;
    }
  `;

  const SAboutMessage = styled.div`
    text-align: center;
    margin-top: 20px;
    font-size: 32px;
    line-height: 1.5;
    font-weight: bold;
    color: ${Colors.accentColor};
    ${Device.sp} {
      font-size: 28px;
    }
  `;

  const SAboutButtonDiv = styled.div`
    margin-top: 40px;
    text-align: center;
    ${Device.sp} {
      margin-top: 30px;
    }
  `;

  const SAboutButton = styled.button`
    ${Button}
  `;

  return (
    <SAbout id="about">
      <SContainer>
        <SSectionTitle>
          <h2>About</h2>
        </SSectionTitle>
        <SAboutMain>
          <SABoutLeft>
            <img src={profile} alt="プロフィール" />
          </SABoutLeft>
          <SABoutRight>
            <SABoutProfile>
              名称：ShimaKen
              <br />
              スキル：HTML、CSS、Bootstrap、Javascript、Typescript、PHP、React、ReactNative
              <br />
              所在地：東京都
              <br />
              趣味：漫画、ゲーム、麻雀、ポケモン、カフェ巡り、ずっと真夜中でいいのにのライブに行くこと
              <br />
            </SABoutProfile>
            <SABoutHistory>
              埼玉県出身。1988年生まれ。
              <br />
              上智大学理工学部数学科卒業。
              <br />
              2011年に物流会社に入社。医薬品配送センターの業務を経て、2016年より情報システム課(社内SE)で勤務。
              <br />
              情報システム課として、今まで多くの社内ユーザーの問題解決を行っていく中で、要件定義・テスト・保守だけではなく、自分の手でWebサービスを作成したい、自分が作成したサービスでより多くの人に幸せを提供できる仕事がしたい、という気持ちが強くなりました。
              <br />
              自分で書いたコードがWeb画面上で形になっていく過程が楽しいという理由と、お客様との距離が近いという2つの理由でフロントエンドエンジニアに魅力を感じました。
              <br />
              2022年10月よりエンジニアに転職。現在はReactを学習しています！
            </SABoutHistory>
          </SABoutRight>
        </SAboutMain>

        <SAboutMessage>
          興味も持った方からのご連絡をお待ちしてます！
        </SAboutMessage>

        <SAboutButtonDiv>
          <AnchorLink href="#contacts" offset="60">
            <SAboutButton onclick="href='#contacts'">
              <span>お問い合わせはこちら</span>
            </SAboutButton>
          </AnchorLink>
        </SAboutButtonDiv>
      </SContainer>
    </SAbout>
  );
};
