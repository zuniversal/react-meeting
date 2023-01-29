const nowSeconds = new Date().getSeconds();
const nowYear = new Date().getFullYear();
const nowMonth = `${new Date().getMonth() + 1}`.padStart(2, '0');
const nowDay = new Date().getDate();
const nowYearMonthDay = `${nowYear}-${nowMonth}-${nowDay}:${nowSeconds}`;
exports.nowYearMonthDay = nowYearMonthDay;
