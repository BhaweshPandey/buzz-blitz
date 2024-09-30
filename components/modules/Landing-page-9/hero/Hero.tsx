/* eslint-disable linebreak-style */
import { Anchor, Flex, Group, Stack, Text } from '@mantine/core';
import React from 'react';
import { useMediaQuery } from '@mantine/hooks';
import classes from './GptMadeHero.module.css';
import { title } from '../header/Header';
import { translate } from '@/i18n';

const Hero = () => {
    const breakPointMaw754 = useMediaQuery('(max-width:654px)');
    return (
        <>
            <Flex align={breakPointMaw754 ? 'center' : 'flex-start'} mb={64} mx="auto" className={title.className} mt={64} ml="2rem" mr="2rem">
                <Stack
                  gap={16}
                  maw={breakPointMaw754 ? '100%' : '50%'}
                  pl={breakPointMaw754 ? 16 : 'initial'}
                  pr={breakPointMaw754 ? 16 : 'initial'}
                >
                    <Text
                      className={classes.headingWrapper}
                    >
                        {translate('global.hero.heading')}
                    </Text>
                    <Text
                      className={classes.subHeading}
                    >
                      {translate('global.hero.subHeading')}

                    </Text>
                    <Group gap={16} mb={8} mt={8}>
                        <Anchor
                          href="https://my.zerotier.com/login"
                          style={{
                                backgroundColor: '#ffb441',
                                border: '2px solid #ffb441',
                                color: '#1a1a1a',
                                textDecoration: 'none',
                                borderRadius: '64px',
                                display: 'inline-flex',
                                fontSize: '20px',
                                fontWeight: 500,
                                lineHeight: '30px',
                                padding: '8px 16px',
                                textAlign: 'center',
                                whiteSpace: 'nowrap',
                            }}
                        >
                          {translate('global.hero.button-1')}
                        </Anchor>

                        <Anchor
                          href="/features/"
                          style={{
                                backgroundColor: 'initial',
                                color: '#fff',
                                textDecoration: 'none',
                                borderRadius: '64px',
                                display: 'inline-flex',
                                fontSize: '20px',
                                fontWeight: 500,
                                lineHeight: '30px',
                                padding: '8px 16px',
                                textAlign: 'center',
                                whiteSpace: 'nowrap',
                            }}
                        >
                         {translate('global.hero.button-2')}
                        </Anchor>
                    </Group>

                </Stack>
            </Flex>
        </>
    );
};

export default Hero;
