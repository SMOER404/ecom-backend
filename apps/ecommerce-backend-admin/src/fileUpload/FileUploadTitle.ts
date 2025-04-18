import { FileUpload as TFileUpload } from "../api/fileUpload/FileUpload";

export const FILEUPLOAD_TITLE_FIELD = "filename";

export const FileUploadTitle = (record: TFileUpload): string => {
  return record.filename?.toString() || String(record.id);
};
