function number(num) {
  if (num) {
    return num.toLocaleString()
  } else {
    return 'unknown'
  }
}

function tableNumber(num) {
  if (num) {
    return num.toLocaleString()
  } else {
    return '0'
  }
}

export default {
  number,
  tableNumber
}
