const dollarUSLocaleNoDigits = new Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
  minimumFractionDigits: 0,
});
export default dollarUSLocaleNoDigits;
