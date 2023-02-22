import { v1 as uuidv1 } from 'uuid';
import {
	BlockObjectResponse,
	RichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { IBlockObj, ImageContent, ParagraphContent } from 'types/block.type';

export function parseResults(results: Array<BlockObjectResponse>): IBlockObj[] {
	const parsed: IBlockObj[] = [];

	results.forEach((block, i) => {
		const blockObj: IBlockObj = { id: '', type: '', content: {} };

		for (const [key, value] of Object.entries(block)) {
			if (key === 'type') blockObj.type = value;
			if (key === 'id') blockObj.id = value;

			if (key === block.type) {
				if (
					key === 'paragraph' ||
					key === 'heading_1' ||
					key === 'heading_2' ||
					key === 'heading_3'
				) {
					const content: ParagraphContent = { innerHTML: parseRichText(value.rich_text) };
					blockObj.content = content;
				} else if (key === 'image') {
					const imageContent: ImageContent = {
						type: value.type,
						url: value.file ? value.file.url : value.external.url,
						caption: parseRichText(value.caption),
					};
					blockObj.content = imageContent;
				} else {
					blockObj.content = value;
				}
			}
		}

		parsed[i] = blockObj;
	});

	return parsed;
}

export function parseRichText(rich_text: Array<RichTextItemResponse>) {
	if (rich_text.length === 0) return '';

	const parsed = rich_text
		.map(el => {
			let innerHTML = el.plain_text;
			for (const [key, value] of Object.entries(el.annotations)) {
				if (!value || value === 'default' || key === 'strikethrough') continue;

				if (key === 'bold') innerHTML = `<b>${innerHTML}</b>`;
				if (key === 'italic') innerHTML = `<i>${innerHTML}</i>`;
				if (key === 'underline') innerHTML = `<u>${innerHTML}</u>`;
				if (key === 'code') innerHTML = `<code>${innerHTML}</code>`;
				if (key === 'color') {
					innerHTML = `<span style="color:${value};">${innerHTML}</span>`;
				}
			}
			// console.log('결과:', innerHTML);
			return innerHTML;
		})
		.join('');
	// console.log(parsed);
	return parsed;
}
