let anArr: string[] = ['apple', 'banana', 'orange'];
let myObj: { [key: string]: string } = {};
for (let i = 0; i < anArr.length; i++) {
    myObj[anArr[i]] = anArr[i];
}
