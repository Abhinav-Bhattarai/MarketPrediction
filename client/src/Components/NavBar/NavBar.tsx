import { useTheme } from "@emotion/react";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import useAuthorizationVerification from "../../Hooks/useAuthorizationVerification";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { NavLink } from "react-router-dom";

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

const pages = [
  { name: "Cryptocurrencies", open: false },
  { name: "Stocks", open: false },
  { name: "Market", open: false },
];

const NavBar = () => {
  const theme: any = useTheme();
  const authentication_status = useAuthorizationVerification();
  console.log(authentication_status);
  const [navigation, setNavigation] =
    useState<{ name: string; open: boolean }[]>(pages);

  const Navigate = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    type: string
  ) => {
    const dummy = [...pages];
    const ParsedData = dummy.map((elm) => {
      if (elm.name === type) {
        elm.open = true;
      }
      return elm;
    });
    setNavigation(ParsedData);
  };
  return (
    <AppBar
      position="sticky"
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

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            ml: 5,
            mr: 2,
          }}
        >
          {navigation.map((page) => (
            <NavLink to={`/${page.name.toLowerCase()}`} style={{ textDecoration: "none" }}>
              {({ isActive }) => (
                <Button
                  key={page.name}
                  onClick={(event) => Navigate(event, page.name)}
                  sx={{
                    color: isActive ? theme.palette.secondary.main : theme.palette.text.primary,
                    display: "block",
                    mx: 1,
                    fontWeight: "500",
                    textTransform: "capitalize",
                    transition: "0.3s",
                    fontSize: 16,
                    "&:hover": {
                      color: theme.palette.secondary.main,
                    },
                  }}
                >
                  {page.name}
                </Button>)
              }
            </NavLink>
          ))}
        </Box>
        <Search>
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
