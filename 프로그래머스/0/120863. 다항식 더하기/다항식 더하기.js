function solution(polynomial) {
    const terms = polynomial.split(' + '); // 다항식의 항을 분리
    const coefficients = {}; // 동류항의 계수를 저장할 객체

    for (const term of terms) {
        if (term.includes('x')) {
            const [coefficient] = term.split('x'); // 'x' 앞의 계수 추출
            const num = coefficient === '' ? 1 : coefficient === '-' ? -1 : parseInt(coefficient); // 계수 파싱
            coefficients['x'] = (coefficients['x'] || 0) + num; // 'x' 항의 계수 합산
        } else {
            const constant = parseInt(term); // 상수항 파싱
            coefficients['const'] = (coefficients['const'] || 0) + constant; // 상수항 합산
        }
    }

    // 결과 문자열 생성
    let result = '';
    if (coefficients['x']) {
        result += coefficients['x'] === 1 ? 'x' : coefficients['x'] === -1 ? '-x' : coefficients['x'] + 'x';
    }
    if (coefficients['const']) {
        if (result) result += ' + '; // 이전에 계수가 있는 경우 + 추가
        result += coefficients['const'];
    }
    
    return result || '0'; // 모든 계수가 0일 경우 '0' 반환
}
