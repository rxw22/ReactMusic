import React from "react";
import AppFooter from "components/app-footer";
import AppHeader from "components/app-header";
import { BrowserRouter } from "react-router-dom";
import Routes from "router";

export default function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <Routes />
      <AppFooter />
    </BrowserRouter>
  );
}
