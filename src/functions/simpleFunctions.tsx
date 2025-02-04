/*
    FV = PV * (1 + r)^t
*/

export function simpleFV(time: number | null, pv: number | null, interest: number | null): number | null {
  if(!time || !pv || !interest) return null;
  return pv * Math.pow(1 + interest/100, time);
}

/*
PV = FV / (1 + r)^t
*/
export function simplePV(time: number | null, fv: number | null, interest: number | null): number | null{
  if(!time || !fv || !interest) return null;
  return fv / Math.pow(1 + interest/100, time);
}

/*
r = (FV/PV)^(1/t) - 1
*/

export function simpleInterest(time: number | null, pv: number | null, fv: number | null): number | null {
  if(!time || !pv || !fv) return null;
  return Math.pow(fv / pv, 1 / time) - 1;
}

/*
T = log(FV/PV) / log(1 + r)
*/
export function simpleTime(pv: number | null, fv: number | null, interest: number | null): number | null {
  if(!fv || !pv || !interest) return null;
  return Math.log(fv / pv) / Math.log(1 + interest/100);
}
