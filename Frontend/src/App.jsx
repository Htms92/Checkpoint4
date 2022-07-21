import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminLayout from "@components/admin/AdminLayout";
import ProtectedRoutes from "@components/ProtectedRoutes";
import UserContextProvider from "@components/UserContextProvider";

import AdminHome from "@pages/admin/AdminHome";
import AdminUsers from "@pages/admin/AdminUsers";
import Home from "@pages/Home";
import Contactus from "@pages/Contactus";
import Royalfamily from "@pages/Royalfamily";

import "@components/Icons";
import "./Style.css";

function App() {

  return (
    <div className="body">
      <UserContextProvider>

        <Router>
          <Routes>
            <Route path="/admin" element={<AdminLayout />}>
              <Route
                path=""
                element={
                  <ProtectedRoutes role="admin">
                    <AdminHome />
                  </ProtectedRoutes>
                }
              />

              <Route
                path="users"
                element={
                  <ProtectedRoutes role="admin">
                    <AdminUsers />
                  </ProtectedRoutes>
                }
              />
            </Route>

            <Route path="/" element={<Style />}>

              <Route exact path="" element={<Home />} />
              <Route path="royal-family" element={<Royalfamily />} />
              <Route path="royal-assets" element={<Royalassets />} />
              <Route path="contact" element={<Contact />} />

            </Route>

            <Route path="/" element={<BaseLayout bgClass="bg-white" />}>
              <Route path="/" element={<WithFooterLayout />}>
                
              </Route>
            </Route>
          </Routes>
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;