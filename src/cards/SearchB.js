import '../css/SearchB.css';

const SearchB = () => {
  return (
    <div className='Container-SearchB'>

      <input type="text" className='from-control' placeholder='Search' />

      <button type="button" class="btn btn-outline-danger">Search</button>

      <div class="dropdown">
        <button
          class="btn btn-primary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          Category
        </button>

        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li><a class="dropdown-item" href="/">Action</a></li>
          <li><a class="dropdown-item" href="/">Another action</a></li>
          <li><a class="dropdown-item" href="/">Something else here</a></li>
        </ul>
      </div>
        
    </div>
  )
}

export default SearchB