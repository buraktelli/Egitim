
/**


  2  4  3     Array olacak [2, 4, 3]
  5  6  4     Array olacak [5, 6, 4]
+----------
  7  0  8     Array olacak [7, 0, 8] return    

2 + 5 -> 7
4 + 6 -> 0 (elde var 1)
3 + 4 + elde -> 8


*/
export function addTwoReversedNumbers(list1: number[], list2: number[]): number[] {
  const length = list1.length > list2.length ? list1.length : list2.length
  let array = []
  let excess = 0
  for (let i = 0; i < length; i++) {
    const itemList1 = list1[i] ? list1[i] : 0
    const itemList2 = list2[i] ? list2[i] : 0
    const acc = itemList1 + itemList2 + excess
    const item = acc > 9 ? acc % 10 : acc
    array.push(Math.floor(item))
    excess = acc / 10
  }
  if (Math.floor(excess) > 0) {
    array.push(Math.floor(excess))
  }
  return array
}

/**

Example 1:

Input: x = 123
Output: 321


Example 2:

Input: x = -123
Output: -321


Example 3:

Input: x = 120
Output: 21


Example 4:

Input: x = 0
Output: 0


 */
export function reverseInteger(i: number): number {
  const array = i.toString()
  let reverseArray = []
  const isNegative = array[0] === '-'
  for (const letter of array) {
    reverseArray.unshift(letter)
  }
  if (reverseArray[0] === '0' && reverseArray.length !== 1) {
    reverseArray.splice(0, 1)
  }
  if (isNegative) {
    reverseArray.unshift('-')
  }
  return parseInt(reverseArray.join(''))
}