/* eslint-disable linebreak-style */
import React from 'react';
import {
  Container,
  Box,
  Text,
  Stack,
  SimpleGrid,
  Card,
  useMantineTheme,
  Anchor,
  Flex,
} from '@mantine/core';
import Image from 'next/image';
import { useHover } from '@mantine/hooks';
import { features } from 'process';
import classes from './Pricing.module.css';
import { Images } from '@/public';
import { TxKeyPath, translate } from '@/i18n';

interface PricingButtons {
  label: string;
  color: string;
  backgroundColor: string;
  border: string;
  hoverColor: string;
}
const PricingButtons: React.FC<PricingButtons> = ({
  label,
  color,
  border,
  backgroundColor,
  hoverColor,
}) => {
  const { hovered, ref } = useHover<any>();
  const buttonStyles = {
    border,
    backgroundColor: hovered ? 'initial' : backgroundColor,
    borderRadius: '64px',
    display: 'inline-flex',
    fontSize: 'clamp(16px,4.5vw,20px)',
    fontWeight: 500,
    lineHeight: 1,
    padding: '8px 16px',
    textDecoration: 'none',
  };
  return (
    <>
      <Anchor
        href="https://highpolar.io"
        c={hovered ? hoverColor : color}
        style={buttonStyles}
        ref={ref}
      >
        {label}
      </Anchor>
    </>
  );
};

