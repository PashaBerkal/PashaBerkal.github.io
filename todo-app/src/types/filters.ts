export enum Filter {
  ALL = "All",
  COMPLETED = "Completed",
  ACTIVE = "Active",
}

export type SelectedFilterValue = Filter.ALL | Filter.ACTIVE | Filter.COMPLETED;
