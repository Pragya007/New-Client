
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb, Button, Col, Row } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../../routes";
import { PageTrafficTable } from "../../components/Tables";
import Timer from "./Timer";


export default () => {
  
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
          <Timer/>
          </Col>
          </Row>
          <h6>Instruction</h6>
          <p className="mb-0">
          The objective of this Java Full Stack Assessment the talented and creative minds in competitive programming with some interesting algorithmic problems.The participants will be challenged by Multiple Problem Setters with 4 problems of varying difficulty levels in a duration of 3 hr. 
          </p>
        </div>
      </div>
      
      <PageTrafficTable/>
    </React.StrictMode>
  );
};
