import { useState, useEffect} from 'react'
interface FormulaProps {
    interest: number | null;
    time: number | null;
    pmt: number | null;
    fv: number | null;
    begin: boolean;
    pv: number | null;
    calcFuncTime: ( pmt: number | null, fv: number | null, pv: number | null, interest: number | null, begin: boolean) => number | null;
    calcFuncPMT: ( fv: number | null, time: number | null, pv: number | null, interest: number | null, begin: boolean) => number | null;
    calcFuncFV: (time: number | null, pmt: number | null, interest: number | null, begin: boolean) => number | null;
    calcFuncPV: (pmt: number | null, time: number | null, interest: number | null, begin: boolean) => number | null;
}
export default function Annuity({ interest, time, pmt, fv, pv, calcFuncFV, calcFuncTime, calcFuncPMT, calcFuncPV, begin }: FormulaProps) {

    const [resultFV, setResultFV] = useState(fv);
    const [resultTime, setResultTime] = useState(time);
    const [resultPMT, setResultPMT] = useState(pmt);
    const [resultPV, setResultPV] = useState(pmt);

    useEffect(() => {
        setResultFV(calcFuncFV(time, pmt, interest, begin));
        setResultTime(calcFuncTime(pmt, fv, pv, interest, begin));
        setResultPMT(calcFuncPMT(fv, time, pv, interest, begin));   
        setResultPV(calcFuncPV(pmt, time, interest, begin));     
    }, [time, interest, pmt, fv, pv, begin, calcFuncFV, calcFuncTime, calcFuncPMT, calcFuncPV]);
    
    return (
        <div>
            <p>Future Value: {(resultFV != null) && Math.round(resultFV ? resultFV * 100 : -99999) / 100}</p>
            <p>Time: {(resultTime != null) && Math.round(resultTime ? resultTime * 100 : -99999) / 100}</p>
            <p>PMT: {(resultPMT != null) && Math.round(resultPMT ? resultPMT * 100 : -99999) / 100}</p>
            <p>PV: {(resultPV != null) && Math.round(resultPV? resultPV * 100 : -99999) / 100}</p>
        </div>
        
    )
}
