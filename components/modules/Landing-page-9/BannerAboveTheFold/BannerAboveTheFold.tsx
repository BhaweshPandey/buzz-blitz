/* eslint-disable linebreak-style */
import { Box, Container, Flex, useMantineColorScheme } from '@mantine/core';
// import { useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';
import { Images } from '@/public';
import Header from '../header/Header';
import Hero from '../hero/Hero';
import classes from './BannerAboveTheFold.module.css';

const BannerAboveTheFold = () => {
    const { colorScheme } = useMantineColorScheme();
    return (
        <Container mx="auto" className={classes.container}>
            <Flex justify="space-between">
                <Box style={{ zIndex: 2 }}>
                    <Header />
                    <Hero />
                </Box>
                <Image priority src={colorScheme === 'light' ? Images.template9.banner_hero_image : Images.template9.banner_hero_image_light} sizes="100vw" style={{ objectFit: 'cover', opacity: 0.8 }} aria-label="banner-image" alt="banner-img" fill />
            </Flex>
        </Container>

    );
};
export default BannerAboveTheFold;
