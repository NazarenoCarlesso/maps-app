import { Input } from '@chakra-ui/react';
import { ChangeEvent, useContext, useRef } from 'react';
import { PlacesContext } from '../context';

export const SearchBar = () => {
  const debounceRef = useRef<NodeJS.Timeout>();
  const { searchPlacesByTerm } = useContext(PlacesContext)

  const onQueryChange = ( event: ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value);
    if (debounceRef.current || !event.target.value)
      clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      // TODO: Buscar o ejecutar consulta
      // console.log('debounceRef value:', event.target.value);
      searchPlacesByTerm(event.target.value);
    }, 1000);
  };

  return (
    <div className='search-container'>
      <Input
        name='search'
        type='text'
        className='form-control'
        placeholder='Buscar lugar...'
        focusRingColor='rgb(90, 202, 233)'
        onChange={onQueryChange}
      />
    </div>
  );
}