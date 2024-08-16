function solution(arr, delete_list) {
    return arr.filter((ar) => !delete_list.includes(ar));
}