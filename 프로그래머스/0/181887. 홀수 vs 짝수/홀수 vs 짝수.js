function solution(num_list) {
    var odd = 0;
    var even = 0;
    for (let i=0; i < num_list.length; i++){
        if(i %  2 === 0) {
            even += num_list[i]
        } else {
            odd += num_list[i]
        }
    }
    return odd > even ? odd : even;
}