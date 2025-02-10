/*
fv=PMT((1+i)^{n}-1)/i
*/

export function annuityFV(time: number | null, pmt: number | null, interest: number | null, begin: boolean): number | null {
    if(!time || !pmt || !interest) return null;
    let fv =pmt * (Math.pow(1 + interest/100, time)-1)/(interest/100);
    if(begin) fv *= 1 + interest/100;
    return fv;
  }

export function annuityPMT(fv: number | null, time: number | null, pv: number | null, interest: number | null, begin: boolean): number | null {
    if(!time || (!fv && !pv) || !interest) return null;
    let val = 0;
    if(fv){
        val = (fv * (interest/100))/(Math.pow(1 + interest/100, time) - 1);
        if(begin) val = val / (1 + interest/100);

    }
    if(pv){
        val = (pv * (interest/100))/(1 - Math.pow(1 + interest/100, -time));
        if(begin) val = val * (1 + interest/100);
    }

    return val;
  }


//REDO
export function annuityTime(pmt: number | null, fv: number | null, pv: number | null, interest: number | null, begin: boolean): number | null {
    if(!pmt || (!fv && !pv) || !interest) return null;
    let val = 0;
    const r = interest/100;
    if(fv){
        val = (fv * r / pmt) + 1;
        if(begin) val /= (1 + r);
        val = Math.log(val) / Math.log(1 + r);
    }
    if(pv){
        if(begin){
            val = -Math.log(1 - (pv * r / (pmt * (1+r)) ))/Math.log(1+r);
        }
        else{
            val = -Math.log(1 - (pv * r) / pmt)/Math.log(1+r);
        }
    }
    return val;
}
export function annuityPV(pmt: number | null, time: number | null, interest: number | null, begin: boolean): number | null {
    if(!pmt || !time || !interest) return null;
    let val = pmt * (1- Math.pow(1 +interest/100, -time))/(interest/100);
    if(begin) val *= (1 + interest/100);
    return val;
}