const Pricing = () => {
  const theme = useMantineTheme();
  const plans = [
    {
      type: 'global.pricing.semiHeading-1' as TxKeyPath,
      alt: 'The ZeroTier logo (a circle on top of a T) drawn in negative space',
      description: 'global.pricing.subHeading-1-1' as TxKeyPath,
      logo: Images.template9.pricing.img1,
      features: [
        {
          id: 'admin',
          name: 'global.pricing.subHeading-1-2' as TxKeyPath,
          value: true,
        },
        {
          id: 'nodes',
          name: 'global.pricing.subHeading-1-3' as TxKeyPath,
          value: true,
        },
        {
          id: 'unlimited_networks',
          name: 'global.pricing.subHeading-1-4' as TxKeyPath,
          value: true,
        },
        {
          id: 'business_sso',
          name: 'global.pricing.subHeading-1-5' as TxKeyPath,
          value: false,
        },
        {
          id: 'community_support',
          name: 'global.pricing.subHeading-1-6' as TxKeyPath,
          value: true,
        },
        {
          id: 'price',
          name: 'global.pricing.subHeading-1-7' as TxKeyPath,
          value: 'FREE',
        },
      ],
      button: () => (
        <PricingButtons
          label={translate('global.pricing.button-1')}
          color={theme.colors.black[0]}
          backgroundColor={theme.colors.white[0]}
          border={`2px solid ${theme.colors.white[0]}`}
          hoverColor={theme.colors.white[0]}
        />
      ),
    },
    {
      type: 'global.pricing.semiHeading-2' as TxKeyPath,
      alt: 'The ZeroTier logo (a circle on top of a T) drawn in negative space',
      description: 'global.pricing.subHeading-2-1' as TxKeyPath,
      logo: Images.template9.pricing.img2,
      features: [
        {
          id: 'admins',
          name: 'global.pricing.subHeading-2-2' as TxKeyPath,
          value: true,
        },
        {
          id: '25_node_packs',
          name: 'global.pricing.subHeading-2-3' as TxKeyPath,
          value: true,
        },
        {
          id: 'unlimited_networks',
          name: 'global.pricing.subHeading-2-4' as TxKeyPath,
          value: true,
        },
        {
          id: 'business_sso',
          name: 'global.pricing.subHeading-2-5' as TxKeyPath,
          value: true,
        },
        {
          id: 'community_support',
          name: 'global.pricing.subHeading-2-6' as TxKeyPath,
          value: true,
        },
        {
          id: 'starting_at',
          name: 'global.pricing.subHeading-2-7' as TxKeyPath,
          value: true,
        },
      ],
      button: () => (
        <PricingButtons
          label={translate('global.pricing.button-2')}
          color={theme.colors.black[0]}
          backgroundColor={theme.colors.yellow[1]}
          border={`2px solid ${theme.colors.yellow[1]}`}
          hoverColor={theme.colors.yellow[1]}
        />
      ),
    },
    {
      type: 'global.pricing.semiHeading-3' as TxKeyPath,
      alt: 'The ZeroTier logo (a circle on top of a T) drawn in negative space',
      description: 'global.pricing.subHeading-3-1' as TxKeyPath,
      logo: Images.template9.pricing.img3,
      features: [
        {
          id: 'use_cases',
          name: 'global.pricing.subHeading-3-2' as TxKeyPath,
          value: ['IoT/IIoT', 'SD-WAN', 'VPN', 'Remote Monitoring and Management'],
        },
        {
          id: 'contact_sales',
          name: 'global.pricing.subHeading-3-7' as TxKeyPath,
          value: true,
        },
      ],
      button: () => (
        <PricingButtons
          label={translate('global.pricing.button-3')}
          color={theme.colors.white[0]}
          backgroundColor={theme.colors.blue[0]}
          border={`2px solid ${theme.colors.blue[0]}`}
          hoverColor={theme.colors.white[0]}
        />
      ),
    },
  ];
  return (
    <Container className={classes.container}>
      <Stack mt={120} ta="center" gap="xs">
        <Text className={classes.title}>{translate('global.pricing.title')}</Text>
        <Text className={classes.inner}>
        {translate('global.pricing.subTitle')}
        </Text>

        <SimpleGrid cols={{ base: 1, md: 3, lg: 3, xl: 3 }} spacing={38} p={16}>
          {plans.map((item) => (
            <Card radius={24} className={classes.card} key={item.type}>
              <Stack>
                <Box mx="auto">
                  <Image
                    src={item.logo}
                    alt={item.alt}
                    className={classes.imgWrapper}
                    height={100}
                    width={100}
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBUUNBWUFBQUFmOC85aEFBQUNHVWxFUVZSNDJtT2dLa2p4M3M2WTRMbUxPZFo5TjJNY0dnYUpnZVJBYXJCcXp2TGZnazJDT0xWcHZ0dkFBakZ1ZTNpQXRnVkd1ZTROQTlvWUYrMjZOeHpFQm9vbEF1V2k0ajEyaFFMWlBIQTl5S0F0ZVRaVFRzQ210SnlBemEzNVFSdUt2UzFPTWVjSGJUVFBBMktRZkc3UVJ2VTBuMjBPUURYcDgwdUtFWm9iNHBZeGdlaTYyT1c2amZGTE80QTRBOGd1clkxWjdsUWZ1NndBS044QVZSZmZtclRJc1RGdXFXOWR6SEl6a0ZoVHdsSW1ocWs1czhBR1RNbWVIZGViUGs5MmN2YnNBaUN1bjUwLzNXdEs5aXpGOXVRRllndUxwNWhQekp6ajJKTTJYM2xTMWh3Qm9KNDBCaUFBOG9GNmdXQlp4UVRoNVJYOXlReFFzS3FxTDJKKzhaVEFsWlY5NFd0cmVrTG5GazROV1YzVkd3T1RYMUkyMGJFalpSNExBd3pzYm0xeDJ0M2FiQVhqMThYTjVqcmNYZWV3bzdrMVlITkRoL09ocnJyd0xZM3RYakQ1QTUwTjZudmJtaXdZWU9EY3BJcTRTMVBMQkdIOGE5T0wzYzVNckd5N09LVTg2ZkswMHJBekU2dTZya3d2OFlISm41cFFMWDUyVW1VY0F3dzhYcEFUZWFLM2doM0VmcllveS9QZTNQd1FFUHZxOUJKK29NRkNJUGI5dVhraFFEa1BFUHZtekFLdUp3dXpFUVo4VzV1ZzhHdERuRFlRNjN4ZW5aVEZnQU1BNVhMK2JJeFYvYjR1d2ZYTDZpUTNCaGo0dnplRUVTZ1JEc1NKL3cvNHNvTEUzcTlJWTRUSnc5ai85d1d3QWRVa0FYRW9Bejd3WTMwOEk0YllPcUFZUGdBMGxRbUVmMitNeGFudzk0WTRScGc2cXVWZ0FFWXo3NjFUOVN4QkFBQUFBRWxGVGtTdVFtQ0MnIC8+CiAgICA8L3N2Zz4KICA="
                  />
                </Box>
                <Text className={classes.cardTitle}>{translate(item.type) as TxKeyPath}</Text>
                    <Box>
                    <Stack className={classes.cardText} gap={0}>
                      {translate(item.description) as TxKeyPath}
                    </Stack>
                    </Box>
                <Box className={classes.decription}>
                  <Stack gap={20} mt={25} mb={25}>
                    {item.features.map((feature) => (
                      <React.Fragment key={feature.id}>
                        <p>{translate(feature.name) as TxKeyPath}</p>
                        {Array.isArray(feature.value) && (
                          <Stack gap={20} mt={0}>
                            {feature.value.map((value) => (
                              <p key={feature.id}>-{value}</p>
                            ))}
                          </Stack>
                        )}
                      </React.Fragment>
                    ))}
                  </Stack>
                </Box>
              </Stack>
              <Flex align="center" justify="center" mt={16} mb={16}>
                {item.button && item.button()}
              </Flex>
            </Card>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
};

export default Pricing;
