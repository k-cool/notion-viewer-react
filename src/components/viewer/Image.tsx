/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { gray } from 'styles/palette';
import { IBlockObj, ImageContent } from 'types/block.type';
import { createMarkup } from 'util/DOMFunc';

interface ImageProps {
	blockData: IBlockObj<ImageContent>;
}

export default function Image({ blockData }: ImageProps) {
	const {
		content: { url, caption },
	} = blockData;

	return (
		<figure css={figureCss}>
			<img css={imgCss} src={url} alt={caption || 'image'} />
			{caption && (
				<figcaption
					css={figcaptionCss}
					dangerouslySetInnerHTML={createMarkup(caption)}
				></figcaption>
			)}
		</figure>
	);
}

const figureCss = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	text-align: center;
`;

const imgCss = css`
	width: 100%;
	object-fit: contain;
`;

const figcaptionCss = css`
	margin: 8px 0;
	font-size: 16px;
	color: ${gray[500]};
`;
