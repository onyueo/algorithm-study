function solution(num_list) {
    var answer = num_list.findIndex((el) => el < 0);
    console.log(answer)
    return answer !== -1 ? answer : -1;
}