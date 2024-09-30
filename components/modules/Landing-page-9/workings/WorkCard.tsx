/* eslint-disable linebreak-style */
import { Anchor, Box, Card, Container, Flex, Stack, Text } from '@mantine/core';
import React from 'react';
import Image from 'next/image';
import { useMediaQuery } from '@mantine/hooks';
import classes from './WorkCard.module.css';
import { Images } from '@/public';
import { translate } from '@/i18n';

const WorkCard = () => {
  const breakPointMaw754 = useMediaQuery('(max-width:654px)');
  return (
    <Container className={classes.sectionWrapper} mb={32}>
      <Card className={classes.card}>
        <Flex
          gap={32}
          align="center"
          justify={breakPointMaw754 ? 'center' : 'space-between'}
          mb={32}
          wrap={breakPointMaw754 ? 'wrap-reverse' : 'nowrap'}
        >
          <Image
            priority
            height={460}
            width={460}
            alt="Illustration of a hand holding a phone whos screen displays the ZeroTier app icon and a checkmark below the text 'VPN + SDWAN'"
            src={Images.template9.working.img1}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBUUNBTUFBQUFvTFE5VEFBQUJibEJNVkVWTWFYR1FaYUcvaDRsMlc2aVhjWStYZFgvNHhYeXRkSWVvZG81bVhhQmFTb2R1VzZTUmRwZG1TN1UvTThtRGFxNTZXcVQzOTh6UW1IZFhRY1I3VzVIUmsydkNpMzNQazN0ZVI1RFVtM2lOWlgrN2lIQmtWcFZ2WExlU2RLaHVVYkoyVjdESGlvVG1vR0xwb21Pc2c0ZnRwMlJuU3JoeVY2aXllNG4vdFYyT2hzUlhXcXZwcG02dmZvcWljNXROTll6ZW5XMlVmSU5iVUpiNXJtei9zVmkzZ25KK1g0Vm9YcGFtaDdLNWc0R2VkNXBoZFArQVlYNWFRcXBsV1l0NVphQlRsTWRxWGJOK2FLcHlWTFJlVVpDQWFhMTRYY0tWYjQxcFlaS0RaNWFKYUxXaWZZMW5Tb0JyYlkrem1KeWJmSFo4VlhycHBGcFJQRGJEcHJPVWhLeTdvYnlaY2FuWW1taXdnSSt6Z0piRmpKQmZVblpWVEYzRWw0TERrb1pNUkdsd1YwaHZYR0had3MwaVJIaHJYTXVlY2FKdVNqQVpPR0VvVDRsZWI2OTNjNGlwZTNpYmFFTnNablU0SmFwQk5qNDBLQ0tYaDV4MGRiQ1RoTVdGWGtWc2VjZTFlMHcwS281QktyOTdaTGpKTGlmREFBQUFSWFJTVGxNQWNpTDlZUWdMQWhVYy92citqVExLUWc4cmxQNlBuTzM4L1B2Ny92NytOZmRnUG16dGp2eFZwN0hlU2Y3SDd2amxsZEpjU0xiOWFmNzc1ZjNIWVB6OSsvdTF3djdaRWNyU0FBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBNmtsRVFWUjRuRDJQMVZJRFFRQUU1M1QzSk81S2NIZlhBS2s5aVN2dTdtNmZUNlVTbUxmcHAyNEE4SGpnVkFBUXRPY2FHdmI1SEk2T0ZpR1FweTdVOFQ3RFNMbGJSSnJYM3RlTzFiQ1FkVW5OVDhWVncvcXVudTduL1Z1Y2t3QThsOG1HZno0cUp3ZVdmNndmQk1xbXh1eW5hdVhodkRDM08wb0J0OENTamRmbnI2dWJRblJ4THdod2JEMWViOVJLTDllUDVZV2pFQS94TXA3WHpiZlA0cDFhWHJaREZIVEoxQm1yMzFvMXc3U2prd29nN3BqYVJpS3AzNThWUzhFQkNvTE9ubHhPU0tSamtjZ0U3eVZOZDBVTXpLN0VEa2UydTlzMUJON0JtZWxBYjlkL01KRmsrYS85RjFWOEprRFUzemdPQUFBQUFFbEZUa1N1UW1DQycgLz4KICAgIDwvc3ZnPgogIA=="
          />
          <Box p="16px">
            <Text className={classes.cardText} mb={24}>
            {translate('global.WorkCard.heading-1')}
            </Text>
            <Box w={breakPointMaw754 ? 300 : '100%'} mb={24}>
              <Text className={classes.description}>
              {translate('global.WorkCard.subHeading-1')}
              </Text>
            </Box>
            <Flex justify={breakPointMaw754 ? 'center' : 'space-between'}>
              <Anchor
                component="button"
                type="button"
                className={classes.learnMoreButton}
                underline="never"
              >
              {translate('global.hero.button-2')} &#8250;
              </Anchor>
            </Flex>
          </Box>
        </Flex>

        <Flex
          align="center"
          gap={32}
          justify={breakPointMaw754 ? 'center' : 'space-between'}
          mb={32}
          wrap={breakPointMaw754 ? 'wrap' : 'nowrap'}
        >
          <Box p="16px">
            <Flex direction="column" align="flex-start" justify="flex-start">
              <Text className={classes.cardText}>{translate('global.WorkCard.heading-2')}</Text>

              <Box>
                <Stack gap={0} mb={24}>
                  <Text className={classes.description}>
                  {translate('global.WorkCard.subHeading-2-1')}
                  </Text>
                  <Text className={classes.description}>
                  {translate('global.WorkCard.subHeading-2-2')}
                  </Text>
                  <Text className={classes.description}>
                  {translate('global.WorkCard.subHeading-2-3')}
                  </Text>
                </Stack>
                <Flex justify={breakPointMaw754 ? 'center' : 'flex-start'}>
                  <Anchor
                    component="button"
                    type="button"
                    className={classes.learnMoreButton}
                    underline="never"
                  >
                    {translate('global.hero.button-1')}
                  </Anchor>
                </Flex>
              </Box>
            </Flex>
          </Box>

          <Image
            priority
            height={460}
            width={460}
            alt="Illustration of a hand holding a phone whos screen displays the ZeroTier app icon and a checkmark below the text 'VPN + SDWAN'"
            src={Images.template9.working.img2}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBUUNBTUFBQUFvTFE5VEFBQUJibEJNVkVWTWFYR1FaYUcvaDRsMlc2aVhjWStYZFgvNHhYeXRkSWVvZG81bVhhQmFTb2R1VzZTUmRwZG1TN1UvTThtRGFxNTZXcVQzOTh6UW1IZFhRY1I3VzVIUmsydkNpMzNQazN0ZVI1RFVtM2lOWlgrN2lIQmtWcFZ2WExlU2RLaHVVYkoyVjdESGlvVG1vR0xwb21Pc2c0ZnRwMlJuU3JoeVY2aXllNG4vdFYyT2hzUlhXcXZwcG02dmZvcWljNXROTll6ZW5XMlVmSU5iVUpiNXJtei9zVmkzZ25KK1g0Vm9YcGFtaDdLNWc0R2VkNXBoZFArQVlYNWFRcXBsV1l0NVphQlRsTWRxWGJOK2FLcHlWTFJlVVpDQWFhMTRYY0tWYjQxcFlaS0RaNWFKYUxXaWZZMW5Tb0JyYlkrem1KeWJmSFo4VlhycHBGcFJQRGJEcHJPVWhLeTdvYnlaY2FuWW1taXdnSSt6Z0piRmpKQmZVblpWVEYzRWw0TERrb1pNUkdsd1YwaHZYR0had3MwaVJIaHJYTXVlY2FKdVNqQVpPR0VvVDRsZWI2OTNjNGlwZTNpYmFFTnNablU0SmFwQk5qNDBLQ0tYaDV4MGRiQ1RoTVdGWGtWc2VjZTFlMHcwS281QktyOTdaTGpKTGlmREFBQUFSWFJTVGxNQWNpTDlZUWdMQWhVYy92citqVExLUWc4cmxQNlBuTzM4L1B2Ny92NytOZmRnUG16dGp2eFZwN0hlU2Y3SDd2amxsZEpjU0xiOWFmNzc1ZjNIWVB6OSsvdTF3djdaRWNyU0FBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBNmtsRVFWUjRuRDJQMVZJRFFRQUU1M1QzSk81S2NIZlhBS2s5aVN2dTdtNmZUNlVTbUxmcHAyNEE4SGpnVkFBUXRPY2FHdmI1SEk2T0ZpR1FweTdVOFQ3RFNMbGJSSnJYM3RlTzFiQ1FkVW5OVDhWVncvcXVudTduL1Z1Y2t3QThsOG1HZno0cUp3ZVdmNndmQk1xbXh1eW5hdVhodkRDM08wb0J0OENTamRmbnI2dWJRblJ4THdod2JEMWViOVJLTDllUDVZV2pFQS94TXA3WHpiZlA0cDFhWHJaREZIVEoxQm1yMzFvMXc3U2prd29nN3BqYVJpS3AzNThWUzhFQkNvTE9ubHhPU0tSamtjZ0U3eVZOZDBVTXpLN0VEa2UydTlzMUJON0JtZWxBYjlkL01KRmsrYS85RjFWOEprRFUzemdPQUFBQUFFbEZUa1N1UW1DQycgLz4KICAgIDwvc3ZnPgogIA=="
          />
        </Flex>
      </Card>
    </Container>
  );
};

export default WorkCard;
