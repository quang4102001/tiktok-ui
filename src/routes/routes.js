import config from '~/config';

//Layout
import { HeaderOnly } from '~/layouts';

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
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.live, component: Live },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
  { path: config.routes.search, component: Search, layout: null },
  { path: config.routes.feedback, component: Feedback, layout: HeaderOnly },
  { path: config.routes.info, component: Info, layout: HeaderOnly },
  { path: config.routes.coin, component: Coin, layout: HeaderOnly },
  { path: config.routes.studio, component: Studio, layout: HeaderOnly },
  { path: config.routes.setting, component: Setting, layout: HeaderOnly },
  { path: config.routes.logout, component: Logout, layout: HeaderOnly },
];

export const privateRoutes = [];
