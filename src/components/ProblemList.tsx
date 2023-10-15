import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Problem {
    problem_id: number;
    statement: string;
    content: string;
}

const ProblemList: React.FC = () => {
  const [problems, setProblems] = useState<Problem[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/problems')
      .then(response => {
        setProblems(response.data.problems);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Problem List</h1>
      <ul>
        {problems.map(problem => (
          <li key={problem.problem_id}>
            <h2>{problem.statement}</h2>
            <p>{problem.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProblemList;
