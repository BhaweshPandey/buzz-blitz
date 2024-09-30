/* eslint-disable linebreak-style */
import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import Head from 'next/head';
import { ModalsProvider } from '@mantine/modals';
import { NavigationProgress } from '@mantine/nprogress';

import '@mantine/notifications/styles.css';
import '@mantine/nprogress/styles.css';
import '@mantine/dropzone/styles.css';

import '@mantine/carousel/styles.css';

import '../public/global.css';

import { theme } from '../theme';

//setting up store



import {I18nProvider} from '../context/i18nContext';
export default function App({ Component, pageProps }: AppProps) {
  


  return (
    <MantineProvider theme={theme}>
      <Head>
      <title>Buzz Blitz</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      <meta
        name="description"
        content="We're the well known mobile app development company in kuwait who have experience and skilled team members who delivers the projects on time."
      />
      <link rel="canonical" href="https://landing.highpolar.in/" />
      <link rel="shortcut icon" href="/favicon.svg" />
      <link
        rel="preload"
        as="image"
        href="../public/image/temp9_assets/banner_hero.webp"
      />
      <link rel="preload" as="stylesheet" href="/public/global.css" />
      <link
        rel="preload"
        as="font"
        type="font/woff2"
        href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..700;1,300..700&display=swap"
      />
      </Head>
      <Notifications />
      <NavigationProgress aria-label="navigation" />
      <ModalsProvider>
       
      <I18nProvider>
              <Component {...pageProps} />
              </I18nProvider>
           
       
      </ModalsProvider>
    </MantineProvider>
  );
}
