// 传入一个字符串，下标，要截取的数量
function test(str,index,number) {
    

    var newstr = str.substr(index,number);
    var arr = newstr.split();
    console.log(arr);
}

test("123",1,2);