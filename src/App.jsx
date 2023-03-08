//Components
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import Steps from "./components/Steps";
import { useState, useEffect } from "react";

//css
import "./App.css";

//Hooks
import { useForm } from "./hooks/useForm";

const formTemplate = {
  name: "",
  email: "",
  date_birth: "",
  phone: "",
  transaction_code: "",
};

function App() {
  const [data, setData] = useState(formTemplate);

  const updadateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const [message, setMessage] = useState("");

  //crio a lista dos meus passos
  const formComponents = [
    <UserForm data={data} updadateFieldHandler={updadateFieldHandler} />,
    <ReviewForm
      data={data}
      statusMessage={message}
      updadateFieldHandler={updadateFieldHandler}
    />,
    <Thanks data={data} />,
  ];

  const {
    currentStep,
    currentComponent,
    changeStep,
    isLastStep,
    isFirstStep,
    validateBuyer,
    statusMessage,
  } = useForm(formComponents);

  useEffect(() => {
    setMessage(statusMessage);
  }, [statusMessage]);

  return (
    <div className="App">
      <div className="header">
        <h2>Preencha o formulário para fazer seu Mapa</h2>
        <p>
          Ficamos muito felizes com a sua compra, utilize o formulário abaixo
          para desenvolver seu Mapa
        </p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="input-container">{currentComponent}</div>

          <div className="actions">
            {!isFirstStep && !isLastStep && (
              <>
                <button
                  type="button"
                  onClick={() => {
                    setMessage('')
                    changeStep(currentStep - 1)
                  }}
                >
                  <GrFormPrevious />
                  <span>Voltar</span> 
                </button>

                <button
                  type="submit"
                  onClick={(e) => validateBuyer(e, data)}
                >
                  <span>Enviar</span>
                  <FiSend />
                </button>
              </>
            )}

            {isFirstStep && (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
