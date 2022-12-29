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
].map(v => `/${v}`);

export const hiddenRoutes = [
  'login',
  'register',
  'setPwd',
  'selectIdentity',
  'paperStatus',
  'joinMeeting',
].map(v => `/${v}`);

export const hiddenFeTabs = hiddenRoutes.map(v => ({
  tab: '',
  label: '',
  key: v,
}));

export const hiddenTabsConfig = bgRoutes.map(v => ({
  tab: '',
  label: '',
  key: v,
}));
