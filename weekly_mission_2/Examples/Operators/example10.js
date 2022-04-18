// Example 10 Using Every to validate all elements, only if all are valid return true
const names10 = ['Explorer 1', 'Explorer 2', 'Explorer 3', 'Explorer 4']
const areAllStr = names10.every((name) => typeof name === 'string') // every
console.log("Example 10: if all elements are String " + areAllStr)