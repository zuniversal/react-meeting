import { formatFileRes } from '@/utils/format';

export const formatData = data => {
  const newData = {
    ...data,
  };

  const fileKeys = ['copyrightFileURLObj', 'paperURLObj'];
  // fileKeys.forEach(key => {
  //   newData[key]
  // })

  // newData.copyrightFileURL = formatFileRes(newData, 'copyrightFileURLObj');
  newData.paperURL = formatFileRes(newData, 'paperURLObj');
  newData.copyrightFileURL = '';
  // newData.commonAuthor = newData.commonAuthor.join(',');

  if (newData.file) {
    return;
  } else {
    newData.file = null;
  }

  const {
    // copyrightFileURLObj,
    paperURLObj,
    ...restData
  } = newData;
  console.log(' restData ： ', restData); //
  return restData;
};
