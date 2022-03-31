function appendCounts(arr, count, score){
    for(let time =0; time<count; time++){
        arr.push(score)
    }
    return arr;
}
function sortScores(unorderedScores, highestPossibleScore) {
    const scoreLength = unorderedScores.length
    const newArr = new Array(highestPossibleScore+1).fill(0)

    newArr.forEach(score => {
        newArr[score]++
    })
     console.log("##new", newArr);

    let finalScoreTable = []
    for(let i = highestPossibleScore; i>=0; i--){
        let count = newArr[i]
        finalScoreTable = appendCounts(newArr, count, i)

        // For the number of times the item occurs
        for (let time = 0; time < count; time++) {
            finalScoreTable.push(i);
        }
    }

    console.log("##finalScoreTable", finalScoreTable);
    return finalScoreTable

}

const unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

console.log("result",sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE));
