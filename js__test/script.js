// createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max'])


// function createDreamTeam(arr) {
//     let newArr = [];
//     for ( let i = 0; i < arr.length; i++) {
//       if (typeof arr[i] === 'string') {
//         newArr.push(arr[i].trim().toUpperCase());
//       };

//     //   newArr1.sort();
//     };
//     let newArr1 = [];
//       for ( let i = 0; i < arr.length; i++) {
//         if (typeof newArr[i] === 'string') {
//         newArr1.push(newArr[i][0])
//         }
//     }
//     return newArr1.sort().join('');
//   }


// let arr = null;

// const test = (arr) => {
//     if (typeof arr !== 'object') {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(test(arr));

function getCommonCharacterCount(s1, s2) {
    let arr = s1.split('');
    let arr2 = s2.split('');
    let newArr = arr.concat(arr2);
    let newNewArr = [...new Set(newArr)];
    let str = newNewArr.join('');
    return str.length;
};

console.log(getCommonCharacterCount('aabcc', 'adcaa'));


//   console.log(createDreamTeam(['jlivia', 1111, '    Lily', 'Oscar', true, null]));