// Code your solution here
const findMatching = (source, sought) => {
    return source.filter(
        (possibleMatch) => possibleMatch.toLowerCase() === sought.toLowerCase()
    );
}

const fuzzyMatch = (source, sought) => {
    return source.filter(
        (possibleMatch) => possibleMatch.toLowerCase().indexOf(sought.toLowerCase()) === 0
    );
}

const matchName = (source, sought) => {
    return source.filter(
        (record => record.name === sought)
    );
}