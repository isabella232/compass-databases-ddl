import { combineReducers } from 'redux';
import dataService from 'modules/data-service';
import cappedSize from 'modules/create-database/capped-size';
import collectionName from 'modules/create-database/collection-name';
import isCapped from 'modules/create-database/is-capped';
import isCustomCollation from 'modules/create-database/is-custom-collation';
import isVisible from 'modules/create-database/is-visible';
import collation from 'modules/create-database/collation';
import name from 'modules/create-database/name';
import { handleError } from 'modules/create-database/error';

/**
 * No dots in DB name error message.
 */
export const NO_DOT = 'Database names may not contain a "."';

/**
 * The main reducer.
 */
const reducer = combineReducers({
  cappedSize,
  collectionName,
  isCapped,
  isCustomCollation,
  isVisible,
  name,
  collation,
  dataService
});

export default reducer;

/**
 * The create database action.
 *
 * @returns {Function} The thunk function.
 */
export const createDatabase = () => {
  return (dispatch, getState) => {
    const state = getState();
    // const ds = state.dataService.dataService;
    const dbName = state.name;

    if (dbName.includes('.')) {
      dispatch(handleError(new Error(NO_DOT)));
    }
  };
};
