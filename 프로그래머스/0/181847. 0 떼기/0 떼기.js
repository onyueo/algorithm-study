function solution(n_str) {
    var idx = 0;
    for (srt of [...n_str]) {
        if(srt !== '0') {
            break
        }
        idx++
    }
    return n_str.slice(idx);
}