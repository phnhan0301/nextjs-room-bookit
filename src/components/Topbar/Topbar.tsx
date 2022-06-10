import {
  PermPhoneMsg as PermPhoneMsgIcon,
  AlternateEmail as AlternateEmailIcon,
} from '@mui/icons-material';
import { Container, Link, Stack, Typography } from '@mui/material';
import React from 'react';
import { TopbarRoot } from './Topbar.styled';
import { LangSwitcher } from 'components/LangSwitcher';

const Topbar = () => {
  return (
    <TopbarRoot>
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
              href="tel:+8412345678"
              color="inherit"
              underline="none"
              display="inline-flex"
              alignItems="center"
            >
              <PermPhoneMsgIcon sx={{ fontSize: 16 }} />
              &nbsp;+84 12345678
            </Link>

            <Link
              display="inline-flex"
              alignItems="center"
              href="mailto:+contact.roombookit-nextjs@yopmail.com"
              color="inherit"
              underline="none"
            >
              <AlternateEmailIcon sx={{ fontSize: 16 }} />
              &nbsp;contact.roombookit-nextjs@yopmail.com
            </Link>

            <LangSwitcher />
          </Stack>
        </Stack>
      </Container>
    </TopbarRoot>
  );
};

export default Topbar;
