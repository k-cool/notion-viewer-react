/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

interface TestPageProps {}

export default function TestPage({}: TestPageProps) {
	return <div css={TestPageCss}>test</div>;
}

const TestPageCss = css`
	width: 100vw;
	padding: 50px;
`;
