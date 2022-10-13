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
    let sum = 0;
    for (let i = 0; i<s1.length; i++) {
        for (let j = 0; j<s2.length; j++) {
            if (s1[i] === s2[j]) {
                sum++;
                s2 = s2.replace(j, '');
                break;
            }
        }
    }
    return sum;
};

console.log(getCommonCharacterCount('aa', 'a'));


//   console.log(createDreamTeam(['jlivia', 1111, '    Lily', 'Oscar', true, null]));