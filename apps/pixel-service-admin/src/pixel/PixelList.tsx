import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MOOD_TITLE_FIELD } from "../mood/MoodTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const PixelList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"pixels"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="mood" source="mood.id" reference="Mood">
          <TextField source={MOOD_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="note" source="note" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="value" source="value" />
      </Datagrid>
    </List>
  );
};
