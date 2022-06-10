import { Translate as TranslateIcon } from '@mui/icons-material';
import { Menu, Link, Typography, Box, Divider, Grid } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { SetStateAction, useState } from 'react';
import { FormattedMessage } from 'react-intl';

export default function LangSwitcher() {
  const { locales, locale, defaultLocale, pathname, asPath, query, push } =
    useRouter();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: {
    preventDefault: () => void;
    currentTarget: SetStateAction<HTMLElement | null>;
  }) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (locale?: string) => {
    locale && push({ pathname, query }, asPath, { locale });
    setAnchorEl(null);
  };

  return (
    <>
      <Link
        component="button"
        display="inline-flex"
        alignItems="center"
        color="inherit"
        underline="none"
        aria-haspopup="true"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          '&:hover': {
            color: 'primary.main',
          },
        }}
      >
        <TranslateIcon sx={{ fontSize: 16 }} />
        <Typography margin={0} marginLeft={0.5} padding={0} fontSize={12}>
          <FormattedMessage
            id={`system.lang_title_${locale || defaultLocale}`}
          />
        </Typography>
      </Link>

      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        anchorOrigin={{
          vertical: 105,
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
        onClose={() => handleClose()}
      >
        <Box paddingX={3} paddingY={1} width={320}>
          <Typography textAlign="right" fontWeight={500}>
            <FormattedMessage
              id="langSwitcher.menu_title"
              defaultMessage="Languages"
            />
          </Typography>

          <Divider sx={{ my: 1 }} />

          <Grid spacing={1.5} container>
            {(locales || []).map((option) => (
              <Grid xs={6} key={option} item>
                <Link
                  component="button"
                  color="inherit"
                  underline="none"
                  display="inline-flex"
                  alignItems="center"
                  onClick={() => handleClose(option)}
                  sx={{
                    cursor: 'pointer',
                  }}
                >
                  <Image
                    src={`/flags/${option}.svg`}
                    width={28}
                    height={20}
                    alt={`system.lang_title_${option}`}
                    style={{ minWidth: '28px' }}
                  />
                  <Box marginLeft={1}>
                    <FormattedMessage id={`system.lang_title_${option}`} />
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Menu>
    </>
  );
}
