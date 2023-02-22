import createDOMPurify from 'dompurify';

const DOMPurify = createDOMPurify(window);

export function createMarkup(str: string) {
	const cleanStr = DOMPurify.sanitize(str, { USE_PROFILES: { html: true } });
	return { __html: cleanStr };
}
