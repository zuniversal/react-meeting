import { formatFileRes } from '@/utils/format';

export const formatData = data => {
  const newData = {
    ...data,
  };

  const fileKeys = ['copyrightFileURLObj', 'paperURLObj'];
  // fileKeys.forEach(key => {
  //   newData[key]
  // })

  newData.copyrightFileURL = formatFileRes(newData, 'copyrightFileURLObj');
  newData.paperURL = formatFileRes(newData, 'paperURLObj');

  if (newData.file) {
    return;
    if (
      newData.file &&
      newData.file.fileList &&
      newData.file.fileList.length > 0
    ) {
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

  const { copyrightFileURLObj, paperURLObj, ...restData } = newData;
  console.log(' restData ： ', restData); //
  return restData;
};
