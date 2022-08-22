import { KintoneRecordForResponse } from "../../../../../../kintone/types";
import path from "path";
import { KintoneRecord } from "../../../../types/record";

const fileInfo = {
  contentType: "text/plain",
  fileKey: "test-file-key",
  name: "test.txt",
  size: "123456",
};

export const input: KintoneRecordForResponse[] = [
  {
    $id: {
      type: "__ID__",
      value: "2",
    },
    fieldCode: {
      type: "SINGLE_LINE_TEXT",
      value: "value1",
    },
    attachment: {
      type: "FILE",
      value: [fileInfo, fileInfo],
    },
  },
  {
    $id: {
      type: "__ID__",
      value: "3",
    },
    fieldCode: {
      type: "SINGLE_LINE_TEXT",
      value: "value1",
    },
    attachment: {
      type: "FILE",
      value: [fileInfo],
    },
  },
];

export const expected: KintoneRecord[] = [
  {
    $id: {
      type: "__ID__",
      value: "2",
    },
    fieldCode: {
      type: "SINGLE_LINE_TEXT",
      value: "value1",
    },
    attachment: {
      type: "FILE",
      value: [
        {
          ...fileInfo,
          localFilePath: path.join("attachment-2", "test.txt"),
        },
        {
          ...fileInfo,
          localFilePath: path.join("attachment-2", "test (1).txt"),
        },
      ],
    },
  },
  {
    $id: {
      type: "__ID__",
      value: "3",
    },
    fieldCode: {
      type: "SINGLE_LINE_TEXT",
      value: "value1",
    },
    attachment: {
      type: "FILE",
      value: [
        {
          ...fileInfo,
          localFilePath: path.join("attachment-3", "test.txt"),
        },
      ],
    },
  },
];