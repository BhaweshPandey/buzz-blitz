/* eslint-disable linebreak-style */
import { Anchor, Box, Flex, Stack, Text } from '@mantine/core';
import React from 'react';
import Image from 'next/image';
import { useMediaQuery } from '@mantine/hooks';
import classes from './BodyCard.module.css';
import { TxKeyPath, translate } from '@/i18n';

interface BodyCardProps {
    label?: string
    data: Record<string, any>
    // eslint-disable-next-line react/no-unused-prop-types
    usedAt?: string
}

const BodyCard = ({ label, data }: BodyCardProps) => {
    const breakPointMaw754 = useMediaQuery('(max-width:654px)');
    return (

        <Flex align="center" justify="center" wrap={breakPointMaw754 ? 'wrap' : 'nowrap'} aria-label="body-card" direction={label ? 'row-reverse' : 'row'} key={data.id} className={classes.container}>
            <Box className={classes.innerBodyCard}>
                <Stack gap={16}>
                    <Text className={classes.cardTitle}>
              {translate(data.title) as TxKeyPath}
                    </Text>
                    <Box className={classes.innerBodyText}>
              {translate(data.description) as TxKeyPath}
                    </Box>
                </Stack>
                <Box>
                    <Anchor component="button" className={classes.contactSalesButton}>
              {translate(data.buttonLabel) as TxKeyPath}
                    </Anchor>
                </Box>
            </Box>
            <Image priority src={data.img} alt="body-card-enterprise-logo" width={breakPointMaw754 ? 190 : 350} height={breakPointMaw754 ? 190 : 350} placeholder="blur" blurDataURL="data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBUUNBTUFBQUFvTFE5VEFBQUJibEJNVkVWTWFYR1FaYUcvaDRsMlc2aVhjWStYZFgvNHhYeXRkSWVvZG81bVhhQmFTb2R1VzZTUmRwZG1TN1UvTThtRGFxNTZXcVQzOTh6UW1IZFhRY1I3VzVIUmsydkNpMzNQazN0ZVI1RFVtM2lOWlgrN2lIQmtWcFZ2WExlU2RLaHVVYkoyVjdESGlvVG1vR0xwb21Pc2c0ZnRwMlJuU3JoeVY2aXllNG4vdFYyT2hzUlhXcXZwcG02dmZvcWljNXROTll6ZW5XMlVmSU5iVUpiNXJtei9zVmkzZ25KK1g0Vm9YcGFtaDdLNWc0R2VkNXBoZFArQVlYNWFRcXBsV1l0NVphQlRsTWRxWGJOK2FLcHlWTFJlVVpDQWFhMTRYY0tWYjQxcFlaS0RaNWFKYUxXaWZZMW5Tb0JyYlkrem1KeWJmSFo4VlhycHBGcFJQRGJEcHJPVWhLeTdvYnlaY2FuWW1taXdnSSt6Z0piRmpKQmZVblpWVEYzRWw0TERrb1pNUkdsd1YwaHZYR0had3MwaVJIaHJYTXVlY2FKdVNqQVpPR0VvVDRsZWI2OTNjNGlwZTNpYmFFTnNablU0SmFwQk5qNDBLQ0tYaDV4MGRiQ1RoTVdGWGtWc2VjZTFlMHcwS281QktyOTdaTGpKTGlmREFBQUFSWFJTVGxNQWNpTDlZUWdMQWhVYy92citqVExLUWc4cmxQNlBuTzM4L1B2Ny92NytOZmRnUG16dGp2eFZwN0hlU2Y3SDd2amxsZEpjU0xiOWFmNzc1ZjNIWVB6OSsvdTF3djdaRWNyU0FBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBNmtsRVFWUjRuRDJQMVZJRFFRQUU1M1QzSk81S2NIZlhBS2s5aVN2dTdtNmZUNlVTbUxmcHAyNEE4SGpnVkFBUXRPY2FHdmI1SEk2T0ZpR1FweTdVOFQ3RFNMbGJSSnJYM3RlTzFiQ1FkVW5OVDhWVncvcXVudTduL1Z1Y2t3QThsOG1HZno0cUp3ZVdmNndmQk1xbXh1eW5hdVhodkRDM08wb0J0OENTamRmbnI2dWJRblJ4THdod2JEMWViOVJLTDllUDVZV2pFQS94TXA3WHpiZlA0cDFhWHJaREZIVEoxQm1yMzFvMXc3U2prd29nN3BqYVJpS3AzNThWUzhFQkNvTE9ubHhPU0tSamtjZ0U3eVZOZDBVTXpLN0VEa2UydTlzMUJON0JtZWxBYjlkL01KRmsrYS85RjFWOEprRFUzemdPQUFBQUFFbEZUa1N1UW1DQycgLz4KICAgIDwvc3ZnPgogIA==" />
        </Flex>

    );
};

export default BodyCard;
