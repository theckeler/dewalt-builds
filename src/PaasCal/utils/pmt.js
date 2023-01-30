const PMT = (ir, np = 36, pv, fv = 0, type = 0) => {
  /*
   * ir   - Required. The interest rate for the loan.
   * np   - Required. The total number of payments for the loan.
   * pv   - Required. The present value, or the total amount that a series of future payments is worth now; also known as the principal.
   * fv   - Optional. The future value, or a cash balance you want to attain after the last payment is made. If fv is omitted, it is assumed to be 0 (zero), that is, the future value of a loan is 0.
   * type - Optional. The number 0 (zero) or 1 and indicates when payments are due:
   *        0: end of the period, e.g. end of month (default)
   *        1: beginning of period
   */
  let pmt, pvif;
  fv || (fv = 0);
  type || (type = 0);
  if (ir === 0) return -(pv + fv) / np;
  pvif = Math.pow(1 + ir, np);
  pmt = (-ir * (pv * pvif + fv)) / (pvif - 1);
  if (type === 1) pmt /= 1 + ir;
  return pmt;
};
export default PMT;
