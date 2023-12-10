import './pages.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="body">
        <div className="questions">
          <div className="line">
            <h3>
              All you have to do is to Answer
              <br /> <span id="true">True</span> or{' '}
              <span id="false">False</span>
            </h3>
          </div>
          <div className="country">
            <div className="result-card">
              <h6>Cameroon is a Bilingual Country!</h6>
              <div className="truefalse">
                <button id="truthy">True</button>
                <button id="falcy">False</button>
              </div>
              <div className="button">
                <button
                  id="star"
                  onClick={() => {
                    navigate('/Question/1');
                  }}
                >
                  Start!!!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
