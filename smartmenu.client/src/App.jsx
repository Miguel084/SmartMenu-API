import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import AppRoutes from '../Routes/index';


export default function App() {
  return (
    <>
     <RecoilRoot>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </RecoilRoot>
    </>
  );
}

