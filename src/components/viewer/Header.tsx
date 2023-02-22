/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { gray, purple } from 'styles/palette';
import { IBlockObj } from 'types/block.type';
import { createMarkup } from 'util/DOMFunc';

interface HeaderProps {
	blockData: IBlockObj;
}

export default function Header({ blockData }: HeaderProps) {
	console.log(blockData);
	return (
		<div css={HeaderCss}>
			<h1 dangerouslySetInnerHTML={createMarkup(blockData.innerHTML)}></h1>
		</div>
	);
}

const HeaderCss = css`
	em,
	b,
	strong {
		font-weight: bold;
	}

	i {
		font-style: italic;
		padding-right: 2px;
	}

	code {
		background-color: ${gray[200]};
		color: ${purple[40]};
		padding: 3px 6px 2px 6px;
		border-radius: 4px;
	}
`;
