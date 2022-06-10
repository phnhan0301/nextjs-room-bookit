import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Stack,
  IconButton,
} from '@mui/material';
import { LangSwitcher, Logo } from 'components';
import Image from 'next/image';
import Link from 'next/link';
import { WidgetTitle } from 'assets/styles';
import {
  FooterRoot,
  FooterContent,
  FooterBottom,
  FooterLink,
} from './Footer.styled';
import { FormattedMessage, useIntl } from 'react-intl';

const FooterExplore_Nav = [
  [
    {
      path: '/about-us',
      title: <FormattedMessage id="nav.about_us" defaultMessage="About Us" />,
    },
    {
      path: '/privacy-policy',
      title: (
        <FormattedMessage
          id="nav.privacy_policy"
          defaultMessage="Privacy Policy"
        />
      ),
    },
    {
      path: '/terms-and-conditions',
      title: (
        <FormattedMessage
          id="nav.terms_and_conditions"
          defaultMessage="Terms and Conditions"
        />
      ),
    },
    {
      path: '/terms-of-use',
      title: (
        <FormattedMessage id="nav.terms_of_use" defaultMessage="Terms of Use" />
      ),
    },
  ],
  [
    {
      path: '/return-policy-ip',
      title: (
        <FormattedMessage
          id="nav.return_policy_ip"
          defaultMessage="Return Policy IP"
        />
      ),
    },
    {
      path: '/policy-terms',
      title: (
        <FormattedMessage id="nav.policy_terms" defaultMessage="Policy Terms" />
      ),
    },
    {
      path: '/policy-grievance',
      title: (
        <FormattedMessage
          id="nav.policy_grievance"
          defaultMessage="Policy Grievance"
        />
      ),
    },
  ],
];

const Socials = [
  {
    type: 'facebook',
    link: 'https://www.facebook.com/phnhan94/',
  },
  {
    type: 'instagram',
    link: '',
  },
  {
    type: 'twitter',
    link: '',
  },
  {
    type: 'pinterest',
    link: '',
  },
];

const Footer = () => {
  const { formatMessage } = useIntl();
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
              <Grid md={7} item>
                <WidgetTitle>
                  <FormattedMessage
                    id="footer.explore"
                    defaultMessage="Explore"
                  />
                </WidgetTitle>

                <Stack direction="row" spacing={15}>
                  {FooterExplore_Nav.map((navGroup, idx) => (
                    <Stack
                      key={`col_${idx}`}
                      component="nav"
                      alignItems="flex-start"
                      spacing={1}
                    >
                      {navGroup.map((nav) => (
                        <Link key={nav.path} href={nav.path} passHref>
                          <FooterLink>-&nbsp;{nav.title}</FooterLink>
                        </Link>
                      ))}
                    </Stack>
                  ))}
                </Stack>
              </Grid>

              <Grid md={5} item>
                <Box marginBottom={3}>
                  <WidgetTitle>
                    <FormattedMessage
                      id="footer.newsletter"
                      defaultMessage="Newsletter"
                    />
                  </WidgetTitle>

                  <Box component="form">
                    <TextField
                      type="email"
                      variant="standard"
                      placeholder={formatMessage({
                        id: 'textField.newsletter_placeholder',
                        defaultMessage: 'Enter your email...',
                      })}
                      InputProps={{
                        endAdornment: (
                          <IconButton type="submit">
                            <Image
                              src="/icons/send.svg"
                              height="22"
                              width="22"
                              alt="Send"
                            />
                          </IconButton>
                        ),
                      }}
                      fullWidth
                    />
                  </Box>
                </Box>

                <Box>
                  <WidgetTitle>
                    <FormattedMessage
                      id="footer.follow_us"
                      defaultMessage="Follow Us"
                    />
                  </WidgetTitle>

                  <Stack direction="row" flexWrap="wrap" spacing={2}>
                    {Socials.map((item) => (
                      <Link
                        key={item.type}
                        href={item.link || '#'}
                        target="_blank"
                        passHref
                      >
                        <FooterLink>
                          <Image
                            src={`/icons/${item.type}.svg`}
                            height={40}
                            width={40}
                            alt={item.type}
                          />
                        </FooterLink>
                      </Link>
                    ))}
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </FooterContent>

      <FooterBottom>
        <Container>
          <Stack direction="row" justifyContent="space-between">
            <Typography component="div" fontSize={14} fontStyle="italic">
              &copy; 2022 RoomBookIT.NextJs. Code with 🥰 by &nbsp;
              <Link href="https://nhanphan.net" target="_blank" passHref>
                <FooterLink color="primary">Nhan Phan</FooterLink>
              </Link>
            </Typography>

            <LangSwitcher />
          </Stack>
        </Container>
      </FooterBottom>
    </FooterRoot>
  );
};

export default Footer;
