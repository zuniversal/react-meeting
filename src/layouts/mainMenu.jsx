export const routes = [
  {
    name: '控制台',
    path: '控制台',
    routes: [
      { name: '主控制台', path: '主控制台' },
      {
        name: '系统管理',
        path: '系统管理',
        routes: [
          { name: '基本信息', path: '/cs/alarmNotify' },
          { name: '资质认证', path: '资质认证' },
          { name: '账号管理', path: '账号管理' },
          { name: '操作日志', path: '操作日志' },
        ],
      },
      {
        name: '费用中心',
        path: '费用中心',
        routes: [
          { name: '财务概况', path: '财务概况' },
          { name: '在线充值', path: '在线充值' },
          { name: '购买套餐', path: '购买套餐' },
          { name: '发票管理', path: '发票管理' },
          { name: '交易记录', path: '交易记录' },
        ],
      },
    ],
  },
  {
    name: '普通短信',
    path: '普通短信',
    routes: [
      { name: '短信控制台', path: '短信控制台' },
      { name: '短信签名', path: '短信签名' },
      { name: '模板管理', path: '模板管理' },
      {
        name: '在线发送',
        path: '在线发送',
        routes: [
          { name: '普通发送', path: '普通发送' },
          { name: '个性发送', path: '个性发送' },
          { name: '任务查询', path: '任务查询' },
          { name: '通讯录管理', path: '通讯录管理' },
        ],
      },
      {
        name: '统计报表',
        path: '统计报表',
        routes: [
          { name: '日发送统计', path: '日发送统计' },
          { name: '月发送统计', path: '月发送统计' },
          { name: '签名发送统计', path: '签名发送统计' },
          { name: '发送查询', path: '发送查询' },
          { name: '上行查询', path: '上行查询' },
        ],
      },
    ],
  },
  {
    name: '视频短信',
    path: '视频短信',
    routes: [
      { name: '视频短信控制台', path: '视频短信控制台' },
      { name: '模板管理', path: '模板管理' },
      {
        name: '在线发送',
        path: '在线发送',
        routes: [
          { name: '短信发送', path: '短信发送' },
          { name: '任务查询', path: '任务查询' },
          { name: '发送查询', path: '发送查询' },
        ],
      },
      {
        name: '统计报表',
        path: '统计报表',
        routes: [
          { name: '日发送统计', path: '日发送统计' },
          { name: '月发送统计', path: '月发送统计' },
        ],
      },
    ],
  },
  {
    name: '国际短信',
    path: '国际短信',
    routes: [
      { name: '国际短信控制台', path: '国际短信控制台' },
      { name: '国家码', path: '国家码' },
      {
        name: '在线发送',
        path: '在线发送',
        routes: [
          { name: '短信发送', path: '短信发送' },
          { name: '任务查询', path: '任务查询' },
          { name: '发送查询', path: '发送查询' },
        ],
      },
      {
        name: '统计报表',
        path: '统计报表',
        routes: [
          { name: '日发送统计', path: '日发送统计' },
          { name: '月发送统计', path: '月发送统计' },
          { name: '国家发送统计', path: '国家发送统计' },
        ],
      },
    ],
  },
  {
    name: '短链接服务',
    path: '短链接服务',
    routes: [
      { name: '短链控制台', path: '短链控制台' },
      { name: '短链管理', path: '短链管理' },
      { name: '动态短链发送', path: '动态短链发送' },
      {
        name: '统计报表',
        path: '统计报表',
        routes: [
          { name: '动态短链-UV访问率', path: '动态短链-UV访问率' },
          { name: '静态短链-UV访问率', path: '静态短链-UV访问率' },
        ],
      },
    ],
  },
  {
    name: '号码认证',
    path: '号码认证',
    routes: [
      { name: '认证控制台', path: '认证控制台' },
      { name: '方案报备管理', path: '方案报备管理' },
      { name: '一键登录', path: '一键登录' },
      { name: '号码速验', path: '号码速验' },
    ],
  },
];
export const menus = routes;
export const mainRoutes = routes;

export const mainMenu = {
  location: { pathname: '/' },
  route: {
    path: '/',
    routes,
  },
};
