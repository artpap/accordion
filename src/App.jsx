import { useState } from 'react';
import data from './data';
import Questions from './Questions';

const App = () => {
  const [questions, setQuestion] = useState(data);

  return (
    <div>
      <Questions questions={questions}></Questions>
    </div>
  );
};
export default App;
