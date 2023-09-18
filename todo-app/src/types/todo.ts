export type Task = {
  id: string;
  name: string;
  isChecked: boolean;
  isEdit: boolean;
};

export enum Actions {
  DELETE = "Delete",
  CREATE = "Create",
  EDIT = "Edit",
}

export type Action = Actions.CREATE | Actions.DELETE | Actions.EDIT;
