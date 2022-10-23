import routesConfig from '~/config/routes';

//Layout
import { HeaderOnly } from '~/components/Layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import Feedback from '~/pages/Feedback';
import Info from '~/pages/Info';
import Coin from '~/pages/Coin';
import Studio from '~/pages/Studio';
import Setting from '~/pages/Setting';
import Logout from '~/pages/Logout';

//public routes
export const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.following, component: Following },
  { path: routesConfig.profile, component: Profile },
  { path: routesConfig.upload, component: Live },
  { path: routesConfig.search, component: Upload, layout: HeaderOnly },
  { path: routesConfig.live, component: Search, layout: null },
  { path: routesConfig.feedback, component: Feedback, layout: HeaderOnly },
  { path: routesConfig.info, component: Info, layout: HeaderOnly },
  { path: routesConfig.coin, component: Coin, layout: HeaderOnly },
  { path: routesConfig.studio, component: Studio, layout: HeaderOnly },
  { path: routesConfig.setting, component: Setting, layout: HeaderOnly },
  { path: routesConfig.logout, component: Logout, layout: HeaderOnly },
];

export const privateRoutes = [];
