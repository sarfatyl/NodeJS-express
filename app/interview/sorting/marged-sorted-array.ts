/**
 * input :
 * arr1 = [2,3,5,0,0,0] m
 * arr2 = [1, 4, 8] n
 *
 * output =
 * arr1 = [1,2,3,4,5,8]
 *
 * pseudo code
 * 1. init pointer to be arr1.length
 * 2. decreasing n,m in 1
 * 3. loop through the arr1 from the end to the beginning
 * 	3.1 check if m less than zero
 * 		3.1.1 update arr1[index] to be arr1[n--]
 * 	3.2 else check if n less than zero
 * 		3.2.1 update arr1[index] to be arr1[m--]
 * 	3.3 else check if arr1[m] > arr2[n]
 * 		3.3.1 update arr1[index] to be arr1[index] = arr[m--]
 * 	3.4 else
 * 		3.4.1 update arr1[index] to be arr1[index] = arr[n--]
 * 	3.5 decreasing index in 1
 * */