import { useState, useEffect} from 'react'
interface FormulaProps {
    interest: number | null;
    time: number | null;
    pv: number | null;
    fv: number | null;
    calcFuncInterest: (pv: number | null, fv: number | null, time: number | null) => number | null;
    calcFuncTime: (interest: number | null, pv: number | null, fv: number | null) => number | null;
    calcFuncPV: (time: number | null, fv: number | null, interest: number | null) => number | null;
    calcFuncFV: (time: number | null, pv: number | null, interest: number | null) => number | null;
}
export default function SimpleInterest({ interest, time, pv, fv,calcFuncFV, calcFuncTime, calcFuncPV, calcFuncInterest }: FormulaProps) {

    const [resultFV, setResultFV] = useState(fv);
    const [resultTime, setResultTime] = useState(time);
    const [resultPV, setResultPV] = useState(pv);
    const [resultInterest, setResultInterest] = useState(interest);


    useEffect(() => {
        setResultFV(calcFuncFV(time, pv, interest));
        setResultTime(calcFuncTime(interest, pv, fv));
        setResultPV(calcFuncPV(time, fv, interest));
        setResultInterest(calcFuncInterest(time, pv, fv));
        
    }, [interest, time, pv, fv, calcFuncFV, calcFuncTime, calcFuncPV, calcFuncInterest]);
    
    return (
        <div>
            <p>Future Value: {(resultFV != null) && Math.round(resultFV ? resultFV * 100 : -99999) / 100}</p>
            <p>Time: {(resultTime != null) && Math.round(resultTime ? resultTime * 100 : -99999) / 100}</p>
            <p>PV: {(resultPV != null) && Math.round(resultPV ? resultPV * 100 : -99999) / 100}</p>
            <p>Interest %: {(resultInterest != null) && Math.round(resultInterest ? resultInterest * 10000: -99999)/100}</p>
        </div>
        
    )
}
