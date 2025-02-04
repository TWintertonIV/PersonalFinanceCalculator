import SimpleInterest from './components/SimpleInterest'
import Annuity from './components/Annuity'
import{ useState } from 'react'
import { TextField, Accordion, AccordionSummary, AccordionDetails, Switch, FormControlLabel} from '@mui/material';

import {simpleFV, simpleInterest, simplePV, simpleTime} from './functions/simpleFunctions'
import {annuityFV, annuityPMT, annuityTime, annuityPV} from './functions/annuityFunctions'

import './App.css'



function App() {

     const [FV, setFV] = useState<number | null>(0);
     const [Time, setTime] = useState<number | null>(0);
     const [PV, setPV] = useState<number | null>(0);
     const [Interest, setInterest] = useState<number | null>(0);

     const [AFV, setAFV] = useState<number | null>(0);
     const [ATime, setATime] = useState<number | null>(0);
     const [APMT, setAPMT] = useState<number | null>(0);
     const [AInterest, setAInterest] = useState<number | null>(0);
     const [APV, setAPV] = useState<number | null>(0);
     const [begin, setBegin] = useState<boolean>(false);

  return (
    <>
      <Accordion className='input'>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          Simple Interest
        </AccordionSummary>
        <AccordionDetails>
        <TextField
          label="Future Value"
          type="number"
          onChange={(e) => setFV(e.target.value ? Number(e.target.value) : null)}
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Time"
          type="number"
          onChange={(e) => setTime(e.target.value ? Number(e.target.value) : null)}
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Present Value"
          type="number"
          onChange={(e) => setPV(e.target.value ? Number(e.target.value) : null)}
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Interest Rate (%)"
          type="number"
          onChange={(e) => setInterest(e.target.value ? Number(e.target.value) : null)}
          variant="outlined"
          margin="normal"
          fullWidth
        />
      <div>
        <SimpleInterest interest={Interest} time={Time} pv={PV} fv={FV} calcFuncInterest={simpleInterest} calcFuncTime={simpleTime} calcFuncPV={simplePV} calcFuncFV={simpleFV} />
      </div>
      </AccordionDetails>
    </Accordion>

    <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          Annuity
        </AccordionSummary>
        <AccordionDetails>
        <TextField
          label="Future Value"
          type="number"
          onChange={(e) => setAFV(e.target.value ? Number(e.target.value) : null)}
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Present Value"
          type="number"
          onChange={(e) => setAPV(e.target.value ? Number(e.target.value) : null)}
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Time"
          type="number"
          onChange={(e) => setATime(e.target.value ? Number(e.target.value) : null)}
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="PMT"
          type="number"
          onChange={(e) => setAPMT(e.target.value ? Number(e.target.value) : null)}
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Interest Rate (%)"
          type="number"
          onChange={(e) => setAInterest(e.target.value ? Number(e.target.value) : null)}
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <FormControlLabel control = {<Switch checked={begin} onChange= {(e) => setBegin(e.target.checked)}/>} label="Beginning of Month"></FormControlLabel>
      <div>
        <Annuity interest={AInterest} time={ATime} pmt={APMT} fv={AFV} calcFuncTime={annuityTime} calcFuncPMT={annuityPMT} calcFuncFV={annuityFV} begin={begin} calcFuncPV={annuityPV} pv={APV}/>
      </div>
      </AccordionDetails>
    </Accordion>
    </>
  )
}

export default App
