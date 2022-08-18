import { useTheme } from "@emotion/react";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import useAuthorizationVerification from "../../Hooks/useAuthorizationVerification";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.primary.light,
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: "auto",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: "auto",
    width: "auto",
  },
}));

// const ButtonWrapper = styled('button')(({ theme }) => ({
//   border: 'none',
//   "&:hover": {
//     border: 'none'
//   }
// }));

const NavigationTypography = styled("div")(({ theme }) => ({

}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fefefe",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    color: "#fefefe",
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "32ch",
      },
    },
  },
}));

const NavBar = () => {
  const theme: any = useTheme();
  const authentication_status = useAuthorizationVerification();
  console.log(authentication_status);
  return (
    <AppBar
      position="fixed"
      color="secondary"
      sx={{ backgroundColor: theme.palette.primary.main }}
    >
      <Toolbar>
        <IconButton size="large" color="secondary">
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          ml={1}
          mr={2}
          sx={{ color: theme.palette.text.primary }}
        >
          Stonks
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={ 4 } sx={{ background: 'red' }}>
            <NavigationTypography>
              Market
            </NavigationTypography>
          </Grid>

          <Grid item xs={ 4 }>
            <NavigationTypography>
              Crypto
            </NavigationTypography>
          </Grid>

          <Grid item xs={ 4 }>
            <NavigationTypography>
              Stocks
            </NavigationTypography>
          </Grid>
        </Grid>
        <Search sx={{}}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
