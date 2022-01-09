
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb, Button, Col, Row } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../../routes";
import { PageTrafficTable } from "../../components/Tables";
import Timer from "./Timer";


export default () => {
  const [startnow, setstartnow] = useState(false);
  const startNowHandler = () => {
    setstartnow(true);
  }
  return (
    <React.StrictMode>
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
          {!startnow?<></>: <Timer/>}
          </Col>
          </Row>
          <h6>Instruction</h6>
          <p className="mb-0">
            This quiz consists of 10 multiple-choice questions. To be successful with the weekly quizzes, it’s important to thoroughly read chapter 5 in the textbook. It will also be extremely useful to study the key terms at the end of the chapter and review the Test Your Knowledge activity at the end of the chapter. Keep the following in mind:
          </p>
        </div>
      </div>
      
      {startnow?<PageTrafficTable/> :<Button onClick={startNowHandler} variant="success" className="m-1">Start now</Button>}
    </React.StrictMode>
  );
};
