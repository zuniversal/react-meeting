import p1 from '@/static/img/adminHome/p1.png';
import p2 from '@/static/img/adminHome/p2.png';
import p3 from '@/static/img/adminHome/p3.png';
import p4 from '@/static/img/adminHome/p4.png';
import p5 from '@/static/img/adminHome/p5.png';
import p6 from '@/static/img/adminHome/p6.png';
import p7 from '@/static/img/adminHome/p7.png';
import p8 from '@/static/img/adminHome/p8.png';

export const bgCountConfig = [
  {
    key: 'usersSum',
    langKey: 'regMan',
    path: '/registerCount',
    icon: p1,
    label: '注册人员统计',
    bg: '#A45E5D',
  },
  {
    key: 'joinMettingSum',
    langKey: 'joinMan',
    path: '/joinCount',
    icon: p2,
    label: '参会人员统计',
    bg: '#5D6BA4',
  },
  {
    key: 'paperSum',
    langKey: 'abstract',
    path: '/paperCount',
    icon: p3,
    label: '摘要统计/全文统计',
    bg: '#5DA491',
  },
  {
    langKey: 'payReview',
    path: '/payReview',
    icon: p4,
    label: '缴费审核',
    bg: '#5394B7',
  },
  {
    langKey: 'distribute',
    path: '/paperDistribute',
    icon: p5,
    label: '分配论文',
    bg: '#AD89A5',
  },
  {
    langKey: 'picUpload',
    path: '/uploadImg',
    icon: p6,
    label: '图片上传',
    bg: '#8D929B',
  },
  {
    langKey: 'logManage',
    path: '/logManage',
    icon: p7,
    label: '日志管理',
    bg: '#C7B97B',
  },
  {
    langKey: 'registerApprover',
    path: '/registerApprover',
    icon: p8,
    label: '注册审稿人',
    bg: '#769180',
  },
];
