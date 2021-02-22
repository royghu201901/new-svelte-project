function number(num) {
  if (num) {
    return num.toLocaleString()
  } else {
    return 'unknown'
  }
}

export default {
  number
}