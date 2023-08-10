export const convertDate = (date) => {
  const _date = new Date(date);
  if(_date instanceof Date && !isNaN(_date)) {
    const year = _date.getFullYear();
    const month = (_date.getMonth() + 1).toString().padStart(2, '0');
    const day = _date.getDate().toString().padStart(2, '0');
    return `${year}/${month}/${day}`
  }
  return ''
}

export const generateAddress = (address) => {
  try {
    return [address.country, address.state, address.city, address.street_name, address.street_address].join(', ')
  } catch (err) {
    console.error(err)
    return ''
  }
}