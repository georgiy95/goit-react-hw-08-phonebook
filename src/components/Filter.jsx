import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/slice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const filter = e.currentTarget.value;
    dispatch(setFilter(filter));
  };

  return (
    <>
      <span className="title">Find contacts by name</span>
      <input className="input" type="text" onChange={handleFilterChange} placeholder="search"/>
    </>
  );
};
