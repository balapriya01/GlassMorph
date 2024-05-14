import "./App.css";
import { CiCreditCard1 } from "react-icons/ci";

// Sapna pura hua, Always wanted to make this glass Morph since Grad 1st year.

const App = () => {
  return (
    <>
      <div className="container">
        <div className="sub-con">
          <div className="circle1"></div>
          <div className="card">
            <div className="visa"> VISA</div>
            <div className="icon">
              <CiCreditCard1 className="icon" />
            </div>
            <div className="num">1234 5678 9123 2001</div>
            <div className="text-con">
              <p className="text1">
                EUGENE FITZHERBERT &nbsp; &nbsp; &nbsp; VALID PERIOD 12/25
              </p>
            </div>
          </div>
          <div className="circle2"></div>
        </div>
      </div>
    </>
  );
};

export default App;
