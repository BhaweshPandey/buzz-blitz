import { Images } from '@/public';
import { Box } from '@mantine/core';
import Image from 'next/image';
import React from 'react'
import style from "./hero.module.css"
const HeroImage = () => {
    return (
        <Box w={"100%"}
            className={style.bgImage}
            style={{
                backgroundImage: `url(${Images.template9.hero_banner})`,
                backgroundRepeat: "no-repeat",
                zIndex:9999,
                backgroundSize: "contain"
            }}
        ></Box>
    )
}

export default HeroImage;