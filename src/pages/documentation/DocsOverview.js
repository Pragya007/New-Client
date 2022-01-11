import React, { useState, useEffect, Redirect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb, Button, Col, Row } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../../routes";
import { PageTrafficTable } from "../../components/Tables";
import Timer from "../tables/Timer";

import {Card, Container } from '@themesberg/react-bootstrap';


export default () => {
  const [sss,setsss]=useState(false);
  // const [counter, setcounter] = useState(sessionStorage.getItem("counter"));
  const [h, seth] = useState(sessionStorage.getItem("h"));
  const [m, setm] = useState(sessionStorage.getItem("m"));
  const [s, sets] = useState(sessionStorage.getItem("s"));
  const [score, setScore] = useState(0)
  
  
  // useEffect(data => {
  //   const date = Date.now();
  // let currentDate = null;
  // do {
  //   currentDate = Date.now();
  //   var hvalue=h
  //   var mvalue=m
  //   var svalue=s
  //   // if(hvalue==1){
  //   //   sessionStorage.clear()
  //   //   setsss(true)
  //   // }
  //   if(svalue>=60){
  //     svalue=0
  //     sessionStorage.setItem("s",svalue)
  //     sets(svalue)
  //     mvalue = parseInt(mvalue)+1
  //     sessionStorage.setItem("m",mvalue)
     
  //     setm(mvalue)
  //   }
  //   // else{
  //   //   svalue=parseInt(svalue)+1
  //   //   sessionStorage.setItem("s", svalue)
  //   //   sets(svalue)
  //   // }
  //   if(mvalue>=60){
  //     mvalue=0
  //     sessionStorage.setItem("m",mvalue)
      
  //     setm(mvalue)
  //     hvalue=parseInt(hvalue)+1
  //     sessionStorage.setItem("h",hvalue)
  //     seth(hvalue)
      
  //   }
  //     svalue=parseInt(svalue)+1
  //     sessionStorage.setItem("s", svalue)
  //     sets(svalue)
    
    
     
      
  // // }
  // } while (currentDate - date < 1000);
      
     
  //   // , 1000)

  // }, [h,m,s])

  // const [scores, setScore] = useState(0);

  return (
    <>
      <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-xl-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Assessment</Breadcrumb.Item>
            <Breadcrumb.Item active>Java Full Stack</Breadcrumb.Item>
          </Breadcrumb>
          <Row className="justify-content-between align-items-center">
          <Col xs={8} md={6} lg={3} xl={4}>
          <h4>Java Full Stack </h4>
          </Col>
          <Col xs={4} md={2} xl={1} className="ps-md-0 text-end">
          {/* <Timer/> */}
          {/* <div >{h}:{m}:{s}</div> */}
          </Col>
          </Row>
          <h6>Instruction</h6>
          <p className="mb-0">
          The objective of this Java Full Stack Assessment the talented and creative minds in competitive programming with some interesting algorithmic problems.The participants will be challenged by Multiple Problem Setters with 4 problems of varying difficulty levels in a duration of 3 hr. 
          </p>
        </div>
        
      </div>
      
      <PageTrafficTable /></>
      // {sss && <Redirect to={Routes.BootstrapTables.path}/>}
    
  );
};

