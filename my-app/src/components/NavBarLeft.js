import TextField from "@material-ui/core/TextField";
import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { ShipmentContext } from "../contexts/ShipmentContext";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import plLocale from "date-fns/locale/pl";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0.5),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(0.5),
  },
}));

const NavBarLeft = () => {
  const classes = useStyles();

  const handleChangeTrader = (event) => {
    setTrader(event.target.value);
  };

  const handleLoadingDateChange = (date) => {
    setSelectedLoadingDate(date);
  };

  const handleUnloadingDateChange = (date) => {
    setSelectedUnloadingDate(date);
  };

  const { addShipment } = useContext(ShipmentContext);
  const [trader, setTrader] = useState("");
  const [client, setClient] = useState("");
  const [route, setRoute] = useState("");
  const [goods, setGoods] = useState("");
  const [haulier, setHaulier] = useState("");
  const [notes, setNotes] = useState("");
  const [selectedLoadingDate, setSelectedLoadingDate] = useState(new Date());
  const [selectedUnloadingDate, setSelectedUnloadingDate] = useState(
    new Date()
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    addShipment(
      trader,
      client,
      route,
      goods,
      haulier,
      notes,
      selectedLoadingDate,
      selectedUnloadingDate
    );
    setTrader("");
    setClient("");
    setRoute("");
    setGoods("");
    setHaulier("");
    setNotes("");
    setSelectedLoadingDate(new Date());
    setSelectedUnloadingDate(new Date());
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={plLocale}>
      <div className="sideNav">
        <form onSubmit={handleSubmit}>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">
              Handlowiec
            </InputLabel>
            <Select
              className="formInput"
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={trader}
              onChange={handleChangeTrader}
            >
              <MenuItem value="">
                <em>Brak</em>
              </MenuItem>
              <MenuItem value={"Tommy Slavko"}>Tommy Slavko</MenuItem>
              <MenuItem value={"Filipek"}>Filipek</MenuItem>
              <MenuItem value={"David Leviosa"}>David Leviosa</MenuItem>
              <MenuItem value={"Inny"}>Inny</MenuItem>
            </Select>
          </FormControl>
          <TextField
            className="formInput"
            value={client}
            onChange={(e) => setClient(e.target.value)}
            type="text"
            id="outlined-basic"
            label="Klient"
            variant="filled"
            size="small"
            margin="dense"
          />
          <TextField
            className="formInput"
            value={haulier}
            onChange={(e) => setHaulier(e.target.value)}
            type="text"
            id="outlined-basic"
            label="Przewoźnik"
            variant="filled"
            size="small"
            margin="dense"
          />
          <TextField
            className="formInput"
            value={route}
            onChange={(e) => setRoute(e.target.value)}
            type="text"
            id="outlined-basic"
            label="Trasa"
            variant="filled"
            size="small"
            margin="dense"
          />
          <TextField
            className="formInput"
            value={goods}
            onChange={(e) => setGoods(e.target.value)}
            type="text"
            id="outlined-basic"
            label="Towar"
            variant="filled"
            size="small"
            margin="dense"
          />
          <KeyboardDatePicker
            className="formInput"
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Data załadunku"
            value={selectedLoadingDate}
            onChange={handleLoadingDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
          <KeyboardDatePicker
            className="formInput"
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Data rozładunku"
            value={selectedUnloadingDate}
            onChange={handleUnloadingDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
          <TextField
            className="formInput"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            type="text"
            id="outlined-basic"
            label="Dodatkowe notatki"
            variant="filled"
            size="small"
            margin="dense"
          />
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            className="addShipmentButton"
            endIcon={<AddCircleOutlineIcon />}
          >
            Dodaj ładunek
          </Button>
        </form>
      </div>
    </MuiPickersUtilsProvider>
  );
};

export default NavBarLeft;
