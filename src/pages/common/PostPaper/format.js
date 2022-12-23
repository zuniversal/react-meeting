import { format2Null } from '@/utils';

export const formatData = data => {
  const newData = {
    ...data,
  }
  
  if (newData.file) {
    return  
    if (newData.file && newData.file.fileList && newData.file.fileList.length > 0) {
      const fileList = newData.file.fileList;
      console.log(' fileList ： ', fileList);
      newData.file = fileList.map(v => v.response.url).join(',');
      // } else {
      //   tips('文件不能为空！', 2);
      //   return;
    } else {
      params.file = null;
    }
  } else {
    newData.file = null;
  }
  console.log(' newData ： ', newData,  )// 
  return newData;
};
