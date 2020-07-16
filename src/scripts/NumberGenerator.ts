let MAX_AGE = 100

interface NumberGenerator {
    generate(): number;
}

class RandomNumberGenerator implements NumberGenerator {
    generate(max: number = MAX_AGE): number {
        return Math.ceil((Math.random() * max));
    }
}

export const generate: Function = (): number => {
    const generator: NumberGenerator = new RandomNumberGenerator();
    return generator.generate();
}

