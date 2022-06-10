import { Translate as TranslateIcon } from '@mui/icons-material';
import { Menu, Link, Typography, Box, Divider, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { SetStateAction, useState } from 'react';

export default function LangSwitcher() {
  const { locales, locale, defaultLocale, asPath, push } = useRouter();

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
    locale && push(asPath, asPath, { locale });
    setAnchorEl(null);
  };

  return (
    <>
      <Link
        href="#"
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
        <Typography
          margin={0}
          marginLeft={0.5}
          padding={0}
          fontSize={12}
          paragraph
        >
          lang_title_{locale || defaultLocale}
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
        <Box paddingX={2} width={270}>
          <Typography textAlign="right" fontWeight={500}>
            Languages
          </Typography>

          <Divider sx={{ my: 1 }} />

          <Grid spacing={2} textAlign="right" container>
            {(locales || []).map((option) => (
              <Grid xs={6} key={option} item>
                <Link
                  href="#"
                  color="inherit"
                  underline="none"
                  onClick={() => handleClose(option)}
                >
                  lang_title_{option}
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Menu>
    </>
  );
}
