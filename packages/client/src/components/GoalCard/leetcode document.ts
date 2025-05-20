function buildInvertedIndex(documents: string[]): Record<string, number[]> {
  let resultMap: Map<string, number[]> = new Map();
  for (const document of documents) {
    const words = document.split(' ');
    let wordsSet = new Set<string>();
    for (let i = 0; i < words.length; i++) {
      wordsSet.add(words[i])}
      for (const j of wordsSet.values()) {
        // iterating over the values in the values iterator (unique)
        const currentValue = resultMap.get(j) || [];
        currentValue.push(i);
      }
      {
      }
    }
  }
  // now I need to convert to a map only if the value.length>1
  for (const [key, value] of resultMap) {
    if (value.length < 2) {
      resultMap.delete(key);
    }
  }
  return Object.fromEntries(resultMap);
}
