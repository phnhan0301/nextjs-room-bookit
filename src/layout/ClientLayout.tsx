import { ClientProvider } from 'app/contexts';
import { AppLayout } from 'app/types';
import { ClientNavbar, Footer, GitRibbon, TopBar } from 'components';
import { ClientLayoutRoot } from './Layout.styled';
import packageJson from '../../package.json';

const ClientLayout: AppLayout = ({ children }) => {
  return (
    <ClientProvider>
      <GitRibbon
        type={packageJson.repository.type}
        url={packageJson.repository.url}
      />

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
