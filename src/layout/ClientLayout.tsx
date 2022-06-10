import { Box } from '@mui/material';
import { Container } from '@mui/system';
import { ClientProvider } from 'app/contexts';
import { AppLayout } from 'app/types';
import { ClientNavbar, Footer, TopBar } from 'components';
import { ClientLayoutRoot } from './Layout.styled';

const ClientLayout: AppLayout = ({ children }) => {
  return (
    <ClientProvider>
      <ClientLayoutRoot>
        <TopBar />
        <ClientNavbar />

        {children}

        <Footer />
      </ClientLayoutRoot>
    </ClientProvider>
  );
};

export default ClientLayout;
