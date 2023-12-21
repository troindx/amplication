import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { MoodTitle } from "../mood/MoodTitle";
import { UserTitle } from "../user/UserTitle";

export const PixelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="mood.id" reference="Mood" label="mood">
          <SelectInput optionText={MoodTitle} />
        </ReferenceInput>
        <TextInput label="note" source="note" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
