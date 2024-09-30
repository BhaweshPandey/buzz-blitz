/* eslint-disable linebreak-style */
import { Text, SimpleGrid, Stack, Box } from '@mantine/core';

import { useCallback } from 'react';
import Image from 'next/image';
import classes from './GridCards.module.css';
import { Images } from '@/public';
import { TxKeyPath, translate } from '@/i18n';

const mockdata = [
  {
    title: 'global.team.heading-1' as TxKeyPath,
    description: 'global.team.subHeading-1' as TxKeyPath,
    img: Images.template9.teams.img1,
    alt: 'LAN',
  },
  {
    title: 'global.team.heading-2' as TxKeyPath,
    description: 'global.team.subHeading-2' as TxKeyPath,
    img: Images.template9.teams.img2,
    alt: 'teams',
  },
  {
    title: 'global.team.heading-3' as TxKeyPath,
    description: 'global.team.subHeading-3' as TxKeyPath,
    img: Images.template9.teams.img3,
    alt: 'failover',
  },
  {
    title: 'global.team.heading-4' as TxKeyPath,
    description: 'global.team.subHeading-4' as TxKeyPath,
    img: Images.template9.teams.img4,
    alt: 'embed devices',
  },
];
const GridItemsCached = () => {
  const items = useCallback(
    () =>
      mockdata.map((item) => (
        <Stack key={item.title}>
          <Box mx="auto">
            <Image
              src={item.img}
              alt={item.alt}
              className={classes.imgWrapper}
              height={150}
              width={150}
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBUUNBWUFBQUFmOC85aEFBQUNHVWxFUVZSNDJtT2dLa2p4M3M2WTRMbUxPZFo5TjJNY0dnYUpnZVJBYXJCcXp2TGZnazJDT0xWcHZ0dkFBakZ1ZTNpQXRnVkd1ZTROQTlvWUYrMjZOeHpFQm9vbEF1V2k0ajEyaFFMWlBIQTl5S0F0ZVRaVFRzQ210SnlBemEzNVFSdUt2UzFPTWVjSGJUVFBBMktRZkc3UVJ2VTBuMjBPUURYcDgwdUtFWm9iNHBZeGdlaTYyT1c2amZGTE80QTRBOGd1clkxWjdsUWZ1NndBS044QVZSZmZtclRJc1RGdXFXOWR6SEl6a0ZoVHdsSW1ocWs1czhBR1RNbWVIZGViUGs5MmN2YnNBaUN1bjUwLzNXdEs5aXpGOXVRRllndUxwNWhQekp6ajJKTTJYM2xTMWh3Qm9KNDBCaUFBOG9GNmdXQlp4UVRoNVJYOXlReFFzS3FxTDJKKzhaVEFsWlY5NFd0cmVrTG5GazROV1YzVkd3T1RYMUkyMGJFalpSNExBd3pzYm0xeDJ0M2FiQVhqMThYTjVqcmNYZWV3bzdrMVlITkRoL09ocnJyd0xZM3RYakQ1QTUwTjZudmJtaXdZWU9EY3BJcTRTMVBMQkdIOGE5T0wzYzVNckd5N09LVTg2ZkswMHJBekU2dTZya3d2OFlISm41cFFMWDUyVW1VY0F3dzhYcEFUZWFLM2doM0VmcllveS9QZTNQd1FFUHZxOUJKK29NRkNJUGI5dVhraFFEa1BFUHZtekFLdUp3dXpFUVo4VzV1ZzhHdERuRFlRNjN4ZW5aVEZnQU1BNVhMK2JJeFYvYjR1d2ZYTDZpUTNCaGo0dnplRUVTZ1JEc1NKL3cvNHNvTEUzcTlJWTRUSnc5ai85d1d3QWRVa0FYRW9Bejd3WTMwOEk0YllPcUFZUGdBMGxRbUVmMitNeGFudzk0WTRScGc2cXVWZ0FFWXo3NjFUOVN4QkFBQUFBRWxGVGtTdVFtQ0MnIC8+CiAgICA8L3N2Zz4KICA="
            />
          </Box>
          <Text className={classes.cardTitle}>{translate(item.title) as TxKeyPath}</Text>
          {item.description.split('\n').map((desc, index) => (
            <Box key={index}>
              <Stack className={classes.cardText} gap={0}>
              {translate(item.description) as TxKeyPath}
              </Stack>
            </Box>
          ))}
        </Stack>
      )),
    [mockdata]
  );
  return items();
};
export function GridCards() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing={64}>
      <GridItemsCached />
    </SimpleGrid>
  );
}
