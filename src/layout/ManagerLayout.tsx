import { AppLayout } from 'app/types';

const ManagerLayout: AppLayout = ({ children }) => {
  return (
    <>
      <h1>Manager Layout</h1>
      {children}
    </>
  );
};

export default ManagerLayout;
