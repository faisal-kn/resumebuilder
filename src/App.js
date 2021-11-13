import './App.css';
import {Provider} from "./Store";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from './components/ResumePreview';

function App() {
  return (
    <div className="App">
      <Provider>
        <ResumeForm/>
        <ResumePreview/>
      </Provider>
    </div>
  );
}

export default App;
