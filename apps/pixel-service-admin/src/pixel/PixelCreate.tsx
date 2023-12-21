import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { MoodTitle } from "../mood/MoodTitle";
import { UserTitle } from "../user/UserTitle";

export const PixelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
