import { useContext } from 'react';
import { Appcontext } from '../Hooks/Context';
import { useNavigate } from 'react-router-dom';

function Results() {
  const navigate = useNavigate();
  const { counter, setCounter } = useContext(Appcontext);

  return (
    <>
      <div className="body">
        <div class="result-card">
          <div class="result-card-content">
            <h2 class="result-card-title">
              Result <br /> <span>{counter}</span> /10
            </h2>
            <p id="replay" className="result-card-description">
              You Can Learn Better By Playing Many Times
            </p>
            <button
              id="true"
              onClick={() => {
                navigate('/');
                setCounter(0);
              }}
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Results;
