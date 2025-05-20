function groupAnagrams(strs: string[]): string[][]{
    const groupedMap = new Map<string, string[]>();
    for (const word of strs) {
        const sorted=word.split('').sort().join('')
        if  (!groupedMap.has(sorted)){
            groupedMap.set(sorted, [word]);
        }
        else
        {groupedMap.get(sorted)?.push(word)}

    }
    return [...groupedMap.values()]
}
