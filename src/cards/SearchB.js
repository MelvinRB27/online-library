import '../css/SearchB.css';

const SearchB = () => {
  return (
    <div className='Container-SearchB'>
        < input type="text" className='from-control' placeholder='Search' />
        <button type="button" class="btn btn-outline-danger">Search</button>
    </div>
  )
}

export default SearchB