import { useState } from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import { VisaCreditCard as VisaCard } from "react-fancy-visa-card";

const emails = ["username@gmail.com", "user02@gmail.com"];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
  const pay = (e, data) => {
    console.log(e);
    console.log(data);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <VisaCard
        onSubmit={pay}
        submitBtnTxt="Pay $350"
        frontCardColor="linear-gradient(50deg, #f3c680, hsla(179,54%,76%,1))"
      />
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
function Cart() {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div className="cat">
      <button onClick={handleClickOpen} class="buy__now">
        Buy now
      </button>
      <label htmlFor="">total</label>
      <div className="cart__container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}

export default Cart;
