import {
  PermPhoneMsg as PermPhoneMsgIcon,
  AlternateEmail as AlternateEmailIcon,
} from '@mui/icons-material';
import { Container, Link, Stack, Typography } from '@mui/material';
import React from 'react';
import { TopBarRoot } from './TopBar.styled';
import { LangSwitcher } from 'components/LangSwitcher';

const TopBar = () => {
  return (
    <TopBarRoot>
      <Container>
        <Stack direction="row" alignItems="center" color="GrayText">
          <Typography fontSize={12} fontWeight={600}>
            Welcome to RoomBookIT.NextJs
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            marginLeft="auto"
            spacing={3}
          >
            <Link
              color="inherit"
              underline="none"
              display="inline-flex"
              alignItems="center"
              href="tel:+8412345678"
              target="_blank"
              sx={{
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              <PermPhoneMsgIcon sx={{ fontSize: 16 }} />
              &nbsp;+84 12345678
            </Link>

            <Link
              display="inline-flex"
              alignItems="center"
              color="inherit"
              underline="none"
              href="mailto:+contact.roombookit-nextjs@yopmail.com"
              target="_blank"
              sx={{
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              <AlternateEmailIcon sx={{ fontSize: 16 }} />
              &nbsp;contact.roombookit-nextjs@yopmail.com
            </Link>

            <LangSwitcher />
          </Stack>
        </Stack>
      </Container>
    </TopBarRoot>
  );
};

export default TopBar;
