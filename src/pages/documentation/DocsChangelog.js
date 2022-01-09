
import React ,{useState, useEffect, setState} from 'react'
import axios from 'axios';
import { Row, Col, Card, Container } from '@themesberg/react-bootstrap';
import Editor from '../../components/Editor';



const DocsChangelog = (props) => {
  const[quesdesc, setquesdesc]= useState("");
  const[questitle, setquestitle]= useState("");
  const[input, setinput] = useState();
  const[output, setoutput] = useState();
      const[quizid,setquizid]=useState();
      const[currentques,setcurrentques]=useState(quesdesc);
      const[data,setdata]=useState(quesdesc);
      const[quesid,setquesid]=useState();
      var index = window.location.href.substring(window.location.href.indexOf("Quiz/")+5,window.location.href.indexOf("Quiz/")+6);
      console.log(index);

  useEffect(data => {
    axios.get('http://localhost:8080/quiz/javafullstack')
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
    </Row>
    <Editor/>
  </Container>
  );
}

export default DocsChangelog;
