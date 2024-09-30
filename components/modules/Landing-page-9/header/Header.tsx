/* eslint-disable linebreak-style */
import {
  Anchor,
  Box,
  Flex,
  Group,
  Popover,
  useMantineTheme,
  Stack,
  useMantineColorScheme,
} from '@mantine/core';
import Image from 'next/image';
import { useState } from 'react';
import { IconCaretDown } from '@tabler/icons-react';
import { Rubik } from 'next/font/google';
import classes from './Header.module.css';
// eslint-disable-next-line import/no-cycle
import HeaderButtons, { popOverItems } from '../header-Buttons/HeaderButtons';
import { TxKeyPath, translate } from '@/i18n';
import { Images } from '@/public';

export const title = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  preload: true,
});

export const navItem = [
  {
    id: 1,
    item: 'global.header.heading-1' as TxKeyPath,
    link: '#',
  },
  {
    id: 2,
    item: 'global.header.heading-2' as TxKeyPath,
    link: '#',
  },
  {
    id: 3,
    item: 'global.header.heading-3' as TxKeyPath,
    link: '#',
  },
];

export const toolTipItem = [
  {
    id: 1,
    item: 'global.header.heading-4' as TxKeyPath,
    label: 'react.fc menu goes here',
  },
  // {
  //   id: 2,
  //   item: 'global.header.heading-5' as TxKeyPath,
  //   label: ' another features menu comes here',
  // },
];
const Header = () => {
  const [popOverToggled, setPopOverToggled] = useState<string | null>(null);
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  return (
    <>
      <Box
        className={`${classes.header}${title.className}`}
        aria-label="header"
        mt={16}
        ml="2rem"
        mr="2rem"
      >
        <Box className={classes.headerText} aria-label="header-text">
          <Flex
            w="100%"
            wrap="wrap"
            justify="space-between"
            align="center"
            aria-label="header-text-flex"
          >
            <Box>
              {' '}
              <Image
                src="https://m.media-amazon.com/images/I/71B+OJQetML._SX522_.jpg"
                alt="Logo"
                className={classes.Logo}
                height={0}
                width={0}
                priority
              />
            </Box>

            <Group gap={32} visibleFrom="lg" style={{ zIndex: 2 }} aria-label="nav-bar">
              {navItem.map((item) => (
                <Anchor key={item.id} href={item.link} aria-label="nav-links">
            {translate(item.item) as TxKeyPath}
                </Anchor>
              ))}
              {Object.entries(popOverItems).map(([cat, popOverItem]) => (
                <Popover
                  width={200}
                  position="bottom"
                  withArrow
                  onClose={() => setPopOverToggled('else')}
                  arrowSize={15}
                  radius="lg"
                  key={cat}
                  styles={{
                    dropdown: {
                      border: 'none',
                    },
                    arrow: {
                      border: 'none',
                    },
                  }}
                >
                  <Popover.Target>
                    <Anchor className={classes.drawerLinks} aria-label="nav-popover-link">
                      <Group
                        wrap="nowrap"
                        gap={2}
                        onClick={() => {
                          setPopOverToggled(cat);
                        }}
                      >
                          {translate('global.header.heading-4')}

                        <IconCaretDown
                          fill="#fff"
                          style={{
                            rotate: cat === popOverToggled ? '180deg' : '0deg',
                          }}
                        />
                      </Group>
                    </Anchor>
                  </Popover.Target>
                  <Popover.Dropdown bg={theme.colors.black[1]}>
                    <Stack gap={16}>
                      {popOverItem.map((item) => (
                        <Anchor
                          key={item.id}
                          className={classes.popOverText}
                          href={item.src}
                          p={8}
                          aria-label="popover-item-links"
                        >
            {translate(item.items) as TxKeyPath}
                        </Anchor>
                      ))}
                    </Stack>
                  </Popover.Dropdown>
                </Popover>
              ))}
            </Group>
            <HeaderButtons />
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Header;
