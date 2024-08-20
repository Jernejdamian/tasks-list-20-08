import Buttons from "./Buttons";
import Form from "./Form";
import Section from "./Section";
import Tasks from "./Tasks";
import Container from "./Container";

const tasks = [
  {
    content: "Zrobić trening kolarski", done: true,
  },
  {
    content: "Zjeść kurczaka z makaronem", done: false,
  },
];

const hideDoneTasks = false;

function App() {
  return (
    <Container>
      <h1>Lista zadań</h1>
      <Section
        title="Dodaj nowe zadanie"
        body={<Form/>}
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks}/>}
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks}/>}
      />
    </Container>
  );
}

export default App;
