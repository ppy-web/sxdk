import dayjs from 'dayjs'

export const formatDate = (value) => {
  if (value) {
    return dayjs(value).format("YYYY-MM-DD HH:mm");
  }
}