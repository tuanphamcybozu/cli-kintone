import type { RecordSchema } from "../../../../types/schema";

export const expected: RecordSchema = {
  hasSubtable: true,
  fields: [
    {
      type: "DROP_DOWN",
      code: "dropDown",
      label: "dropDown",
      noLabel: false,
      required: false,
      options: {
        sample1: {
          label: "sample1",
          index: "0",
        },
        sample2: {
          label: "sample2",
          index: "1",
        },
      },
      defaultValue: "",
    },
    {
      type: "MODIFIER",
      code: "modifier",
      label: "modifier",
      noLabel: false,
    },
    {
      type: "RICH_TEXT",
      code: "richText",
      label: "richText",
      noLabel: false,
      required: false,
      defaultValue: "",
    },
    {
      type: "CREATOR",
      code: "creator",
      label: "creator",
      noLabel: false,
    },
    {
      type: "SUBTABLE",
      code: "subTable",
      noLabel: false,
      label: "subTable",
      fields: [
        {
          type: "SINGLE_LINE_TEXT",
          code: "subTableText",
          label: "subTableText",
          noLabel: false,
          required: false,
          minLength: "",
          maxLength: "",
          expression: "",
          hideExpression: false,
          unique: false,
          defaultValue: "",
        },
        {
          type: "CHECK_BOX",
          code: "subTableCheckbox",
          label: "subTableCheckbox",
          noLabel: false,
          required: false,
          options: {
            st_sample2: {
              label: "st_sample2",
              index: "1",
            },
            st_sample1: {
              label: "st_sample1",
              index: "0",
            },
          },
          defaultValue: [],
          align: "HORIZONTAL",
        },
        {
          type: "FILE",
          code: "subTableFile",
          label: "subTableFile",
          noLabel: false,
          required: false,
          thumbnailSize: "150",
        },
        {
          type: "USER_SELECT",
          code: "userSelect",
          label: "userSelect",
          noLabel: false,
          required: false,
          entities: [],
          defaultValue: [],
        },
        {
          type: "ORGANIZATION_SELECT",
          code: "organizationSelect",
          label: "organizationSelect",
          noLabel: false,
          required: false,
          entities: [],
          defaultValue: [],
        },
        {
          type: "GROUP_SELECT",
          code: "groupSelect",
          label: "groupSelect",
          noLabel: false,
          required: false,
          entities: [],
          defaultValue: [],
        },
      ],
    },
    {
      type: "USER_SELECT",
      code: "userSelect",
      label: "userSelect",
      noLabel: false,
      required: false,
      entities: [],
      defaultValue: [],
    },
    {
      type: "ORGANIZATION_SELECT",
      code: "organizationSelect",
      label: "organizationSelect",
      noLabel: false,
      required: false,
      entities: [],
      defaultValue: [],
    },
    {
      type: "GROUP_SELECT",
      code: "groupSelect",
      label: "groupSelect",
      noLabel: false,
      required: false,
      entities: [],
      defaultValue: [],
    },
    {
      type: "SINGLE_LINE_TEXT",
      code: "singleLineText",
      label: "singleLineText",
      noLabel: false,
      required: false,
      minLength: "",
      maxLength: "",
      expression: "",
      hideExpression: false,
      unique: false,
      defaultValue: "",
    },
    {
      type: "RECORD_NUMBER",
      code: "recordNumber",
      label: "recordNumber",
      noLabel: false,
    },
    {
      type: "NUMBER",
      code: "number",
      label: "number",
      noLabel: false,
      required: false,
      minValue: "",
      maxValue: "",
      digit: false,
      unique: false,
      defaultValue: "",
      displayScale: "",
      unit: "",
      unitPosition: "BEFORE",
    },
    {
      type: "RADIO_BUTTON",
      code: "radioButton",
      label: "radioButton",
      noLabel: false,
      required: true,
      options: {
        sample1: {
          label: "sample1",
          index: "0",
        },
        sample2: {
          label: "sample2",
          index: "1",
        },
      },
      defaultValue: "sample1",
      align: "HORIZONTAL",
    },
    {
      type: "MULTI_LINE_TEXT",
      code: "multiLineText",
      label: "multiLineText",
      noLabel: false,
      required: false,
      defaultValue: "",
    },
    {
      type: "CREATED_TIME",
      code: "createdTime",
      label: "createdTime",
      noLabel: false,
    },
    {
      type: "CHECK_BOX",
      code: "checkBox",
      label: "checkBox",
      noLabel: false,
      required: false,
      options: {
        '"sample1"': {
          label: '"sample1"',
          index: "0",
        },
        '"sample2"': {
          label: '"sample2"',
          index: "1",
        },
      },
      defaultValue: [],
      align: "HORIZONTAL",
    },
    {
      type: "UPDATED_TIME",
      code: "updatedTime",
      label: "updatedTime",
      noLabel: false,
    },
    {
      type: "CALC",
      code: "calc",
      label: "calc",
      noLabel: false,
      required: false,
      expression: "number + number",
      format: "NUMBER",
      displayScale: "",
      hideExpression: false,
      unit: "",
      unitPosition: "BEFORE",
    },
    {
      type: "MULTI_SELECT",
      code: "multiSelect",
      label: "multiSelect",
      noLabel: false,
      required: false,
      options: {
        sample1: {
          label: "sample1",
          index: "0",
        },
        "tab\ttab": {
          label: "tab\ttab",
          index: "4",
        },
        '"sample2"': {
          label: '"sample2"',
          index: "1",
        },
        "sample4,sample5": {
          label: "sample4,sample5",
          index: "3",
        },
        '"sample3"': {
          label: '"sample3"',
          index: "2",
        },
      },
      defaultValue: [],
    },
    {
      type: "DATE",
      code: "date",
      label: "date",
      noLabel: false,
      required: false,
      unique: false,
      defaultValue: "",
      defaultNowValue: true,
    },
    {
      type: "DATETIME",
      code: "dateTime",
      label: "dateTime",
      noLabel: false,
      required: false,
      unique: false,
      defaultValue: "",
      defaultNowValue: true,
    },
    {
      type: "TIME",
      code: "time",
      label: "time",
      noLabel: false,
      required: false,
      defaultValue: "",
      defaultNowValue: true,
    },
  ],
};
