import { AppLayout } from 'app/types';

const ClientLayout: AppLayout = ({ children }) => {
  return (
    <>
      <h1>ClientLayout</h1>
      {children}
    </>
  );
};

export default ClientLayout;
