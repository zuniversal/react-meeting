export const bgRoutes = [
  'adminHome',
  'joinCount',
  'paperCount',
  'paperApprove',
  'registerCount',
  'uploadImg',
  'uploadImgHistory',
  'payReview',
  'paperDistribute',
  'login?p=admin',
].map(v => `/${v}`);

export const hiddenRoutes = [
  'login',
  'register',
  'setPwd',
  'selectIdentity',
  'userCenter',
  'emailCenter',
  'paperStatus',
  'joinMeeting',
].map(v => `/${v}`);

export const hiddenFeTabs = hiddenRoutes.map(v => ({
  tab: v,
  label: '',
  key: v,
  className: v,
}));

export const hiddenTabsConfig = bgRoutes.map(v => ({
  tab: v,
  label: '',
  key: v,
}));
