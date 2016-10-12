import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import EventsReducer from './events_reducer';
import TypesReducer from './types_reducer';
import CategoriesReducer from './categories_reducer';
import FiltersReducer from './filters_reducer';
import BookmarksReducer from './bookmarks_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  events: EventsReducer,
  types: TypesReducer,
  categories: CategoriesReducer,
  filters: FiltersReducer,
  bookmarks: BookmarksReducer
});

export default RootReducer;
