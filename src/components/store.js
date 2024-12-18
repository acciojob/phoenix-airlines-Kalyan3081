import { createStore } from "redux";
import flightReducer from './reducer'


const store = createStore(flightReducer);

export default store;
