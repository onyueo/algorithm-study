function solution(arr) {
    let x = 0;
    while (true) {
        let newArr = arr.map(num => {
            if (num >= 50 && num % 2 === 0) {
                return num / 2;
            } else if (num < 50 && num % 2 !== 0) {
                return num * 2 + 1;
            } else {
                return num;
            }
        });

        if (JSON.stringify(arr) === JSON.stringify(newArr)) {
            break;
        }

        arr = newArr;
        x++;
    }
    return x;
}