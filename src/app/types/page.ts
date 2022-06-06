import { BlankLayout, ClientLayout, ManagerLayout } from 'components';
import { NextPage } from 'next';

type AppPage = NextPage & {
  layout?: typeof BlankLayout | typeof ClientLayout | typeof ManagerLayout;
};

export default AppPage;
