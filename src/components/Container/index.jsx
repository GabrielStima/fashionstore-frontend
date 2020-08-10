import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Alert from "../Alert";
import "./styles.css";

function Container(props) {
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [autoHide, setAutoHide] = useState(2000);
  const [showAlert, setShowAlert] = useState(false);

  function callbackAlert(status, message, autoHide) {
    setStatus(status);
    setMessage(message);
    setAutoHide(autoHide);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  }
  return (
    <div>
      {showAlert && (
        <Alert status={status} message={message} autoHideDuration={autoHide} />
      )}
      <Header showAlertRefresh={showAlert} />
      <div className="container-default">
        <props.component props={props} callbackAlert={callbackAlert} />
      </div>
      <Footer />
    </div>
  );
}

export default Container;
