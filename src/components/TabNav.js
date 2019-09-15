import React from "react";
import { Tab, Menu, Icon, MenuHeader } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import styled from "styled-components";
// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {
   return( <>
           <Menu>
            <Menu.Item><NavLink to="/">Home</NavLink></Menu.Item>
            <Menu.Item><NavLink to="/characterList">Characters</NavLink></Menu.Item>
            <Menu.Item><NavLink to="/location">Location</NavLink></Menu.Item>
            </Menu>
            </>
            );
};
