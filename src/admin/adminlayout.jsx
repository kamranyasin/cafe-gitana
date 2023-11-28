import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";

import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Logo from "../Asserts/Logo.png";
//css
import "./admin.css";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

// import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
// import Logo from "../../src/Asserts/Logotwo.png";

import { Link, useHistory } from "react-router-dom";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { FiLogOut } from "react-icons/fi";
import { RiStore2Line } from "react-icons/ri";
import { TiThMenu } from "react-icons/ti";
import { FiStar } from "react-icons/fi";

import CafeName from "../Asserts/admin-logo.png";
import { AiOutlineShop } from "react-icons/ai";
import { BiFoodMenu } from "react-icons/bi";
import ListAltIcon from "@mui/icons-material/ListAlt";

import { FaTasks } from "react-icons/fa";

import { BiSupport } from "react-icons/bi";
import { FaJediOrder } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { BiStore } from "react-icons/bi";
// import axiosInstance from "../axios-Instance";
const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
      // backgroundColor: "#862222",
      // backgroundColor: "black",
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      // backgroundColor: "#862222",
      backgroundColor: "white",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,

  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "white",
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
    // backgroundColor: "#F5F5F5",
    backgroundColor: "white",
    overflow: "hidden",
  },
  rootMenu: {
    width: 373,
    padding: "15px",
  },
}));

