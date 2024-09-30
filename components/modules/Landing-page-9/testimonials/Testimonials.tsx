/* eslint-disable linebreak-style */
import { Box, Card, Container, Stack, Text } from '@mantine/core';
import React, { useCallback } from 'react';
import Image from 'next/image';
import { useViewportSize } from '@mantine/hooks';
import classes from './Testimonials.module.css';
import { Images } from '@/public';
import { TxKeyPath, translate } from '@/i18n';

const Testimonials = () => {
  useViewportSize();
  const testimonialData: Array<Record<string, any>> = [
    {
      id: 1,
      text: 'global.testimonial.heading-1' as TxKeyPath,
      caption: 'global.testimonial.subHeading-1' as TxKeyPath,
    },
    {
      id: 2,
      text: 'global.testimonial.heading-2' as TxKeyPath,
      caption: 'global.testimonial.subHeading-2' as TxKeyPath,
    },
    {
      id: 3,
      text: 'global.testimonial.heading-3' as TxKeyPath,
      caption: 'global.testimonial.subHeading-3' as TxKeyPath,
    },
    {
      id: 4,
      text: 'global.testimonial.heading-4' as TxKeyPath,
      caption: 'global.testimonial.subHeading-4' as TxKeyPath,
    },
  ];
  const Cards: React.FC = () => {
    const renderTestimonialCards = useCallback(
      () =>
        testimonialData.map((testimonial: Record<string, any>) => (
          <Card className={classes.card} mb="40px" key={testimonial.id}>
            <Box className={classes.cardInner}>
              <Image
                src={Images.template9.testimonial.avatarSrc}
                height={52}
                width={52}
                alt="avatar"
              />
              <blockquote className={classes.blockQoute}>
                <p className={classes.cardText}>{translate(testimonial.text) as TxKeyPath}</p>
                <figcaption>
                  <cite className={classes.citation}>
                    {translate(testimonial.caption) as TxKeyPath}
                  </cite>
                </figcaption>
              </blockquote>
            </Box>
          </Card>
        )),
      [testimonialData]
    );
    ('');
    return renderTestimonialCards();
  };
  return (
    <Container className={classes.container} pl={16} pr={16} pb={16} mb={32}>
      <Text className={classes.title} ta="center">
        {translate('global.testimonial.title')}
      </Text>
      <Stack>
        <Cards />
      </Stack>
    </Container>
  );
};

export default Testimonials;
