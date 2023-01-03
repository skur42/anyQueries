import { useCallback, useReducer } from "react";
import { Query, SavedQuery } from "../typings/query";
import { createAction, createContainer, createReducer } from "../utils/context";
sdasd
adad

const actions = {
  setCurrentQuery: createAction("SET_CURRENT_QUERY"),
  setExpandedQuery: createAction("SET_EXPANDED_QUERY"),
  setSavedQueries: createAction("SET_SAVED_QUERIES"),
};

type QueryManagementState = {
  currentQuery?: Query;
  savedQueries: SavedQuery[];
  expandedQuery?: SavedQuery;
};

const initialState: QueryManagementState = {
  savedQueries: [],
};

const queryManagementReducer = createReducer<QueryManagementState>({
  [actions.setCurrentQuery.toString()]: (state, { payload }) => ({
    ...state,
    currentQuery: payload,
  }),
  [actions.setExpandedQuery.toString()]: (state, { payload }) => ({
    ...state,
    expandedQuery: payload,
  }),
  [actions.setSavedQueries.toString()]: (state, { payload }) => ({
    ...state,
    savedQueries: payload,
  }),
});

export const {
  useContext: useQueryManagement,
  Context: QueryManagementContext,
  Provider: QueryManagementProvider,
  TestProvider: TestQueryManagementProvider,
} = createContainer(() => {
  const [state, dispatch] = useReducer(queryManagementReducer, initialState);

  const setExpandedQuery = useCallback(async (expandedQuery?: SavedQuery) => {
    dispatch(actions.setExpandedQuery(expandedQuery));
  }, []);

  const setSavedQueries = useCallback(async (savedQueries: SavedQuery[]) => {
    dispatch(actions.setSavedQueries(savedQueries));
  }, []);

  return {
    state,
    actions: {
      setSavedQueries,
      setExpandedQuery,
    },
  };
});
