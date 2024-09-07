function solution(spell, dic) {
    let lst = [...Array(dic.length).fill(0)]
    const arr = spell.forEach((el) => dic.map((e, i) => e.includes(el) ? lst[i] += 1 : lst[i] === 0))
    console.log(lst)
    return lst.filter((el) => el >= spell.length).length > 0 ? 1 : 2;
}