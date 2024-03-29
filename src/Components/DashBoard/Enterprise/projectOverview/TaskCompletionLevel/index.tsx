import { Card, Col, CardHeader } from "reactstrap";
import { H5 } from "../../../../../AbstractElements";
import { NumberOfEventTrigger, Events } from "../../../../../Constant";
import TaskCompletionLevelBody from "./TaskCompletionLevelBody";

const TaskCompletionLevel = () => {
  return (
    <Col xl="7" className="box-col-6">
      <Card className=" card-with-border monthly-growth">
        <CardHeader className=" card-no-border">
          <H5>{NumberOfEventTrigger}</H5>
          <div className="chart-value-box pull-right chart-data-set">
            <div className="value-square-box-info"></div>
            <span>{Events}</span>
          </div>
        </CardHeader>
        <TaskCompletionLevelBody />
      </Card>
    </Col>
  );
};

export default TaskCompletionLevel;
