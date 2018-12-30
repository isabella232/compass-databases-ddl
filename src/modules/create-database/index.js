import { combineReducers } from 'redux';
import dataService from 'modules/data-service';
import cappedSize from 'modules/create-database/capped-size';
import collectionName from 'modules/create-database/collection-name';
import isCapped from 'modules/create-database/is-capped';
import isVisible from 'modules/create-database/is-visible';
import name from 'modules/create-database/name';

/**
 * The main reducer.
 */
const reducer = combineReducers({
  cappedSize,
  collectionName,
  isCapped,
  isVisible,
  name,
  dataService
});

export default reducer;
