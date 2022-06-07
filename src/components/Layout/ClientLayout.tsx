import { Container } from '@mui/system';
import { ClientProvider } from 'app/contexts';
import { AppLayout } from 'app/types';
import { ClientNavbar } from 'components';

const ClientLayout: AppLayout = ({ children }) => {
  return (
    <ClientProvider>
      <ClientNavbar />

      <Container>{children}</Container>
    </ClientProvider>
  );
};

export default ClientLayout;
