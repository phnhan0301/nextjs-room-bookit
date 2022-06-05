import { AppLayout } from 'app/types';

const BlankLayout: AppLayout = ({ children }) => {
  return (
    <>
      <h1>Blank Layout</h1>
      {children}
    </>
  );
};

export default BlankLayout;
