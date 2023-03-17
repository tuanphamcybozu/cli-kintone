import type { TestPattern } from "../../index.test";
import { records } from "./records";
import { schema } from "./schema";
import { recordsOnKintone } from "./recordsOnKintone";
import { LocalRecordRepositoryMock } from "../../../../../repositories/localRecordRepositoryMock";

export const pattern: TestPattern = {
  description: "should throw error because the record number is invalid",
  input: {
    records: records,
    repository: new LocalRecordRepositoryMock(records, "csv"),
    schema: schema,
    updateKey: "recordNumber",
    options: {
      attachmentsDir: "",
      skipMissingFields: true,
    },
  },
  recordsOnKintone: recordsOnKintone,
  expected: {
    failure: {
      cause: new Error('The "Key to Bulk Update" value is invalid (Hoge-3)'),
    },
  },
};
