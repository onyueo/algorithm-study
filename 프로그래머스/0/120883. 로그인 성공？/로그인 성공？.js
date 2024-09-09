function solution(id_pw, db) {
    for (data of db) {
        console.log(data, id_pw)
        if (data[0] === id_pw[0] && data[1] === id_pw[1]) {
            return 'login'
        } else if (data[0] === id_pw[0] && data[1] !== id_pw[1]) {
            return 'wrong pw'
        }
    }
    return 'fail';
}