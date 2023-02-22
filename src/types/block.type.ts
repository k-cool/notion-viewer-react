import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

export type HeadingType = 'heading_1' | 'heading_2' | 'heading_3';

// export type SuportType = 'heading_1' | 'heading_2' | 'heading_3';

export interface IBlockObj<T = any> {
	id: string;
	type: string;
	content: T;
}

export type HeadingContent = {
	innerHTML: string;
};

export type ImageContent = {
	type: 'external' | 'file';
	url: string;
	caption: string;
};

export type ParagraphContent = {
	innerHTML: string;
};

export type CodeContent = {};
