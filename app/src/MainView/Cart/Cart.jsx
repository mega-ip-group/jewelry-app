import { useState, useEffect, forwardRef } from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import { VisaCreditCard as VisaCard } from "react-fancy-visa-card";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const emails = ["username@gmail.com", "user02@gmail.com"];
const URl = "http://localhost:3002";

function SimpleDialog(props) {
  const { onClose, selectedValue, open, total, setNotifcation, setData } =
    props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const pay = (e, data) => {
    handleClose();
    setNotifcation(true);
    fetch(URl + "/user/removeCart", {
      method: "POST", // or 'PUT',
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("user"),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          setData([]);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <VisaCard
        onSubmit={pay}
        submitBtnTxt={`total ${total}$`}
        frontCardColor="linear-gradient(50deg, #f3c680, hsla(179,54%,76%,1))"
      />
    </Dialog>
  );
}
//removeCart
SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
function Cart() {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(emails[1]);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [openNotifcation, setOpenNotifcation] = useState(false);
  const [notification, setNotifcation] = useState("");
  const [error, setError] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  useEffect(() => {
    fetch(URl + "/user/get-the-cart", {
      method: "POST", // or 'PUT',
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("user"),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          let sum = 0;
          data.data.map((item) => {
            sum += item.price;
          });
          setTotal(sum);
          setData(data.data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [data]);
  return (
    <div className="cat">
      <Snackbar open={openNotifcation} autoHideDuration={6000}>
        <Alert severity={"success"} sx={{ width: "100%" }}>
          Congrats!!
        </Alert>
      </Snackbar>
      <button onClick={handleClickOpen} className="buy__now">
        Buy now
      </button>
      <label htmlFor="">{total}$</label>
      <div className="cart__container">
        {data.map((item) => {
          return (
            <Card
              url={item.url}
              description={item.description}
              price={item.price}
            />
          );
        })}
      </div>
      <SimpleDialog
        total={total}
        selectedValue={selectedValue}
        open={open}
        setNotifcation={setNotifcation}
        onClose={handleClose}
        setData={setData}
      />
    </div>
  );
}

export default Cart;
