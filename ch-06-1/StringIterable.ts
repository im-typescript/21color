
export class StringIterable implements Iterable<string | undefined> {
    constructor(
        private strings: string[] = [],
        private currentIndex: number = 0
    ) {}
    [Symbol.iterator](): Iterator<string> {
        const that = this;
        let currentIndex = that.currentIndex,
            length = that.strings.length;

        const iterator: Iterator<string> = {
            next(): { value: string; done: boolean } {
                const value =
                    currentIndex < length
                        ? that.strings[currentIndex++]
                        : '';
                const done = value === '';
                return { value, done };
            },
        }
        return iterator;
    }
}

for (let v of new StringIterable(["hello", "world", "!"])) console.log(v);