var expect = require('expect');
var df = require('deep-freeze-strict');
var {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

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

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Walk el dog'
      };
      var res = todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle todo', () => {
      var todos = [{
        id: '123',
        text: 'Something',
        completed: true,
        createdAt: 21343214,
        completedAt: 5531314234
      }];
      var action = {
        type: 'TOGGLE_TODO',
        id: '123'
      };
      var res = todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);

    });
  });
});