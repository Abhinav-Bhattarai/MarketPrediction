import {
  AppBar,
  Autocomplete,
  Grid,
  TextField,
  Toolbar,
  useTheme,
} from "@mui/material";
// import { Container } from "@mui/system";
import React from "react";

interface PROPS {}

interface ComboBoxProps {
  option: string[];
  label: string;
}

export const ComboBox: React.FunctionComponent<ComboBoxProps> = (props) => {
  const { option, label } = props;
  const theme = useTheme();

  return (
    <Autocomplete
      disablePortal
      options={option}
      // clearIcon={}
      renderInput={(params) => (
        <TextField
          {...params}
          sx={{ backgroundColor: theme.palette.primary.light, borderRadius: 1 }}
          color="secondary"
          label={label}
          variant="outlined"
        />
      )}
      sx={{
        width: "24%",
        "& .css-qzbt6i-MuiButtonBase-root-MuiIconButton-root-MuiAutocomplete-popupIndicator":
          {
            color: theme.palette.text.secondary,
          },
        "& .css-i4bv87-MuiSvgIcon-root": {
          color: theme.palette.text.secondary,
        },
        "& .css-ptiqhd-MuiSvgIcon-root": {
          color: theme.palette.text.secondary,
        },
      }}
    />
  );
};

export const FilterBar: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const theme = useTheme();

  return (
    <AppBar
      position="sticky"
      color="secondary"
      sx={{ backgroundColor: theme.palette.primary.main }}
    >
      <Toolbar sx={{ justifyContent: "space-between", padding: 1, pt: 3 }}>
        {children}
      </Toolbar>
    </AppBar>
  );
};

const Crypto: React.FunctionComponent<PROPS> = (props) => {
  // const {} = props;
  return (
    <React.Fragment>
      <Grid
        container
        sx={{
          width: "100%",
          height: 200,
          marginTop: 0.1,
          position: "relative",
        }}
      ></Grid>
    </React.Fragment>
  );
};

export default Crypto;
