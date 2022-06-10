import { CacheProvider } from '@emotion/react';
import { EmotionCache } from '@emotion/cache';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { AppPage } from 'app/types';
import { ClientLayout } from 'layout';
import { createEmotionCache } from 'app/helpers';
import { lightTheme } from 'assets/styles/themes';
import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';
import { LangService } from 'app/services';
import * as locales from 'assets/locales';

type MyAppProps = AppProps & {
  Component: AppPage;
  emotionCache?: EmotionCache;
};

const MyApp = ({
  Component,
  emotionCache = createEmotionCache(),
  pageProps,
}: MyAppProps) => {
  const { locale = 'en' } = useRouter();
  const Layout = Component.layout || ClientLayout;

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>NextJs - Room BookIT</title>
      </Head>

      <IntlProvider
        locale={locale}
        messages={LangService.getMessages(locale as keyof typeof locales)}
        onError={() => null}
      >
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />

            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </CacheProvider>
      </IntlProvider>
    </>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {}, // will be passed to the page component as props
  };
};

export default MyApp;
