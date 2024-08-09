export const DateFormat = () => (UnixTimeStamp: number) => {
  if (!UnixTimeStamp) {
    return '--'
  }

  const unformattedDate = new Date(UnixTimeStamp * 1000)
  return [
    ('0' + (unformattedDate.getMonth() + 1)).slice(-2), // Month (01-12)
    ('0' + unformattedDate.getDate()).slice(-2), // Day (01-31)
    unformattedDate.getFullYear(), // Year (YYYY)
  ].join('-')
}
