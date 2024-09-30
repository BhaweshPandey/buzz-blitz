/* eslint-disable linebreak-style */
import { Anchor, Box, Group, Stack, Text } from '@mantine/core';
import React from 'react';
import { useMediaQuery } from '@mantine/hooks';
import classes from './OpenSourceCommunityCard.module.css';
import { translate } from '@/i18n';

const OpenSourceCommunityCard = () => {
  const breakPointMaw754 = useMediaQuery('(max-width:654px)');
  return (
    <Box className={classes.container} mx={breakPointMaw754 ? 16 : 'auto'}>
      <Stack>
        <Text className={classes.title}>{translate('global.Community.heading')}</Text>
        <Text className={classes.description}>
        {translate('global.Community.subHeading')}
        </Text>
        <Group gap={16} className={classes.buttons}>
          <Anchor
            underline="never"
            href="https://github.com/Highpolar-Softwares"
            target="_blank"
            className={classes.githubButton}
          >
            {translate('global.Community.button-1')}
          </Anchor>
          <Anchor
            href="https://highpolar.io/"
            target="_blank"
            underline="never"
            className={classes.documentationButton}
          >
            {translate('global.Community.button-2')}
          </Anchor>
        </Group>
      </Stack>
    </Box>
  );
};

export default OpenSourceCommunityCard;
