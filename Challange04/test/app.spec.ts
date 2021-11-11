import { addTwoReversedNumbers, reverseInteger } from "../src/lib/util"

/**
 * O Trik burada
 * 
 * describe yerine describe.only yaparak sadece o scope'u çalıştırabilirsiniz
 * it yerine it.only yaparak sadece o test'i çalıştırabilirsiniz.
 */
describe('test addTwoReversedNumbers', () => {

    it('should add two numberlist', () => {
        const l1 = [2, 4, 3];
        const l2 = [5, 6, 4];
        expect(addTwoReversedNumbers(l1, l2)).toEqual([7, 0, 8])
    })
    it('should add two numberlist', () => {
        const l1 = [20, 4, 13];
        const l2 = [5, 6, 6];
        expect(addTwoReversedNumbers(l1, l2)).toEqual([5, 2, 0, 2])
    })
    it('should add two numberlist', () => {
        const l1 = [2, 4, 0];
        const l2 = [5, 6, 0];
        expect(addTwoReversedNumbers(l1, l2)).toEqual([7, 0, 1])
    })
    it('should add two numberlist', () => {
        const l1 = [0];
        const l2 = [0];
        expect(addTwoReversedNumbers(l1, l2)).toEqual([0])
    })
    it('should add two numberlist', () => {
        const l1 = [9, 9, 9, 9, 9, 9, 9];
        const l2 = [9, 9, 9, 9];
        expect(addTwoReversedNumbers(l1, l2)).toEqual([8, 9, 9, 9, 0, 0, 0, 1])
    })
})
describe('test reverseInteger', () => {

    it('should add two reverseInteger', () => {
        expect(reverseInteger(0)).toEqual(0)
    })
    it('should add two reverseInteger', () => {
        expect(reverseInteger(123)).toEqual(321)
    })
    it('should add two reverseInteger', () => {
        expect(reverseInteger(1020)).toEqual(201)
    })
    it('should add two reverseInteger', () => {
        expect(reverseInteger(-123)).toEqual(-321)
    })
})
