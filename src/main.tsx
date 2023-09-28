import './main.css'
import Header from './componentes/header/Header'
// import Footer from './componentes/footer/Footer'
import Footer1 from './componentes/footer1/Footer'
import Main from './componentes/main/Main'


import React from 'react'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element:<>
    <Header />
    <Main />
    <Footer1/>
    </>,
  },
  {
    path: "/",
    element:<>
    <Header />
    <div className='content_main'>Home</div>,
    <Footer1/>
    </> 
  },
  {
    path: "/noticias",
    element:<>
    <Header />
    <div className='content_main'>Página de Notícias!</div>
    <Footer1/>
    </>,
  },
  {
    path: "/sobre",
    element:<>
    <Header />
    <div className='content_main'>Página Sobre!</div>
    <Footer1/>
    </>,
  },
  {
    path: "/contato",
    element:<>
    <Header />
    <div className='content_main'>Página de Contato!</div>
    <Footer1/>
    </> ,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)