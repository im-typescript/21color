export class StringIterable implements Iterable<string> {
	constructor(private string: string[] = [], private currentIndex: number = 0) {}
	[Symbol.iterator](): Iterator<string> {
		const that = this;
		let currentIndex = that.currentIndex,
			length = that.string.length;

		const iterator: Iterator<string> = {
			next(): { value: string; done: boolean } {
				const value = currentIndex < length ? that.string[currentIndex++] : undefined;
				const done = value == undefined;
				return { value, done };
			},
		};
		return iterator;
	}
}
