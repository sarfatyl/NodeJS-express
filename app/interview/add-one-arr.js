/**
 * Input: digits = [1,2,3]
    Output: [1,2,4]
  * @param digits
 * @returns {*}
 */



function plusOne(digits) {
        let n = digits.length;

        // move along the input array starting from the end
        for (let idx = n - 1; idx >= 0; --idx) {
            // set all the nines at the end of array to zeros
            if (digits[idx] == 9) {
                digits[idx] = 0;
        // here we have the rightmost not-nine
            else
                {
                    // increase this rightmost not-nine by 1
                    digits[idx]++;
                    // and the job is done
                    return digits;
                }
            }
            // we're here because all the digits are nines
            digits.unshift(1);
            return digits;
        }
    }