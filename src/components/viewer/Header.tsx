/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, SerializedStyles } from '@emotion/react';
import { HeadingType, IBlockObj } from 'types/block.type';
import { createMarkup } from 'util/DOMFunc';

interface HeaderProps {
	blockData: IBlockObj;
}

export default function Header({ blockData }: HeaderProps) {
	const titleTagStyle = [commonCss, headingCss[blockData.type as HeadingType]];

	switch (blockData.type) {
		case 'heading_1':
			return (
				<h1 css={titleTagStyle} dangerouslySetInnerHTML={createMarkup(blockData.innerHTML)}></h1>
			);
		case 'heading_2':
			return (
				<h2 css={titleTagStyle} dangerouslySetInnerHTML={createMarkup(blockData.innerHTML)}></h2>
			);
		case 'heading_3':
			return (
				<h3 css={titleTagStyle} dangerouslySetInnerHTML={createMarkup(blockData.innerHTML)}></h3>
			);
		default:
			return (
				<h1 css={titleTagStyle} dangerouslySetInnerHTML={createMarkup(blockData.innerHTML)}></h1>
			);
	}
}

const commonCss = css`
	width: 100%;
	margin: 8px 0;
	padding: 0 10px;
	font-weight: bold;
`;

type IHeadingCss = {
	[T in HeadingType]: SerializedStyles;
};

const headingCss: IHeadingCss = {
	heading_1: css`
		font-size: 32px;
	`,
	heading_2: css`
		font-size: 24px;
	`,
	heading_3: css`
		font-size: 18px;
	`,
};
