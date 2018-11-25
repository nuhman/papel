import ListGroup from "./components/ListGroups/ListGroup";
import BasicForm from "./components/Forms/BasicForm";
import MastHead from "./components/MastHead/MastHead";

export const routes = [
  {
    path: "/",
    component: MastHead
  },
  {
    path: "/add",
    component: BasicForm
  },
  {
    path: "/expenses",
    component: ListGroup
  }
];
