import React from 'react'
import ReactDatePicker from 'react-datepicker'
const DatePicker = React.forwardRef((props, ref) => {
  return (
    <ReactDatePicker
      name={props.name}
      dateFormat={"DD/MM/YYYY"} 
      placeholderText="DD/MM/YYYY"   
      onChange={(data)=>{
        props.onChange(data.toISOString())
      }}
      />
  )
});

export default DatePicker