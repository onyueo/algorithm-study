function solution(num_list) {
    return [num_list.filter((arr) => arr % 2 === 0).length, num_list.filter((arr) => arr % 2 === 1).length];
}