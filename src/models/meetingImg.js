import { useState, useCallback } from 'react';
import {
  getMeetingImgList,
  addMeetingImg,
  editMeetingImg,
  removeMeetingImg,
} from '@/services/meetingImg';
import { IMG_PREFIX } from '@/constants';

const formatItem = v => {
  const url = IMG_PREFIX + v.url;
  return {
    ...v,
    url: url,
    urlObj: url,
  };
};

export default function meetingImg() {
  const [meetingImgList, setMeetingImgList] = useState([]);
  const [meetingImgDetail, setMeetingImgDetail] = useState({});
  const meetingImgItem = meetingImgList[0] ?? {};

  const getMeetingImgListAsync = useCallback(async params => {
    const res = await getMeetingImgList(params);
    // setMeetingImgList(res.data);
    setMeetingImgList(res.data.map(formatItem));
  }, []);

  const addMeetingImgAsync = useCallback(async params => {
    const res = await addMeetingImg(params);
  }, []);

  const editMeetingImgAsync = useCallback(async params => {
    const res = await editMeetingImg(params);
  }, []);

  const removeMeetingImgAsync = useCallback(async params => {
    const res = await removeMeetingImg(params);
    getMeetingImgListAsync();
  }, []);

  return {
    meetingImgItem: {
      ...meetingImgList[0],
    },
    meetingImgList,
    getMeetingImgListAsync,
    addMeetingImgAsync,
    editMeetingImgAsync,
    removeMeetingImgAsync,
    meetingImgDetail,
    setMeetingImgDetail,
  };
}
