export function getDate() {
  return new Date().toDateString();
}

export function formatCurrency(value, options = {}) {
  return new Intl.NumberFormat('en-US', options).format(value);
}
