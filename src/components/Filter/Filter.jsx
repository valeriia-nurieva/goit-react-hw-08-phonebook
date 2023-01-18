import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { FilterTitle, FilterInput } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <FilterTitle>
      Find contacts by name
      <FilterInput type="text" value={filter} onChange={changeFilter} />
    </FilterTitle>
  );
};

export default Filter;
