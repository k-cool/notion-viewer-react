import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

export type HeadingType = 'heading_1' | 'heading_2' | 'heading_3';

// export type SuportType = 'heading_1' | 'heading_2' | 'heading_3';

export interface IBlockObj {
	id: string;
	type: string;
	content: any;
	innerHTML?: any;
}
