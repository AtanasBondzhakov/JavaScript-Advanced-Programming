function lastKNumbersSequence(numN, numK) {
   let result = [1];

   for (let i = 1; i < numN; i++) {
       let start = Math.max(0, i - numK);
       let sum = 0;

       for (let j = start; j < i; j++) {
           sum += result[j];
       }
       result.push(sum);
   }

   return result;
}