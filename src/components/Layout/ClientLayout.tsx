import { Container } from '@mui/system';
import { ClientProvider } from 'app/contexts';
import { AppLayout } from 'app/types';
import { ClientNavbar, Footer } from 'components';
import { ClientLayoutRoot } from './Layout.styled';

const ClientLayout: AppLayout = ({ children }) => {
  return (
    <ClientProvider>
      <ClientLayoutRoot>
        <ClientNavbar />

        <Container>{children}</Container>

        <Footer />
      </ClientLayoutRoot>
    </ClientProvider>
  );
};

export default ClientLayout;
