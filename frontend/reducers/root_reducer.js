import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import EventsReducer from './events_reducer';
import TypesReducer from './types_reducer';
import CategoriesReducer from './categories_reducer';
import FiltersReducer from './filters_reducer';
import BookmarksReducer from './bookmarks_reducer';
import TicketsReducer from './tickets_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  filters: FiltersReducer,
  events: EventsReducer,
  types: TypesReducer,
  categories: CategoriesReducer,
  bookmarks: BookmarksReducer,
  tickets: TicketsReducer,
});

export default RootReducer;
