import React from 'react';


import Addform from './components/Addform';

import Consultacat from './components/Addcon_cat';
import Consultaent from './components/Addcon_ent';
import Consultapro from './components/Addcon_pro';
import Consultausu from './components/Addcon_usu';

import Editarcat from './components/editar_cat';
import Editarent from './components/editar_ent';
import Editarpro from './components/editar_pro';
import Editarusu from './components/Editar_usu';

import Graficaent from './components/Grafica_ent';
import Informeent from './components/Informe_ent';

import Registrocat from './components/Registro_cat';
import Registroent from './components/Registro_ent';
import Registropro from './components/Registro_pro';
import Registrousu from './components/Registro_usu';

import Login from './components/Login';


import { BrowserRouter, Route,Routes } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Addform />} />
        <Route path='/bie' element={<Addform />} />

        <Route path='/concat' element={<Consultacat />} />
        <Route path='/conent' element={<Consultaent />} />
        <Route path='/conpro' element={<Consultapro/>} />
        <Route path='/conusu' element={<Consultausu/>} />

        <Route path='/edicat' element={<Editarcat />} />
        <Route path='/edient' element={<Editarent />} />
        <Route path='/edipro' element={<Editarpro />} />
        <Route path='/ediusu' element={<Editarusu />} />

        <Route path='/graent' element={<Graficaent />} />
        <Route path='/infent' element={<Informeent />} />

        <Route path='/regcat' element={<Registrocat />} />
        <Route path='/regent' element={<Registroent />} />
        <Route path='/refpro' element={<Registropro />} />
        <Route path='/regusu' element={<Registrousu />} />

        <Route path='/log' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;