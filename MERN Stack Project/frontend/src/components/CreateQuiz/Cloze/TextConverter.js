// getSentence function: Splits the input text into words and creates an array of objects where words starting with '<' are marked as answers.

export const getSentence = (text) => {
    return text.split(' ').map((w, id) => {
        if (w.startsWith('<')) {
            const m = w.match(/[a-zA-Z]+/); // Fix typo in the regex pattern
            return { id, text: m[0], type: 'answer', placed: false, displayed: '' };
        }
        return { id, text: w, type: 'word' };
    });
};

// getAnswers function: Extracts unique answers from the input text and returns them as an array.

export const getAnswers = (text) => {
    const wordList = Array.from(new Set(text.split(' ')));
    return wordList.reduce((acc, cur) => {
        if (cur.startsWith('<')) {
            const m = cur.match(/[a-zA-Z]+/); // Fix typo in the regex pattern
            return acc.concat(m[0]);
        }
        return acc;
    }, []);
};
