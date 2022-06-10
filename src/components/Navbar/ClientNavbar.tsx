import {
  NotesTwoTone,
  CalendarMonth as CalendarMonthIcon,
} from '@mui/icons-material';
import {
  AppBar,
  Button,
  Container,
  IconButton,
  Link as MuiLink,
  Stack,
  Toolbar,
} from '@mui/material';
import { Logo } from 'components/Logo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormattedMessage } from 'react-intl';
import { ClientAppBar, NavLink } from './Navbar.styled';

const ClientNavbar_Nav = [
  {
    path: '/rooms',
    title: <FormattedMessage id="nav.rooms" defaultMessage="Rooms" />,
  },
  {
    path: '/services',
    title: <FormattedMessage id="nav.services" defaultMessage="Services" />,
  },
  {
    path: '/blog',
    title: <FormattedMessage id="nav.blog" defaultMessage="Blog" />,
  },
  {
    path: '/contact',
    title: <FormattedMessage id="nav.contact" defaultMessage="Contact" />,
  },
];

const ClientNavbar = () => {
  const { pathname } = useRouter();

  return (
    <>
      <ClientAppBar component="nav" position="sticky">
        <Container
          sx={{
            padding: {
              xs: 0,
              md: 0,
            },
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0.5, display: { xs: 'flex', md: 'none' } }}
            >
              <NotesTwoTone fontSize="large" />
            </IconButton>

            <Link href="/" passHref>
              <MuiLink underline="none" color="inherit">
                <Logo />
              </MuiLink>
            </Link>

            <Stack
              id="navigation"
              direction="row"
              alignItems="center"
              marginLeft="auto"
              marginRight="auto"
              spacing={6}
              display={{
                xs: 'none',
                md: 'inline-flex',
              }}
            >
              {ClientNavbar_Nav.map((nav) => (
                <Link key={nav.path} href={nav.path} passHref>
                  <NavLink activated={+pathname.startsWith(nav.path)}>
                    {nav.title}
                  </NavLink>
                </Link>
              ))}
            </Stack>

            <Stack
              id="actions"
              direction="row"
              alignItems="center"
              spacing={3}
              display={{ xs: 'none', md: 'flex' }}
            >
              <Link href="/login" passHref>
                <NavLink>
                  <FormattedMessage
                    id="nav.logo_register"
                    defaultMessage="Login / Register"
                  />
                </NavLink>
              </Link>

              <Link href="/search" passHref>
                <Button variant="contained">
                  <CalendarMonthIcon />
                  &nbsp;
                  <FormattedMessage
                    id="nav.booking_new"
                    defaultMessage="Booking Now"
                  />
                </Button>
              </Link>
            </Stack>
          </Toolbar>
        </Container>
      </ClientAppBar>
    </>
  );
};

export default ClientNavbar;
