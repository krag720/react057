import './App.css';
import Button from "./components/Button";
import QuestionForm from "./components/Adding";

function App() {


    return (
        <div className="App">
            <h1>СОЗДАТЬ НОВУЮ ЗАГАДКУ</h1>
            <QuestionForm/>
            <br/>
            <Button/>
        </div>
    );
}

export default App;