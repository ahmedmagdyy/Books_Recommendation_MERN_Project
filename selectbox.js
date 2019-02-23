import React from 'react';
function SelectBox (props){
    const selected=props.value;
    const change=props.onChange;
    const options=props.opt;
     return(
     <select value={selected} onChange={change}>
     {options.map((opts)=><option value={opts[0]}>{opts[1]}</option>)}
     
   </select>
    );
   }
   export default SelectBox;
