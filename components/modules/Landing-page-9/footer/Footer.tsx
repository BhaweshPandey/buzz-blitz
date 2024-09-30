/* eslint-disable linebreak-style */
import {
  Box,
  Container,
  Flex,
  Group,
  SimpleGrid,
  Stack,
  Text,
  useMantineColorScheme,
} from '@mantine/core';
import React from 'react';
import Image from 'next/image';
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandMastodon,
  IconBrandTwitter,
  IconBrandYoutube,
} from '@tabler/icons-react';
import classes from './Footer.module.css';
import { TxKeyPath, translate } from '@/i18n';

const footerData = [
  {
    id: 1,
    title: 'global.footer.heading-1' as TxKeyPath,
    items: ['global.footer.try' as TxKeyPath],
  },
  {
    id: 2,
    title: 'global.footer.heading-2' as TxKeyPath,
    items: ['global.footer.try' as TxKeyPath],
  },
  {
    id: 3,
    title: 'global.footer.heading-3' as TxKeyPath,
    items: ['global.footer.try' as TxKeyPath],
  },
];

interface FooterCtaProps {
  data: Array<Record<string, any>>;
}
const FooterCta: React.FC<FooterCtaProps> = ({ data }) => (
    <SimpleGrid
      className={classes.footerCtaText}
      aria-label="footer-cta-grid"
      spacing={64}
      verticalSpacing={{ base: 80, sm: 64, md: 64, lg: 64, xl: 64 }}
      cols={{ base: 1, md: 1, sm: 3, lg: 3, xl: 3 }}
      mb={32}
    >
      {data.map((item) => (
        <Stack gap={8} key={item.id}>
          <Box className={classes.footerCtaTitle}>{translate(item.title) as TxKeyPath}</Box>
          {item.items.map((i: string) => (
            <p key={i} className={classes.footerSubText}>
              {translate(item.items) as TxKeyPath}
            </p>
          ))}
        </Stack>
      ))}
    </SimpleGrid>
  );
const footerIcons = [
  {
    id: 1,

    text: 'GitHub',
    icon: <IconBrandGithub />,
  },
  {
    id: 2,

    text: 'LinkedIn',
    icon: <IconBrandLinkedin />,
  },
  {
    id: 3,

    text: 'YouTube',
    icon: <IconBrandYoutube />,
  },
  {
    id: 4,

    text: 'Facebook',
    icon: <IconBrandFacebook />,
  },
  {
    id: 5,

    text: 'Twitter',
    icon: <IconBrandTwitter />,
  },
  {
    id: 6,
    text: 'Mastodon',
    icon: <IconBrandMastodon />,
  },
];
interface FooterIcons {
  id: number;
  text: string;
  icon: React.JSX.Element;
}
interface FooterIconsProps {
  data: FooterIcons[];
}
const FooterIcons: React.FC<FooterIconsProps> = ({ data }) => (
  <Flex align="flex-start" gap={16}>
    {data.map((icon) => (
      <a href="https://github.com/Highpolar-Softwares" className={classes.footerIcon} key={icon.id}>
        <span className={classes.footerIconText}>{icon.text}</span>
        {icon.icon}
      </a>
    ))}
  </Flex>
);
const Footer: React.FC = () => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Container className={classes.footer} aria-label="footer">
      <Box className={classes.footerInner}>
        <Box className={classes.footerText}>
          <Stack align="flex-start" gap={0}>
            <a aria-current="page" className={classes.logo} href="/" aria-label="footer-logo">
            <Image
              src="https://m.media-amazon.com/images/I/71B+OJQetML._SX522_.jpg"
              alt="Logo"
              className={classes.Logo}
              height={0}
              width={0}
              priority
            />
            </a>
            <Text className={classes.text}>{translate('global.footer.header')}</Text>
          </Stack>
          <FooterCta data={footerData} />
        </Box>
      </Box>

      <Box className={classes.footerWrapper}>
        <FooterIcons data={footerIcons} />
      </Box>
      <Flex mt={32} className={classes.copyrights} justify="space-between" wrap="wrap">
        <p aria-label="copyrights">{translate('global.footer.rights')}</p>
        <Group className={classes.footerAnchorLinks}>
          <a aria-label="terms" href="/terms">
          {translate('global.footer.terms')}
          </a>
          <a aria-label="privacy" href="/privacy">
          {translate('global.footer.policy')}
          </a>
        </Group>
      </Flex>
    </Container>
  );
};

export default Footer;