function ResponsiveDrawer(props) {
  const { t, i18n } = useTranslation();

  const history = useHistory();
  console.log(props);
  // const handlelogout = props.logout;
  //const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [currentpath, setcurrentpath] = React.useState("/adminOurSpeciality");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [values, setvalues] = React.useState({
    googleData: [],
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handlelogout = () => {
    localStorage.removeItem("logintoken");
    window.location.href = "/AdminLogin";
  };
  const drawer = (
    <div className="space">
      <div
        className={classes.toolbar}
        style={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={CafeName} className="admin-cafename" />
      </div>

      <List>
        <ListItem
          button
          key="/Username"
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "50px",
          }}
        >
          <ListItemText className="text-center">
            {/* <div className="row">
           
              <img src={Logo} alt="Dashbaord Logo" className="dashbaordLogo" />
            </div> */}
            {/* <h2 className="username" style={{ padding: "15px" }}>
          
              <span className="userName">Hi Admin</span>
            </h2> */}
          </ListItemText>
        </ListItem>

        <Link to="/adminOurSpeciality">
          <ListItem
            onClick={() => setcurrentpath("/adminOurSpeciality")}
            button
            key="/user"
            className="Center"
            style={{
              display: "flex",
              justifyContent: "center",
              borderRight:
                currentpath === "/adminOurSpeciality"
                  ? "6px solid #000"
                  : "6px solid transparent",
            }}
          >
            <ListItemIcon
              style={{
                fontSize: "25px",
                color:
                  currentpath === "/adminOurSpeciality" ? "#000" : "#828282",
              }}
            >
              <FiStar size={24} color="black" />{" "}
            </ListItemIcon>
            <ListItemText
              style={{
                width: "76px",
                color:
                  currentpath === "/adminOurSpeciality" ? "#000" : "#828282",
              }}
            >
              <span className="content">{t("Navsss.6")}</span>
            </ListItemText>
          </ListItem>
        </Link>

        <Link to="/adminStore">
          <ListItem
            onClick={() => setcurrentpath("/adminStore")}
            button
            key="/user"
            className="Center"
            style={{
              display: "flex",
              justifyContent: "center",
              borderRight:
                currentpath === "/adminStore"
                  ? "6px solid #000"
                  : "6px solid transparent",
            }}
          >
            <ListItemIcon
              style={{
                fontSize: "25px",
                color: currentpath === "/adminStore" ? "#000" : "#828282",
              }}
            >
              <AiOutlineShop size={24} color="black" />{" "}
            </ListItemIcon>
            <ListItemText
              style={{
                width: "76px",
                color: currentpath === "/adminStore" ? "#000" : "#828282",
              }}
            >
              <span className="content">{t("Navssss.7")}</span>
            </ListItemText>
          </ListItem>
        </Link>
        <Link to="/adminmenuorder">
          <ListItem
            onClick={() => setcurrentpath("/adminmenuorder")}
            button
            key="/user"
            className="Center"
            style={{
              display: "flex",
              justifyContent: "center",
              borderRight:
                currentpath === "/adminmenuorder"
                  ? "6px solid #000"
                  : "6px solid transparent",
            }}
          >
            <ListItemIcon
              style={{
                fontSize: "25px",
                color: currentpath === "/adminmenuorder" ? "#000" : "#828282",
              }}
            >
              <BiFoodMenu size={24} color="black" />{" "}
            </ListItemIcon>
            <ListItemText
              style={{
                width: "76px",
                color: currentpath === "/adminmenuorder" ? "#000" : "#828282",
              }}
            >
              <span className="content">{t("menuorder.111")}</span>
            </ListItemText>
          </ListItem>
        </Link>
        <Link to="/storepickup">
          <ListItem
            onClick={() => setcurrentpath("/storepickup")}
            button
            key="/user"
            className="Center"
            style={{
              display: "flex",
              justifyContent: "center",
              borderRight:
                currentpath === "/storepickup"
                  ? "6px solid #000"
                  : "6px solid transparent",
            }}
          >
            <ListItemIcon
              style={{
                fontSize: "25px",
                color: currentpath === "/storepickup" ? "#000" : "#828282",
              }}
            >
              <BiStore size={24} color="black" />{" "}
            </ListItemIcon>
            <ListItemText
              style={{
                width: "76px",
                color: currentpath === "/storepickup" ? "#000" : "#828282",
              }}
            >
              <span className="content">
                {/* {t("storepickup.1111")} */}
                Store pickup Order
              </span>
            </ListItemText>
          </ListItem>
        </Link>
        <Link to="/ordersQueue">
          <ListItem
            onClick={() => setcurrentpath("/ordersQueue")}
            button
            key="/user"
            className="Center"
            style={{
              display: "flex",
              justifyContent: "center",
              borderRight:
                currentpath === "/ordersQueue"
                  ? "6px solid #000"
                  : "6px solid transparent",
            }}
          >
            <ListItemIcon
              style={{
                fontSize: "25px",
                color: currentpath === "/ordersQueue" ? "#000" : "#828282",
              }}
            >
              <FaJediOrder size={24} color="black" />{" "}
            </ListItemIcon>
            <ListItemText
              style={{
                width: "76px",
                color: currentpath === "/ordersQueue" ? "#000" : "#828282",
              }}
            >
              <span className="content">{t("orqueue.112")}</span>
            </ListItemText>
          </ListItem>
        </Link>
        <Link to="/support-chats">
          <ListItem
            onClick={() => setcurrentpath("/support-chats")}
            button
            key="/user"
            className="Center"
            style={{
              display: "flex",
              justifyContent: "center",
              borderRight:
                currentpath === "/support-chats"
                  ? "6px solid #000"
                  : "6px solid transparent",
            }}
          >
            <ListItemIcon
              style={{
                fontSize: "25px",
                color: currentpath === "/support-chats" ? "#000" : "#828282",
              }}
            >
              <BiSupport size={24} color="black" />{" "}
            </ListItemIcon>
            <ListItemText
              style={{
                width: "76px",
                color: currentpath === "/support-chats" ? "#000" : "#828282",
              }}
            >
              <span className="content">{t("supchat.113")}</span>
            </ListItemText>
          </ListItem>
        </Link>
        <Link to="/termAndCondition">
          <ListItem
            onClick={() => setcurrentpath("/termAndCondition")}
            button
            key="/user"
            className="Center"
            style={{
              display: "flex",
              justifyContent: "center",
              borderRight:
                currentpath === "/termAndCondition"
                  ? "6px solid #000"
                  : "6px solid transparent",
            }}
          >
            <ListItemIcon
              style={{
                fontSize: "25px",
                color: currentpath === "/termAndCondition" ? "#000" : "#828282",
              }}
            >
              <FaTasks size={24} color="black" />{" "}
            </ListItemIcon>
            <ListItemText
              style={{
                width: "76px",
                color: currentpath === "/termAndCondition" ? "#000" : "#828282",
              }}
            >
              <span className="content">{t("termscond.119")}</span>
            </ListItemText>
          </ListItem>
        </Link>
      </List>
      <List>
        <ListItem
          className="menutextcolor"
          button
          key="/user"
          onClick={(e) => {
            // localStorage.removeItem("loginToken");
            // history.push("/login");
            handlelogout(e);
          }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ListItemIcon>
            {" "}
            <FiLogOut size={24} color="black" />
          </ListItemIcon>
          <ListItemText>
            <span className="content">{t("logout.114")}</span>
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;
  //   useEffect(() => {
  //     console.log(history.location.pathname);
  //     setcurrentpath(history.location.pathname);
  //   }, [history.location.pathname]);
  console.log(currentpath);
  //   useEffect(() => {
  //     const token = localStorage.getItem("logintoken");
  //     console.log("useeffect");
  //     axiosInstance
  //       .get(`Register/getAll/${token}`)
  //       .then((res) => {
  //         setvalues({ googleData: res.data.item });
  //         console.log(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
        style={{ backgroundColor: "white" }}
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "flex-end",
            backgroundColor: "#000",
          }}
        >
          {/* <Badge badgeContent={4} color="secondary">
            <AiOutlineShoppingCart color="white" size={26} />
          </Badge> */}

          <IconButton
            style={{ color: "black" }}
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            {/* <MenuIcon /> */}
            <TiThMenu color="white" />
          </IconButton>
          <Typography variant="h6" noWrap>
            {/* <img
              src={Message}
              className="margin cursor"
              onClick={handleClick}
            /> */}

            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              className={classes.rootMenu}
            >
              <div className="row">
                <h2 className="message">2 New Message</h2>
              </div>
              <MenuItem
                // style={{
                //   height: "66px",
                //   width: "317px",
                //   backgroundColor: "#E9FFDA",
                //   borderLeft: " 2px solid  #36BC06 ",
                // }}
                className="menu-item"
              >
                <Typography variant="inherit">
                  <div className="row">
                    <h5 className="notification-heading">
                      {" "}
                      New Data Alert: Block 3B
                    </h5>
                    <h5 className="notification-para">
                      Click to view & approve
                    </h5>
                  </div>
                </Typography>
              </MenuItem>
              <MenuItem className="menu-item">
                <Typography variant="inherit">
                  <div className="row">
                    <h5 className="notification-heading">
                      {" "}
                      New Data Alert: Block 3B
                    </h5>
                    <h5 className="notification-para">
                      Click to view & approve
                    </h5>
                  </div>
                </Typography>
              </MenuItem>
              <MenuItem className="menu-item-disable">
                <Typography variant="inherit">
                  <div className="row">
                    <h5 className="notification-heading">
                      {" "}
                      New Data Alert: Date of Harvest Block 2A
                    </h5>
                    <h5 className="notification-para">
                      Click to view & approve
                    </h5>
                  </div>
                </Typography>
              </MenuItem>
              <MenuItem className="menu-item-disable">
                <Typography variant="inherit">
                  <div className="row">
                    <h5 className="notification-heading">
                      {" "}
                      New Data Alert: Block 3B
                    </h5>
                    <h5 className="notification-para">
                      Click to view & approve
                    </h5>
                  </div>
                </Typography>
              </MenuItem>
            </Menu>
            {/* <img src={BellIcon} className="margin cursor" /> */}
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            //container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
