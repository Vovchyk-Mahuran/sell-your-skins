export const convertHexToRgba = (hex: string) => {
	const rgb = hex?.match(/\w\w/g)?.map((x: any) => parseInt(x, 16));

	return `radial-gradient(circle at 50% 150%, rgba(${rgb}, 0.25), rgba(${rgb}, 0))`;
};
