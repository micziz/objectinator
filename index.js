export function transformIntoObject(array) {
    let obj = {}
    let num = 1;
    for(let i = 0; i < array.length; i++) {
        let numStr = num.toString();
        obj[numStr] = array[i];
        num++;
    }
    return obj;
}
