import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

export type HeadingType = 'heading_1' | 'heading_2' | 'heading_3';

// export type SuportType = 'heading_1' | 'heading_2' | 'heading_3';

export interface IBlockObj<T = any> {
	id: string;
	type: string;
	content: T;
	innerHTML?: any;
}

export type HeadingContent = {
	rich_text: Array<RichTextItemResponse>;
	color: string;
};

export type ImageContent = {
	type: 'external' | 'file';
	url: string;
	caption: string;
};
// export type ImageContent =
// 	| {
// 			type: 'external';
// 			external: {
// 				url: string;
// 			};
// 			caption: Array<RichTextItemResponse>;
// 	  }
// 	| {
// 			type: 'file';
// 			file: {
// 				url: string;
// 				expiry_time: string;
// 			};
// 			caption: Array<RichTextItemResponse>;
// 	  };
