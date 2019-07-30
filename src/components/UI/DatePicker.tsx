import React from 'react'
import DateFnsUtils from '@date-io/date-fns';

import { MuiPickersUtilsProvider,
          DatePicker,
       } from "@material-ui/pickers";
   
       
const DatePickerInline: React.FC<any>  = ({selectedDate, onHandleDateChange, label}) =>(
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker autoOk
                        variant="inline"
                        minDate={new Date()}
                        label={label? label: ''}
                        value={selectedDate}
                        onChange={onHandleDateChange}
                        format="dd/MM/yyyy"
                         />
      </MuiPickersUtilsProvider>
)

export default DatePickerInline
