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
import { ClientAppBar, NavLink } from './Navbar.styled';

const ClientNavbar = () => {
  const { pathname } = useRouter();

  return (
    <ClientAppBar component="nav" position="sticky" color="inherit">
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
            <Link href="/rooms" passHref>
              <NavLink activated={+pathname.startsWith('/rooms')}>
                Rooms
              </NavLink>
            </Link>

            <Link href="/services" passHref>
              <NavLink activated={+pathname.startsWith('/services')}>
                Services
              </NavLink>
            </Link>

            <Link href="/blog" passHref>
              <NavLink activated={+pathname.startsWith('/blog')}>Blog</NavLink>
            </Link>

            <Link href="/contact" passHref>
              <NavLink activated={+pathname.startsWith('/contact')}>
                Contact Us
              </NavLink>
            </Link>
          </Stack>

          <Stack
            id="actions"
            direction="row"
            alignItems="center"
            spacing={3}
            display={{ xs: 'none', md: 'flex' }}
          >
            <Link href="/register" passHref>
              <NavLink>Register</NavLink>
            </Link>

            <Link href="/login" passHref>
              <Button variant="contained">
                <CalendarMonthIcon />
                &nbsp; Booking Now
              </Button>
            </Link>
          </Stack>
        </Toolbar>
      </Container>
    </ClientAppBar>
  );
};

export default ClientNavbar;
