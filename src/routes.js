import ListGroup from "./components/ListGroups/ListGroup";
import BasicForm from "./components/Forms/BasicForm";

export const routes = [
  {
    path: "",
    component: BasicForm
  },
  {
    path: "/expenses",
    component: ListGroup
  }
];
