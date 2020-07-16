export const range = (from: number, to: number): number[] =>
    from < to ? [from, ...range(from + 1, to)] : []

export const arrayLength = <T>(arr: T[]): number => arr.length

export const fold = <T>(arr: T[], callback: (result: T, val: T) => T, initValue: T): T => {
    let result: T = initValue
    for (let i = 0; i < arr.length; i++) {
        const val = arr[i]
        result = callback(result, val)
    }

    return result
}

export const filter = <T>(arr: T[], callback: (value: T) => boolean): T[] => {
    let result: T[] = []
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result = [...result, arr[i]]
        }
    }
    return result
}

export const mergeArray = <T>(...arrays: T[][]): T[] => {
    let result: T[] = []
    for (let i = 0; i < arrays.length; i++) {
        const arr = arrays[i]
        result = [...result, ...arr]
    }
    return result
}
