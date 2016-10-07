import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import EventMiddleware from './event_middleware';
import TypeMiddleware from './type_middleware';
import CategoryMiddleware from './category_middleware';

export default applyMiddleware(
  SessionMiddleware,
  EventMiddleware,
  TypeMiddleware,
  CategoryMiddleware
);
