import React, { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function ContainerAlert({ status = "", message, autoHideDuration = 2000 }) {
  const [open, setOpen] = useState(true);
  function closeAlert() {
    setOpen(false);
  }

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      autoHideDuration={autoHideDuration}
      onClose={closeAlert}
      open={open}
    >
      <Alert severity={status}>{message}</Alert>
    </Snackbar>
  );
}

export default ContainerAlert;
