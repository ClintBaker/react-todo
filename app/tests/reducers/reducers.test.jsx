var expect = require('expect');
var df = require('deep-freeze-strict');
var {searchTextReducer, showCompletedReducer} = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'bonkers'
      };
      var res = searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('showCompleted value should be toggled', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = showCompletedReducer(df(false), df(action));

      expect(res).toBe(true);
    });
  });
});
