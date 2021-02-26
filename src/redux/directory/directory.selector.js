import { createSelector } from 'reselect';

const selectDirectory = (state) => state.directory;

export const selectDirectorySectios = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
