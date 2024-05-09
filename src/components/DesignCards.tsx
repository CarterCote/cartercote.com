import React, { FC } from 'react';

import { Section } from "./Layout"
import NextLink from "next/link";

interface DesignCardProps {
  bgName: string;
}

const DesignCard: FC<DesignCardProps> = ({ bgName }) => {
  return( 
    <div>

    </div>   
    // display: flex;
    // background-position: center bottom;
    // flex-direction: row;
    // width: 340px;
    // height: 440px;
    // margin-bottom: 46px;
    // border-radius: 6px;
    // box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.18);
    // padding: 26px;
    // box-sizing: border-box;
    // text-decoration: none;
    // margin: 24px;
    // transition: transform cubic-bezier(0.35, 1.21, 1, 1) 0.16s;
      
    // @media screen and (max-width: 1220px) {
    //     width: 320px;
    //     margin: 20px;
    // }
    // @media screen and (max-width: 1000px) {
    //   width: 320px;
    //   margin: 15px 15px;
    //   height: 400px;
    // }
    // @media screen and (max-width: 500px) {
    //   width: calc(100vw - 40px);
    //   max-width: 300px;
    //   margin: 15px 20px;
    //   height: 360px;
    //   background-size: cover !important;
    // }
    // :hover {
    //     transform: scale(1.08);
    //     box-shadow: 0px 10px 17px rgba(0, 0, 0, 0.2);
    // }
  )

};

const DesignCards = () => {

  return (
    <Section>
        <NextLink href="/">
            <DesignCard
                style={{
                background: "design/001.jpg"
                }}
            >
            </DesignCard>
        </NextLink>
        <NextLink href="/">
            <DesignCard
                style={{
                background: "design/002.jpg"
                }}
            >
            </DesignCard>
        </NextLink>
    </Section>
  )
}

export default DesignCards