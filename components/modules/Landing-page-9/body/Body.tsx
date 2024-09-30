/* eslint-disable linebreak-style */
import { Container, Stack } from '@mantine/core';
import React from 'react';
import BodyCard from '../body-cards/BodyCard';
import classes from './Body.module.css';
import { Images } from '@/public';
import { TxKeyPath } from '@/i18n';

const Body = () => {
    const bodyCardsMockData = [{
        id: 1,
        title: 'global.body.heading-1' as TxKeyPath,
        description: 'global.body.subHeading-1' as TxKeyPath,
        buttonLabel: 'global.body.button-1' as TxKeyPath,
        img: Images.template9.bodyCards.img1,
    }, {
        id: 2,
        title: 'global.body.heading-2' as TxKeyPath,
        description: 'global.body.subHeading-2' as TxKeyPath,
        buttonLabel: 'global.body.button-2' as TxKeyPath,
        img: Images.template9.bodyCards.img2,

    }];
    return (

        <Container className={classes.container}>
            <Stack gap={32} mt={64}>
                <BodyCard data={bodyCardsMockData[0]} />
                <BodyCard data={bodyCardsMockData[1]} label="SP-sales" />
            </Stack>

        </Container>
    );
};

export default Body;
