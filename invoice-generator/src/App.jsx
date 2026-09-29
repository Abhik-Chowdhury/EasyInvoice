import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menubar from "./components/Menubar";
import LandingPage from "./pages/LandingPage/LandingPage";
import Dashboard from "./pages/Dashboard";
import MainPage from "./pages/MainPage";
import PreviewPage from "./pages/PreviewPage";
import { Toaster } from 'sonner';
import UserSyncHandler from "./components/UserSyncHandler";
import { RedirectToSignIn, Show } from "@clerk/react";
const App = () => {
  return (
    <BrowserRouter>

      <UserSyncHandler />
      <Menubar />
      <Toaster />
      <Routes>

        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={
          <>
            <Show when="signed-in">
              <Dashboard />
            </Show>
            <Show when="signed-out">
              <RedirectToSignIn />
            </Show>
          </>
        } />

        <Route path="/generate" element={
          <>
            <Show when="signed-in">
              <MainPage />
            </Show>
            <Show when="signed-out">
              <RedirectToSignIn />
            </Show>
          </>
        } />
        <Route path="/preview" element={
          <>
            <Show when="signed-in">

              <PreviewPage />
            </Show>
            <Show when="signed-out">
              <RedirectToSignIn/>
            </Show>
          </>

        } />

      </Routes>
    </BrowserRouter>
  )
}

export default App;