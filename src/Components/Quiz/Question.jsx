import useFetch from '../Hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Appcontext } from '../Hooks/Context';
import '../Pages/pages.css';
import { useContext } from 'react';

function Questions() {
  const { setCounter } = useContext(Appcontext);
  const { id } = useParams();
  const navigate = useNavigate();

  let { data, isLoading, error } = useFetch();
  if (isLoading) {
    <h1>Loading</h1>;
  }

  if (error) {
    <h1>An error occured</h1>;
  }

  function handleclickeventss(e) {
    const value = e.target.value;

    console.log(value);
    if (+id > 8) {
      navigate('/Results');
    } else {
      navigate(`/Question/${+id + 1}`);
    }
    const newval = data[id].correct_answer;
    console.log(value);
    if (value === newval) {
      setCounter((counter) => counter + 1);
    }
  }

  return (
    data?.length > 0 && (
      <>
        <div className="bod">
          <div className="card">
            <div className="card-header">
              <h2 id="title">
                Click on either <span>True</span> or <span>False</span> to
                choose the correct answer
              </h2>
            </div>
            <div className="category">
              <h5 id="black">
                Question Category is:
                <span id="cat">{data[id]?.category}</span>
              </h5>
            </div>
            <div className="card-body">
              <h4 id="quizz">{data[id]?.question}</h4>
            </div>
            <div className="choice">
              <button
                id="tru"
                value="True"
                onClick={(e) => handleclickeventss(e)}
              >
                True
              </button>
              <button
                id="fals"
                value="False"
                onClick={(e) => handleclickeventss(e)}
              >
                False
              </button>
            </div>
            <div className="card-footer">
              <p>© 2023 Your Quizz Company</p>
            </div>
          </div>
        </div>
      </>
    )
  );
}
export default Questions;
