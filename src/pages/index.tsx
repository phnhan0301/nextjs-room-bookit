import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { Image3dEffect, RoomCard, Slider } from 'components';
import type { InferGetServerSidePropsType } from 'next';
import {
  HeroFullSlider,
  RoomSuggestionBox,
  SearchForm,
} from 'assets/styles/Home.styled';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';

export const getServerSideProps = async () => {
  const [fetchRooms] = await Promise.all([
    (await fetch('http:localhost:3000/api/rooms?pageSize=5')).json(),
  ]);

  const { data: rooms = [] } = fetchRooms;

  return {
    props: {
      rooms,
    }, // will be passed to the page component as props
  };
};

const Home = ({
  rooms,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <HeroFullSlider component="section" id="hero-slider">
        <Slider />
      </HeroFullSlider>

      <Box id="search" component="section" borderRadius={1} marginBottom={10}>
        <Container maxWidth="lg">
          <SearchForm component="form">
            <Grid spacing={3} container>
              <Grid md={4} item>
                <TextField label="Check In/Out" size="small" fullWidth />
              </Grid>

              <Grid md={4} item>
                <TextField label="Guest" size="small" fullWidth />
              </Grid>

              <Grid md={4} display="flex" alignItems="stretch" item>
                <Button variant="contained" fullWidth>
                  Check Availability
                </Button>
              </Grid>
            </Grid>
          </SearchForm>
        </Container>
      </Box>

      <Box id="about" component="section" marginBottom={10}>
        <Container maxWidth="lg">
          <Grid spacing={2} container>
            <Grid md item>
              <Box marginBottom={3}>
                <Typography
                  component="h1"
                  variant="h4"
                  color="secondary"
                  fontWeight={700}
                  textTransform="uppercase"
                  gutterBottom
                >
                  Room BookIT.NextJs
                </Typography>

                <Typography component="h2" variant="h6" marginBottom={7}>
                  High quality accommodation services
                </Typography>

                <Typography lineHeight={1.75} paragraph color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit molestie consequat, vel
                  illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan.
                </Typography>
              </Box>

              <Link href="/about-us" passHref>
                <Button variant="outlined" size="large">
                  <FormattedMessage
                    id="home.about_more-detail"
                    defaultMessage="More Detail"
                    description="[Home/About] more detail button"
                  />
                </Button>
              </Link>
            </Grid>

            <Grid md item>
              <Image3dEffect
                frontImage="https://demo.zantetheme.com/wp-content/uploads/2018/07/about1.jpg"
                backImage="https://demo.zantetheme.com/wp-content/uploads/2018/07/about2.jpg"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {rooms.length > 0 && (
        <RoomSuggestionBox id="suggestion-rooms" component="section">
          <Container maxWidth="lg">
            <Box component="header" marginBottom={4}>
              <Typography
                component="h2"
                variant="h4"
                color="secondary"
                fontWeight={700}
                textTransform="uppercase"
                textAlign="center"
              >
                <FormattedMessage
                  id="home.rooms-suggestion-section-title"
                  defaultMessage="Our Favorite Rooms"
                  description="src/pages/index.tsx"
                />
              </Typography>
              <Typography variant="h6" textAlign="center">
                <FormattedMessage
                  id="home.rooms-suggestion-section-subtitle"
                  defaultMessage="Check out now our best rooms"
                  description="src/pages/index.tsx"
                  values={{}}
                />
              </Typography>
            </Box>

            <Grid spacing={3} marginBottom={3} container>
              <Grid md item>
                <RoomCard
                  {...rooms[0]}
                  images={rooms[0].images.map(
                    (item: { public_id: string; url: string }) => item.url,
                  )}
                />
              </Grid>

              {rooms.length > 1 && (
                <Grid spacing={3} md item container>
                  {[...rooms].slice(1).map((room) => (
                    <Grid key={room._id} md={6} item>
                      <RoomCard
                        {...room}
                        images={[room.images[0].url]}
                        description={null}
                      />
                    </Grid>
                  ))}
                </Grid>
              )}
            </Grid>

            <Box component="footer" display="flex" justifyContent="center">
              <Link href="/rooms" passHref>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 4,
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  }}
                >
                  <FormattedMessage
                    id="home.room-suggestion-section-view-all"
                    description="src/pages/index.tsx"
                    defaultMessage="View all Rooms"
                  />
                </Button>
              </Link>
            </Box>
          </Container>
        </RoomSuggestionBox>
      )}

      <Box paddingY={'3rem'}>
        <Container maxWidth="lg">
          <Box component="header" marginBottom={4}>
            <Typography
              component="h2"
              variant="h4"
              color="secondary"
              fontWeight={700}
              textTransform="uppercase"
              textAlign="center"
            >
              <FormattedMessage
                id="home.services-section-title"
                defaultMessage="Our Awesome Services"
                description="src/pages/index.tsx"
              />
            </Typography>
            <Typography variant="h6" textAlign="center">
              <FormattedMessage
                id="home.services-section-subtitle"
                defaultMessage="Check out our awesome services"
                description="src/pages/index.tsx"
                values={{}}
              />
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Home;
