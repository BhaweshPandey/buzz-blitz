/* eslint-disable linebreak-style */
import { Box, Container, Text } from '@mantine/core';
import React from 'react';
import classes from './Teams.module.css';
import { GridCards } from '../grid-cards/GridCards';
import { translate } from '@/i18n';

const Teams = () => (
        <Container className={classes.container}>
            <Box
              px="16px"
            >
                <Text className={classes.title}>
                {translate('global.team.title')}
                </Text>
                <GridCards />
            </Box>

        </Container>
    );

export default Teams;
