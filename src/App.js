

import './App.css';
import Card from './components/Card';
import { QuestionProvider } from './contexts/QuestionContexts';

function App() {
  return (
    <QuestionProvider>
      
      <Card />
    </QuestionProvider>
  );
}

export default App;
