import { useState, useCallback } from 'react';
import { getMeetingImgList, addMeetingImg } from '@/services/meetingImg';

export default function meetingImg() {
  const [meetingimglist, setMeetingImgList] = useState([]);
  const meetingImgItem = meetingImgList[0] ?? {};

  const getMeetingImgListAsync = useCallback(async params => {
    const res = await getMeetingImgList(params);
    setMeetingImgList(res.data.map(formatItem));
  }, []);

  const addMeetingImgAsync = useCallback(async params => {
    const res = await addMeetingImg(params);
  }, []);

  return {
    meetingImgItem: {
      ...meetingImgList[0],
    },
    meetingImgList,
    getMeetingImgListAsync,
    addMeetingImgAsync,
  };
}
