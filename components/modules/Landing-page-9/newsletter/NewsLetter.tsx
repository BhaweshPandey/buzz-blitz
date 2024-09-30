/* eslint-disable linebreak-style */
import React from 'react';
import { Box, Button, Container, Flex, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import classes from './NewsLetter.module.css';
import { translate } from '@/i18n';

const NewsLetter = () => {
  const breakPointMaw754 = useMediaQuery('(max-width:654px)');
  return (
    <Container className={classes.container} mx={breakPointMaw754 ? 8 : 'auto'}>
      <Flex gap={16} align="center" wrap="wrap">
        <Box className={classes.newsLetterInner}>
          <Text className={classes.title}>{translate('global.letter.heading')}</Text>
          <Text className={classes.text}>
          {translate('global.letter.subHeading')}
          </Text>
        </Box>

        <Flex gap={16} align="center" wrap="wrap">
          <Box className={classes.inputWrapper}>
            <input placeholder={translate('global.letter.input')} required className={classes.input} />
          </Box>
          <Box className={classes.buttonWrapper}>
            <Button className={classes.subscribeButton}>{translate('global.letter.button')}</Button>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default NewsLetter;
