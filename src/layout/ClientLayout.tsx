import { Box } from '@mui/material';
import { Container } from '@mui/system';
import { ClientProvider } from 'app/contexts';
import { AppLayout } from 'app/types';
import { ClientNavbar, Footer, Topbar } from 'components';
import { ClientLayoutRoot } from './Layout.styled';

const ClientLayout: AppLayout = ({ children }) => {
  return (
    <ClientProvider>
      <ClientLayoutRoot>
        <Topbar />
        <ClientNavbar />

        <Container>{children}</Container>

        <Footer />
      </ClientLayoutRoot>
    </ClientProvider>
  );
};

export default ClientLayout;
