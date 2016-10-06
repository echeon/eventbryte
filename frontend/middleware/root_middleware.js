import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import EventsMiddleware from './events_middleware';
import TypesMiddleware from './types_middleware';

export default applyMiddleware(
  SessionMiddleware,
  EventsMiddleware,
  TypesMiddleware
);
