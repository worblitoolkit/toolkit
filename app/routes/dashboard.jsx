// Primary components
import CreateAccount from 'components/Features/CreateAccountForm';
import CreateProxy from 'components/Features/CreateProxyForm';
import ResignProxy from 'components/Features/ResignProxyForm';
import SetProxy from 'components/Features/SetProxyForm';
import RamForm from 'components/Features/RamForm';
import StakeForm from 'components/Features/StakeForm';
import Refund from 'components/Features/RefundForm';
import Transfer from 'components/Features/TransferForm';
import SimplePermissions from 'components/Features/SimplePermissionsForm';
import ComplexPermissions from 'components/Features/ComplexPermissionsForm';
import LinkAuth from 'components/Features/LinkAuthForm';
import ClaimRewards from 'components/Features/ClaimRewardsForm';

// MULTISIG - OFFLINE SIGN
import MultisigCreate from 'components/Features/Multisig/Create';
import MultisigSign from 'components/Features/Multisig/Sign';
import MultisigPush from 'components/Features/Multisig/Push';

// containers
import Network from 'containers/Network';
import SearchAccount from 'containers/SearchAccount';

import FeaturesPage from 'components/Pages/FeaturesPage';



// @material-ui/icons
import {
  Dashboard,
  AccountBalance,
  Search,
  PersonAdd,
  AssignmentInd,
  AssignmentTurnedIn,
  Payment,
  DeveloperBoard,
  Forum,
  Favorite,
  CloudDownload,
  Settings,
  VpnKey,
  Games,
  Feedback,
  Extension
} from '@material-ui/icons';
import HorusIcon from 'components/Icons/Horus';
import KarmaIcon from 'components/Icons/Karma';

const dashRoutes = [
  { hide: true, path: '/networks', name: 'Network', component: Network },
  {
    path: '/home',
    name: 'Features',
    icon: Dashboard,
    component: FeaturesPage,
  },
  {
    path: '/search',
    name: 'Find Accounts',
    icon: Search,
    component: SearchAccount,
  },
  {
    path: '/account/create',
    name: 'Create Account',
    icon: PersonAdd,
    component: CreateAccount,
  },
  {
    path: '/transfer',
    name: 'Transfer Tokens',
    icon: Payment,
    component: Transfer,
  },
  {
    collapse: true,
    path: '/account',
    name: 'Manage Account',
    state: 'openAccount',
    icon: AssignmentInd,
    views: [
      {
        path: '/account/delegate',
        name: 'Manage Stake',
        mini: 'MS',
        component: StakeForm,
      },
      {
        path: '/account/ram',
        name: 'Manage RAM',
        mini: 'MR',
        component: RamForm,
      },
      {
        path: '/account/permissions',
        name: 'Manage Permissions',
        mini: 'P',
        component: SimplePermissions,
      },
      {
        path: '/account/advanced',
        name: 'Advanced Permissions',
        mini: 'AP',
        component: ComplexPermissions,
      },
      {
        path: '/account/linkauth',
        name: 'Link Auth',
        mini: 'LA',
        component: LinkAuth,
      },
      {
        path: '/account/refund',
        name: 'Refund Stake',
        mini: 'RS',
        component: Refund,
      },
    ],
  },
  {
    collapse: true,
    path: '/multisig',
    name: 'Multisig Transactions',
    state: 'openMultisig',
    icon: VpnKey,
    views: [
      {
        path: '/multisig/create',
        name: 'Create Transaction',
        mini: 'CT',
        component: MultisigCreate,
      },
      {
        path: '/multisig/sign',
        name: 'Sign Transaction',
        mini: 'ST',
        component: MultisigSign,
      },
      {
        path: '/multisig/push',
        name: 'Push Transaction',
        mini: 'PT',
        component: MultisigPush,
      },
    ],
  },
  {
    collapse: true,
    path: '/block-producer',
    name: 'Block Producer',
    state: 'openBlockProducer',
    icon: DeveloperBoard,
    views: [
      {
        path: '/block-producer/claim-rewards',
        name: 'Claim Rewards',
        mini: 'CR',
        component: ClaimRewards,
      },
    ],
  },
  { redirect: true, path: '/', pathTo: '/home', name: 'Home' },
];
export default dashRoutes;
