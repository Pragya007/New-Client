
import React ,{useState, useEffect, setState} from 'react'
import axios from 'axios';
import { Row, Col, Card, Container } from '@themesberg/react-bootstrap';
import Editor from '../../components/Editor';
import DevelopmentUrl from "../../constant";
import { Link, Redirect } from 'react-router-dom';
import { Routes } from "../../routes";

const DocsChangelog = (props) => {
  const [sss,setsss]=useState(false);
  const[quesdesc, setquesdesc]= useState("");
  const[questitle, setquestitle]= useState("");
  const[input, setinput] = useState();
  const[output, setoutput] = useState();
      const[quizid,setquizid]=useState();
      const[currentques,setcurrentques]=useState(quesdesc);
      const[data,setdata]=useState(quesdesc);
      const[quesid,setquesid]=useState();
      var index = window.location.href.substring(window.location.href.indexOf("Quiz/")+5,window.location.href.indexOf("Quiz/")+6);
      console.log(props.location);
      const setScoreFunc = (score) => {
        if(props.location.state)
        props.location.state.func.setScoreFuncSec(score,props.location.state.index)
      }
      const [h, seth] = useState(sessionStorage.getItem("h"));
  const [m, setm] = useState(sessionStorage.getItem("m"));
  const [s, sets] = useState(sessionStorage.getItem("s"));
      useEffect(data => {
        setTimeout(()=>{
         var hvalue=h
         var mvalue=m
         var svalue=s
         if(hvalue==1){
           sessionStorage.clear();
           setsss(true);
         }
         if(svalue>=5){
           svalue=0
           sessionStorage.setItem("s",svalue)
           sets(svalue)
           mvalue = parseInt(mvalue)+1
           sessionStorage.setItem("m",mvalue)
          
           setm(mvalue)
         }
         if(mvalue>=2){
           mvalue=0
           sessionStorage.setItem("m",mvalue)
           
           setm(mvalue)
           hvalue=parseInt(hvalue)+1
           sessionStorage.setItem("h",hvalue)
           seth(hvalue)
           
         }
           svalue=parseInt(svalue)+1
           sessionStorage.setItem("s", svalue)
           sets(svalue)
         
         
          
           
       }
           
          
         , 1000)
     
       }, [h,m,s])
     
  useEffect(data => {
    axios.get(DevelopmentUrl+'/quiz/javafullstack')
       .then(res => {
          //  setState(res.data[0]["question"][index]);
           setquesdesc(res.data[0]["question"][index].description)
           setquestitle(res.data[0]["question"][index].title)
           setinput(res.data[0]["question"][index].sampleInput)
           setoutput(res.data[0]["question"][index].sampleOutput)
          //  setdata(res.data[0]["question"][index]);
          //  setquizid(props.match.params.quizid);
          //  setquesid(props.match.params.id)
       })
       .catch (err => console.error("YO YOU GOT AN ERROR IN AXIOS ", err))

},[currentques])

    return(
  <Container className="px-0">
    <Row>
      <Col xs={12} className="p-3">
        <Card>
          <Card.Body>
            <article>
              <h1 className="h2" id="changelog">{questitle} </h1>
              <p className="fs-5 fw-light">{quesdesc}</p>
              <p className="fs-7 fw-bold">Input: </p>
              <p className="fs-8 fw-light">{input}</p>
              <p className="fs-7 fw-bold">Output: </p>
              <p className="fs-8 fw-light">{output}</p>
            </article>
          </Card.Body>
        </Card>
      </Col>
      <Col><div >{h}:{m}:{s}</div></Col>
    </Row>
    <Editor  setScoreFunc={setScoreFunc} />
    {sss && <Redirect to={Routes.BootstrapTables.path}/>}
  </Container>
  );
}

export default DocsChangelog;
