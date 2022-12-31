export function fahrToCel(n) {
  return roundToNumDigits(((n - 32) * 5) / 9, 2)
}

export function celToFahr(n) {
  return roundToNumDigits((9 * n) / 5 + 32, 2)
}

export function roundToNumDigits(x, numDigits) {
  return Math.round(x * 10 ** numDigits) / 10 ** numDigits
}

export function capitalizeFirst(s) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}
