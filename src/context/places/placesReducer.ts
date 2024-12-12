import { PlacesState } from './PlacesProvider';

type PlacesAction = {
  type: 'SetUserLocation',
  payload: [number, number],
};

export const placesReducer = (state: PlacesState, action: PlacesAction): PlacesState => {
  switch (action.type) {
    case 'SetUserLocation':
      return {
        isLoading: false,
        userLocation: action.payload
      }
    default:
      return {
        ...state,
        isLoading: false,
        userLocation: undefined
      }
  }
};