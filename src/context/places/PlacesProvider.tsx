import { useEffect, useReducer } from 'react'
import { PlacesContext } from './PlacesContext'
import { placesReducer } from './placesReducer'
import { getUserLocation } from '../../helpers'
import { searchAPI } from '../../apis'
import { PlacesResponse } from '../../interfaces/places'

export interface PlacesState {
  isLoading: boolean,
  userLocation?: [number, number],
  isLoadingPlaces: boolean;
  places: PlacesResponse[]
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
  isLoadingPlaces: false,
  places: []
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const PlacesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

  useEffect(() => {
    getUserLocation()
      .then((coords) => dispatch({ type: 'setUserLocation', payload: coords }));
  }, []);

  const searchPlacesByTerm = async (query: string) => {
    if (query.length === 0) return []; // TODO: clear state
    if (!state.userLocation) throw new Error('No hay ubicacion del usuario');

    dispatch({ type: 'setLoadingPlaces' });

    const resp = await searchAPI.get<PlacesResponse[]>(`/search?q=${query}`);
    // console.log(resp.data[0].display_name);
    dispatch({ type: 'setPlaces', payload: resp.data });
    return resp.data;
  }

  return (
    <PlacesContext.Provider value={{
      ...state,
      // Methods
      searchPlacesByTerm
    }}>
      {children}
    </PlacesContext.Provider>
  );
}