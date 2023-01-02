import { req } from '@/utils/request';

export const getPayReviewList = p => req.get(`payCheck`, p);
export const editPayReview = p => req.put(`payCheck`, p);
