export const toDateString = (date: Date): string => {
	return date.toLocaleDateString("ja-JP", {year: "numeric", month: "2-digit", day: "2-digit"});
}