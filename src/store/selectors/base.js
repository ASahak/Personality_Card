import {createSelector} from "reselect";

const baseState = (state) => state.base.toJS();
export const selectIsLoading = createSelector(
  baseState,
  ({ pageLoading }) => pageLoading
)

export const selectUser = createSelector(
  baseState,
  ({ user }) => user
)

export const selectBrands = createSelector(
  baseState,
  ({ brands }) => brands
)

export const selectDescription = createSelector(
  baseState,
  ({ description }) => description
)

export const selectUserData = createSelector(
  baseState,
  ({ description, brands, user }) => ({ description, user, brands })
)

export const selectError = createSelector(
  baseState,
  ({ error }) => error
)