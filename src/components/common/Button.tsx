/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React from 'react';
import { gray, pallete, purple } from 'styles/palette';

interface ButtonProps {
	width?: string;
	height?: string;
	children?: React.ReactNode;
	onClick?: React.MouseEventHandler;
}

export default function Button({ width = '', height = '', children, onClick }: ButtonProps) {
	return (
		<button css={ButtonCss(width, height)} onClick={onClick}>
			{children}
		</button>
	);
}

const ButtonCss = (width: string, height: string) => css`
	width: ${width};
	height: ${height};
	padding: 10px 20px;
	background-color: ${pallete.white};
	border: 1px solid ${purple[30]};
	border-radius: 8px;
	color: ${purple[30]};
	font-size: 20px;
	letter-spacing: 1px;
	cursor: pointer;

	&:hover {
		background-color: ${gray[200]};
	}
`;
