import type { RecordSchema } from "../../../../../types/schema";

export const schema: RecordSchema = {
  fields: [
    {
      type: "SINGLE_LINE_TEXT",
      code: "text",
      label: "text",
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
      type: "SUBTABLE",
      code: "subTable",
      noLabel: false,
      label: "subTable",
      fields: [
        {
          type: "SINGLE_LINE_TEXT",
          code: "textInSubtable",
          label: "textInSubtable",
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
          type: "NUMBER",
          code: "numberInSubtable",
          label: "numberInSubtable",
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
      ],
    },
    {
      type: "SUBTABLE",
      code: "subTable2",
      noLabel: false,
      label: "subTable2",
      fields: [
        {
          type: "SINGLE_LINE_TEXT",
          code: "textInSubtable2",
          label: "textInSubtable2",
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
          type: "NUMBER",
          code: "numberInSubtable2",
          label: "numberInSubtable2",
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
      ],
    },
  ],
};