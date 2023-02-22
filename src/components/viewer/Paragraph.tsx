/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { gray } from 'styles/palette';
import { IBlockObj, ParagraphContent } from 'types/block.type';
import { createMarkup } from 'util/DOMFunc';

interface ParagraphProps {
	blockData: IBlockObj<ParagraphContent>;
}

export default function Paragraph({ blockData }: ParagraphProps) {
	const {
		content: { innerHTML },
	} = blockData;

	return <p css={pCss} dangerouslySetInnerHTML={createMarkup(innerHTML)}></p>;
}

const pCss = css`
	width: 100%;
	padding: 8px;
	color: ${gray[700]};
	word-break: break-all;
	line-height: 130%;
`;
