/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import Header from 'components/viewer/Header';
import { RESULTS } from 'data/heading_1';
import { RICH_TEXT } from 'data/rich_text';
import { IBlockObj } from 'types/block.type';
import { parseResults, parseRichText } from 'util/notionFunc';

interface TestPageProps {}

export default function TestPage({}: TestPageProps) {
	const mappable = parseResults(RESULTS as Array<BlockObjectResponse>);

	console.log(mappable);
	return (
		<div css={TestPageCss}>
			test
			<Header blockData={mappable[0]} />
			<Header blockData={mappable[1]} />
			<Header blockData={mappable[2]} />
		</div>
	);
}

const TestPageCss = css`
	width: 100vw;
	padding: 50px;
`;
