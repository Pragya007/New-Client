import React ,{useState} from 'react';
// import './CSS/Editor.css'
import 'react-dropdown/style.css';
import Dropdown from 'react-dropdown';
import CodeCompiler from './CodeCompiler'
import Field from './Field';
import Output from './Output';
import { Button } from '@themesberg/react-bootstrap';
import DevelopmentUrl from "../constant";


const plang = [
  "c", "c99", "c++", "c++14", "c++17","php", "perl","python2","python3",
  "ruby",
   "golang",
   "scala",
   "bashshell",
  "sql",
  "pascal",
  "c#",
   "vb.net",
  "haskell",
   "objectivec",
  "swift",
  "groovy",
  "fortran",
  "lua",
   "tcl",
  "hack",
  "rust",
 "d",
  "ada",
  "java",
  "rlanguage",
 "freebasic",

   "verilog",
  "cobol",
  "dart",
  "yabasic",
   "clojure",
   "nodejs",
  "scheme",
   "forth",
  "prolog",
   "octave",
   "coffeescript",
   "icon",
   "f#",
"assemblernasm"]




let token = localStorage.getItem('token');
//console.log(token);
export const Editor = (props) => {


  const [selectedvalue, setSelectedvalue] = useState("c");
  const [inp, setinp] = useState();
  const [code, setcode] = useState();
  const [output, setoutput] = useState();
  const url = window.location.href;
  let quizid=url.substring(url.indexOf("Quiz/")+7, url.lastIndexOf("/"));
  let quesid=url.substring(url.lastIndexOf("/")+1);
  console.log(props)
  var v;
  function handleEditorChange(e) {
    setcode(e);
    console.log(e)
    }
  
function handleChange(e){
  setinp(e.target.value);
  console.log(e.target.value);
   }
  
  const Drophandlechange = e => {
    setSelectedvalue(e.value);
    console.log(selectedvalue);
    
  }
  const setoutputfunc = e => {
    setoutput(e);
    console.log(output);
  }
  // const setSubmitOutputfunc = e => {
  //   setSubmitOutput(e);
  //   console.log(submitOutput);
  // }
  async function apiGet(){
    
    const response = await fetch(DevelopmentUrl+"/compile", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
        "Authorization": `bearer ${token}`
      },
      body: JSON.stringify({
        code: code,
        language: selectedvalue,
        standardIn: inp
        
      })
    // }) .then(response => {
    //   const c = (response.json())
    //   console.log(c);
    //   return response.json();
    // }).catch(error => alert(error.message));
  })
  const v = await(response.json());
  setoutputfunc(v.output);
  console.log(v.output)
  console.log(v);
}

async function apiSubmit(){
    
  const response = await fetch(DevelopmentUrl+ "/quizresults", {
    method: "POST",
    headers: {
      "Content-Type": "text/plain",
      "Authorization": `bearer ${token}`
    },
    body: JSON.stringify({
      code: code,
      language: selectedvalue,
      standardIn: inp,
      quesid:quesid,
      quizid:quizid

    })
  // }) .then(response => {
  //   const c = (response.json())
  //   console.log(c);
  //   return response.json();
  // }).catch(error => alert(error.message));
})
console.log(code);
v = await(response.json());
setoutputfunc(v.output);
props.setScoreFunc(v.score);
//setSubmitOutputfunc(v.output);
console.log(v.output)
console.log(v);

}
  
    return (
     <div>
        <Dropdown options={plang}  value={selectedvalue} onChange={Drophandlechange} placeholder="Select an option"  />

       <br/> <hr />
  <CodeCompiler  onChange={handleEditorChange}/>
        <Button variant="secondary" className="m-1" onClick={apiGet}>Compile</Button>
        <Button variant="secondary" className="m-1"onClick={apiSubmit}>Submit</Button>
      {/* <Field id="stdin" className="title-input" placeholder="Inputs (seperated by an ' | ' symbol)" onChange={ handleChange }  
      /> */}
     {/* <div style={{display:"flex"}}>
       
     
        
     </div>
      </div>
    </div>*/} 
    <Output showOutput={output}/> 
</div>
    )
}
export default Editor;