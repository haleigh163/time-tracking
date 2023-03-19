import { useState, MouseEvent } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import { PAGES } from "../../data/constants";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const openNavMenuHandler = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const closeNavMenuHandler = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ height: "4em" }}>
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Typography
            variant="h3"
            noWrap
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
              // mr: 2,
              // display: { xs: "none", md: "flex" },
              // fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              color: "white",
            }}
          >
            TIME TRACKING
          </Typography>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-haspopup="true"
              onClick={openNavMenuHandler}
            >
              <GiHamburgerMenu />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={closeNavMenuHandler}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {PAGES.map((page, i) => (
                <MenuItem
                  key={page}
                  onClick={closeNavMenuHandler}
                  sx={{ "*": { textDecoration: "none" } }}
                  divider={i === PAGES.length - 1 ? false : true}
                >
                  <Link to={page === "New Record" ? "/new" : `/${page}`}>
                    <Typography
                      textAlign="center"
                      sx={{ textDecoration: "none", color: "white" }}
                      variant="h3"
                      py={0.5}
                      px={1}
                    >
                      {page}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {PAGES.map((page) => (
              <Link to={page === "New Record" ? "/new" : `/${page}`}>
                <Button
                  key={page}
                  onClick={closeNavMenuHandler}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
