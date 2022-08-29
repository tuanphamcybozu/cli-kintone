import type { KintoneFormFieldProperty } from "@kintone/rest-api-client";

export type RecordSchema = {
  fields: FieldSchema[];
};

export type FieldSchema = OneOf;

type OneOf =
  | KintoneFormFieldProperty.Creator
  | KintoneFormFieldProperty.CreatedTime
  | KintoneFormFieldProperty.Modifier
  | KintoneFormFieldProperty.UpdatedTime
  | KintoneFormFieldProperty.SingleLineText
  | KintoneFormFieldProperty.Number
  | KintoneFormFieldProperty.MultiLineText
  | KintoneFormFieldProperty.RichText
  | KintoneFormFieldProperty.Link
  | KintoneFormFieldProperty.CheckBox
  | KintoneFormFieldProperty.RadioButton
  | KintoneFormFieldProperty.Dropdown
  | KintoneFormFieldProperty.MultiSelect
  | KintoneFormFieldProperty.File
  | KintoneFormFieldProperty.Date
  | KintoneFormFieldProperty.Time
  | KintoneFormFieldProperty.DateTime
  | KintoneFormFieldProperty.UserSelect
  | KintoneFormFieldProperty.OrganizationSelect
  | KintoneFormFieldProperty.GroupSelect
  | Subtable;

export type InSubtable =
  | KintoneFormFieldProperty.SingleLineText
  | KintoneFormFieldProperty.Number
  | KintoneFormFieldProperty.MultiLineText
  | KintoneFormFieldProperty.RichText
  | KintoneFormFieldProperty.Link
  | KintoneFormFieldProperty.CheckBox
  | KintoneFormFieldProperty.RadioButton
  | KintoneFormFieldProperty.Dropdown
  | KintoneFormFieldProperty.MultiSelect
  | KintoneFormFieldProperty.File
  | KintoneFormFieldProperty.Date
  | KintoneFormFieldProperty.Time
  | KintoneFormFieldProperty.DateTime
  | KintoneFormFieldProperty.UserSelect
  | KintoneFormFieldProperty.OrganizationSelect
  | KintoneFormFieldProperty.GroupSelect;

type Subtable = {
  type: "SUBTABLE";
  code: string;
  label: string;
  noLabel: boolean;
  fields: InSubtable[];
};