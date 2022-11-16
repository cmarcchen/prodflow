import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import Table from "./components/Table";
import Modal from "./components/Modal";
import DescriptionCard from "./components/DescriptionCard";
import FormLayout from "./components/FormLayout";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact strict path="/" element={<Dashboard />} />
        <Route path="/form" element={<FormLayout />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/production" element={<Table />}>
          <Route
            path="new"
            element={
              <Modal>
                <FormLayout />
              </Modal>
            }
          />
          <Route
            path=":productionId"
            element={
              <Modal>
                <DescriptionCard />
              </Modal>
            }
          >
            <Route
              path="edit"
              element={
                <Modal>
                  <FormLayout />
                </Modal>
              }
            />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
