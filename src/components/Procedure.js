
const Procedure = (props)=> { 
  return ( 
     <div> 
       <h1>Ahh you would like the:</h1>
       <p>{props.match.params.name}</p>
     </div> 
  ) 
} 
export default Procedure;
