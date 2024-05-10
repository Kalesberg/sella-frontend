import { Upload, type UploadProps } from './Upload';
import { UploadAddButton } from './UploadAddButton';
import { UploadPreviews } from './UploadPreviews';

export namespace Uploader {
	export const Root = Upload;
	export type RootProps = UploadProps;

	export const AddButton = UploadAddButton;
	export const Previews = UploadPreviews;
}