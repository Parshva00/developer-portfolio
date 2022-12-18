import { Drawer } from "@mui/material";
import React from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { FaFolderOpen, FaUser } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { IoClose, IoHomeSharp, IoMenuSharp } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { HashLink as NavLink } from "react-router-hash-link";
import { headerData } from "../../../data/header-data";
import { ThemeDataType } from "../../../types";
import "./navbar.css";
const Fade = require("react-reveal/Fade");

export interface NavbarUIPops {
  theme: ThemeDataType;
  shortname: Function;
  classes: any;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
  open: boolean;
  changeTheme: () => void;
  isDark: boolean;
}

function NavbarUI({
  theme,
  shortname,
  classes,
  handleDrawerOpen,
  handleDrawerClose,
  open,
  changeTheme,
  isDark,
}: NavbarUIPops) {
  return (
    <div className='navbar'>
      <div className='navbar--container'>
        <h1 style={{ color: theme.primary }}>{shortname(headerData.name)}</h1>

        <IoMenuSharp
          className={classes.navMenu}
          onClick={handleDrawerOpen}
          aria-label='Menu'
        />
      </div>
      <Drawer
        variant='temporary'
        onClose={(event, reason) => {
          if (reason !== "backdropClick") {
            handleDrawerClose();
          }
        }}
        anchor='left'
        open={open}
        classes={{ paper: classes.MuiDrawer }}
        className='drawer'
        disableScrollLock={true}>
        <div className='div-closebtn'>
          <IoClose
            onClick={handleDrawerClose}
            onKeyDown={(e) => {
              if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
                handleDrawerClose();
              }
            }}
            className={classes.closebtnIcon}
            role='button'
            tabIndex={0}
            aria-label='Close'
          />
        </div>
        <br />

        <div onClick={handleDrawerClose}>
          <div className='navLink--container'>
            <Fade left>
              <NavLink to='/' smooth={true}>
                <div className={classes.drawerItem}>
                  <IoHomeSharp className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Home</span>
                </div>
              </NavLink>
            </Fade>

            <Fade left>
              <NavLink to='/#about' smooth={true}>
                <div className={classes.drawerItem}>
                  <FaUser className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>About</span>
                </div>
              </NavLink>
            </Fade>

            <Fade left>
              <NavLink to='/#resume' smooth={true}>
                <div className={classes.drawerItem}>
                  <HiDocumentText className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Resume</span>
                </div>
              </NavLink>
            </Fade>

            <Fade left>
              <div className={classes.drawerItem} onClick={changeTheme}>
                {isDark ? (
                  <BsFillSunFill className={classes.drawerIcon} />
                ) : (
                  <BsFillMoonFill className={classes.drawerIcon} />
                )}
                <span className={classes.drawerLinks}>
                  {isDark ? "Light" : "Dark"}
                </span>
              </div>
            </Fade>

            <Fade left>
              <NavLink to='/#blog' smooth={true}>
                <div className={classes.drawerItem}>
                  <FaFolderOpen className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Blog</span>
                </div>
              </NavLink>
            </Fade>

            <Fade left>
              <NavLink to='/#contacts' smooth={true}>
                <div className={classes.drawerItem}>
                  <MdPhone className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Contact</span>
                </div>
              </NavLink>
            </Fade>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default NavbarUI;