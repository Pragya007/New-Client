
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from '@themesberg/react-bootstrap';

import { PageTrafficTable, RankingTable } from "../../components/Tables";


export default () => {
  return (
    <>
      <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-xl-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Assessment</Breadcrumb.Item>
            <Breadcrumb.Item active>Java Full Stack</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Java Full Stack </h4>
          <h6>Instruction</h6>
          <p className="mb-0">
            This quiz consists of 10 multiple-choice questions. To be successful with the weekly quizzes, it’s important to thoroughly read chapter 5 in the textbook. It will also be extremely useful to study the key terms at the end of the chapter and review the Test Your Knowledge activity at the end of the chapter. Keep the following in mind:
          </p>
        </div>
      </div>

      <PageTrafficTable />
    </>
  );
};
