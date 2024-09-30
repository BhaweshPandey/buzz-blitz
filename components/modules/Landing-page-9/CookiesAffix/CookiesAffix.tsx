/* eslint-disable linebreak-style */
import { Affix, Container, Stack, Flex, Anchor, Group, Text, useMantineTheme } from '@mantine/core';
import React, { SetStateAction, useEffect, useState } from 'react';
import { translate } from '@/i18n';

interface CookiesAffix {
  callback?: (value: SetStateAction<boolean>) => void;
}
const CookiesAffix = () => {
  const [cookies, setCookies] = useState(false);
  const theme = useMantineTheme();
  useEffect(() => {
    setCookies(true);
  }, []);

  const Cookies = () => (
    <Affix w="100%" bg="#fff">
      <Container mt={32} mb={32}>
        <Stack gap={16}>
          <Text c={theme.black} fw={500}>
          {translate('global.Cookie.heading')}
          </Text>
          <Flex justify="space-between">
            <Group>
              <Anchor
                onClick={() => {
                  setCookies(false);
                }}
                href="#"
                style={{
                  backgroundColor: '#262626',
                  border: '2px solid #262626',
                  color: '#ffff',
                  textDecoration: 'none',
                  borderRadius: '24px',
                  display: 'inline-flex',
                  fontSize: '18px',
                  fontWeight: 600,
                  lineHeight: '20px',
                  padding: '8px 16px',
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                }}
              >
                {translate('global.Cookie.button-1')}
              </Anchor>
              <Group gap={16}>
                <Anchor
                  onClick={() => {
                    setCookies(false);
                  }}
                  href="#"
                  style={{
                    backgroundColor: '#CCCCCC',
                    border: '2px solid #CCCCCC',
                    color: '#1A1A1A',
                    textDecoration: 'none',
                    borderRadius: '24px',
                    display: 'inline-flex',
                    fontSize: '18px',
                    fontWeight: 600,
                    lineHeight: '15px',
                    padding: '8px 16px',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {translate('global.Cookie.button-2')}
                </Anchor>
                <Anchor
                  onClick={() => {
                    setCookies(false);
                  }}
                  href="#"
                  style={{
                    backgroundColor: '#ffb441',
                    border: '2px solid #ffb441',
                    color: '#1A1A1A',
                    textDecoration: 'none',
                    borderRadius: '64px',
                    display: 'inline-flex',
                    fontSize: '20px',
                    fontWeight: 600,
                    lineHeight: '15px',
                    padding: '8px 16px',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {translate('global.Cookie.button-3')}
                </Anchor>
              </Group>
            </Group>
          </Flex>
        </Stack>
      </Container>
    </Affix>
  );
  return <div>{cookies && <Cookies />}</div>;
};
export default CookiesAffix;
