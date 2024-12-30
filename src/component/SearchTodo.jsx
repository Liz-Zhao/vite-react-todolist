import { useDispatch } from 'react-redux';
import { searchTodo } from '../actions/todoAction';

const SearchTodo = () => {

    const dispatch = useDispatch();

    const handleSearch = (e) => {
      dispatch(searchTodo(e.target.value));
    }
    
  return (
    <>
       <label htmlFor="search"></label>
       <input type="text" id="search" onChange={(e) => handleSearch(e)} className="search-input" placeholder="请输入代办名称" />
    </>
  )
}

export default SearchTodo
