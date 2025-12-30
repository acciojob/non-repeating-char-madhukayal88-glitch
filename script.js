function firstNonRepeatedChar(str) {
    // Check for empty string
    if (str.length === 0) {
        return null;
    }

    // Object to store the count of each character
    const charCount = {};

    // First pass: Build the frequency map
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Second pass: Find the first character with a count of exactly 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no unique character is found, return null
    return null;
}