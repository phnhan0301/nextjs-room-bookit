import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Stack,
} from '@mui/material';
import { Logo } from 'components';
import Image from 'next/image';
import Link from 'next/link';
import { WidgetTitle } from 'assets/styles';
import {
  FooterRoot,
  FooterContent,
  FooterBottom,
  FooterLink,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterRoot>
      <FooterContent>
        <Container>
          <Grid spacing={4} container>
            <Grid md={4} item>
              <Box marginBottom={2}>
                <Logo size="large" />
              </Box>

              <Typography>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse,
                quod quae neque nihil voluptatibus consequuntur debitis
                voluptatem nobis recusandae numquam, aspernatur consectetur quis
                maxime. Doloremque sint autem ratione repudiandae blanditiis?
              </Typography>
            </Grid>

            <Grid md={8} spacing={4} container item>
              <Grid md={6} item>
                <WidgetTitle>Explore</WidgetTitle>

                <Stack direction="row" spacing={15}>
                  <Stack component="nav" alignItems="flex-start" spacing={1}>
                    <Link href="/about-us" passHref>
                      <FooterLink>- About Us</FooterLink>
                    </Link>

                    <Link href="/privacy-policy" passHref>
                      <FooterLink>- Privacy Policy</FooterLink>
                    </Link>

                    <Link href="/editorial-policy" passHref>
                      <FooterLink>- Editorial Policy</FooterLink>
                    </Link>

                    <Link href="/policy-terms" passHref>
                      <FooterLink>- Policy Terms</FooterLink>
                    </Link>

                    <Link href="/redressal" passHref>
                      <FooterLink>- Redressal</FooterLink>
                    </Link>

                    <Link href="/terms-of-use" passHref>
                      <FooterLink>- Terms of Use</FooterLink>
                    </Link>
                  </Stack>

                  <Stack component="nav" alignItems="flex-start" spacing={1}>
                    <Link href="/terms-and-conditions" passHref>
                      <FooterLink>- Terms and Conditions</FooterLink>
                    </Link>

                    <Link href="/return-policy-ip" passHref>
                      <FooterLink>- Return Policy IP</FooterLink>
                    </Link>

                    <Link href="/policy-terms" passHref>
                      <FooterLink>- Policy Terms</FooterLink>
                    </Link>

                    <Link href="/policy-grievance" passHref>
                      <FooterLink>- Policy Grievance</FooterLink>
                    </Link>
                  </Stack>
                </Stack>
              </Grid>

              <Grid md={6} item>
                <Box marginBottom={3}>
                  <WidgetTitle>Newsletter</WidgetTitle>

                  <TextField
                    type="email"
                    variant="standard"
                    placeholder="Enter your email..."
                    InputProps={{
                      endAdornment: (
                        <Image
                          src="/icons/send.svg"
                          height="22"
                          width="22"
                          alt="Send"
                        />
                      ),
                    }}
                    fullWidth
                  />
                </Box>

                <Box>
                  <WidgetTitle>Follow Us</WidgetTitle>

                  <Stack direction="row" spacing={2}>
                    <Link href="#" passHref>
                      <FooterLink>
                        <Image
                          src="/icons/facebook.svg"
                          height={40}
                          width={40}
                          alt="Facebook"
                        />
                      </FooterLink>
                    </Link>

                    <Link href="#" passHref>
                      <FooterLink>
                        <Image
                          src="/icons/instagram.svg"
                          height={40}
                          width={40}
                          alt="Facebook"
                        />
                      </FooterLink>
                    </Link>

                    <Link href="#" passHref>
                      <FooterLink>
                        <Image
                          src="/icons/twitter.svg"
                          height={40}
                          width={40}
                          alt="Facebook"
                        />
                      </FooterLink>
                    </Link>

                    <Link href="#" passHref>
                      <FooterLink>
                        <Image
                          src="/icons/pinterest.svg"
                          height={40}
                          width={40}
                          alt="Facebook"
                        />
                      </FooterLink>
                    </Link>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </FooterContent>

      <FooterBottom>
        <Container>
          <Stack direction="row">
            <Typography component="div" fontSize={14} fontStyle="italic">
              &copy; 2022 RoomBookIT.NextJs. Code with 🥰 by &nbsp;
              <Link href="https://nhanphan.net" target="_blank" passHref>
                <FooterLink color="primary">Nhan Phan</FooterLink>
              </Link>
            </Typography>
          </Stack>
        </Container>
      </FooterBottom>
    </FooterRoot>
  );
};

export default Footer;
