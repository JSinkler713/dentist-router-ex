const Procedures = (props)=> { 
    const procedures = [
    "Deep Cleaning",
    "Filling",
    "Crown",
    "Root Canal",
    "Oral Surgery"
  ]
  const procedureList = procedures.map((singleProcedure, key) => {
    return <li key={key} >{singleProcedure}</li>
  })

  return ( 
     <div> 
       <h1>Procedures</h1>
       <p>These are my procedures</p>
       {procedureList}
     </div> 
  ) 
} 
export default Procedures;
