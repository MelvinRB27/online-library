import { useState } from 'react';
import '../css/SearchB.css';
import {Link} from 'react-router-dom';

import Books from './books';

const SearchBook = () => {

  const [category, setCategory] = useState("?category=programacion");
  let search = "";

  const userData = JSON.parse(window.localStorage.getItem('userData'))


  return (
    <div>

      <div className='Container-SearchB'>
    
        <div className='inputSearch'>
          <input type="text" className='from-control' placeholder='Search' onChange={(event) => search = "?keyword="+event.target.value}/>
          <button type="button" className="btn btn-outline-danger" onClick={() => setCategory(search)}>Search</button>
          
        </div>

        <div>
          <select className="btn btn-primary" onChange={(event) => setCategory(event.target.value)} required>
              <option value="?category=programacion"> Programming </option>
              <option value="?category=libros_programacion"> Programming 2 </option>
              <option value="?category=arte-bellas-artes"> Art - Fine Arts </option>
              <option value="?category=ciencia"> Science </option>
              <option value="?category=comics"> Comics </option>
              <option value="?category=cine"> Cinema </option>
              <option value="?category=control_de_versiones"> Version Control </option>
              <option value="?category=desarrollo_web"> Web Development	 </option>
              <option value="?category=diseno_3d"> Design / 3D </option>
              <option value="?category=retroinformatica-biblioteca"> Retroinformatics </option>
              <option value="?category=robotica"> Robotics </option>
              <option value="?category=software-general"> Software General </option>
              <option value="?category=idiomas"> Languages </option>
              <option value="?category=musica-biblioteca"> Music </option>
              <option value="?category=ajedrez"> Chess </option>
              <option value="?category=libros_aspecotos_legales"> Legal Aspects </option>
              <option value="?category=bases_de_datos"> Databases </option>
              <option value="?category=ensayos_y_novelas"> Essays / Novels	 </option>
              <option value="?category=filosofia-biblioteca"> Philosophy </option>
              <option value="?category=historia-biblioteca"> History </option>
              <option value="?category=marketing_y_business"> Marketing / Business	 </option>
          </select>
        </div>
        {userData && userData.data.Rol === "Admin" ? (<Link to="/add-book" className="btn btn-dark">Add book</Link>): <></>}
      </div>

      <br/>
      <Books title url={category} />

    </div>
  )

}

export default SearchBook