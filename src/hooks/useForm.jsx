import { useState } from "react";
import http from "../http";

export function useForm(steps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [statusMessage, setstatusMessage] = useState("");

  function changeStep(i, e) {
    if (e) e.preventDefault();
    if (i < 0 || i >= steps.length) return;

    setCurrentStep(i);
  }

  async function validateBuyer(event, data) {
    setstatusMessage("");
    if (event) event.preventDefault();
    await http
      .request({
        method: "post",
        url: `/auth`,
      })
      .then((response) => {
        if (response.data) {
          getCustomer(data, event)
        }
      })
      .catch((error) => console.log(error));
  }

  async function getCustomer(data, event){
    await http
    .request({
      method: "get",
      url: `/sales/${data.email}`,
    })
    .then((response) => {
      const result = response.data.status !== "NOK";
      if (result) {
        addCustomers(
          data,
          response.data.status,
          response.data.transactionCode,
          event
        );
      } else {
        setstatusMessage(response.data.statusMessage);
      }
    });
  }

  async function addCustomers(data, status, transactionCode, event) {
    await http
      .post("/", {
        name: data.name,
        email: data.email,
        phone: data.phone,
        date_birth: data.date_birth,
        status: status,
        transaction_code: transactionCode,
      })
      .then((response) => {
        if(response{
          console.log(response.data)
        }
      })
      .catch((error) => console.log("Erro =>", error));
  }

  return {
    currentStep,
    currentComponent: steps[currentStep],
    changeStep,
    isLastStep: currentStep + 1 === Number(steps.length) ? true : false,
    isFirstStep: currentStep === 0 ? true : false,
    validateBuyer,
    statusMessage,
  };
}
