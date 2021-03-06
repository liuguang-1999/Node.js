ES6

## ES6与javascript的区别？

## 什么是块级作用域？举例说明？

## let-var-const

请回答下列代码中的console.log()语句的输出结果，并解释。

### 题1

```js
{
    let age = 18;
    console.log(age); //答案这里是18
}
console.log(age); //答案这里是 报错
```

### 题2



```js
for (let i = 0; i < 11; i++) {
    
}
console.log(i);  //答案 报错
```

### 题3

```js
for (var i = 0; i <= 9; i++) {
    
}
console.log(i);  // 答案 是10  因为 代码循环了10次  第10次进不去循环体内
```

### 题4

```js
console.log(gender); 
let gender = '男';   // 答案是 “报错” 因为 let 变量 不存在  变量提升
```

### 题5

```js
console.log(a);  //答案是 未定义
var a = 1; 
let b = 2;
let name = 'ok'
console.info(a,b)   //答案：1和2
console.info(window.a)	//自己答案：1和1   正确答案：1
console.info(window.b)	//自己答案是1和2	 正确答案：未定义
console.info(window.name)	//自己答案是 1 和 ok	 正确答案：空
```



### 题6

```js
const  b = 1; 
b = 2;
console.log(b);  //答案是 报错 const常量是不允许被修改的
```



### 题7

```js
const  obj = {a:1}; 
obj = 2;
console.log(obj); //答案是 报错
```



### 题8

```js
const  obj = {a:1}; 
obj.b = 2;
console.log(obj); // 答案是 obj={a:1,b:2}
```



### 题9 ！！！！

```js
const  obj = {a:1,b:[1]}; 
obj.b[2] = 2;
console.log(obj);  // 自己的答案是 ： obj = {a:1,b:[2]}   正确答案是 obj = {a:1,b:[1,empty空,2]}
													// 因为是给下标【2】也就是第3位数值赋值
													// 下标为【1】值被略过就是empty空
var arr = [0]; 										
arr[100] = 99; 										
console.log(arr)  // 答案是 0-99  中间为empty 空
```

![1581074578821](C:\Users\div\AppData\Local\Temp\1581074578821.png)



## 数组解构赋值

### 题1

```js
let arr = [5, 9, 10];
let [a, b, c] = arr;
console.log(a, b, c); 	//答案是：a:5,b:9，c:10
```



### 题2

```js
let arr = [5, 9, 10];
let [a, b, c, d] = arr;
console.log(a, b, c, d);  // 答案是 :a:5,b:9，c:10,d: 未定义
```

### 题3

```js
let arr = [5, 9, 10, 8, 3, 2];
let [, , a, , b] = arr; 
console.log(a, b);	// 答案是 a:10 ,b:3
```





### 题3

```js
let arr = ['zhangsan', 18, ['175cm', '65kg']];
// 如何让a的值是175cm,b的值是'zhangsan
// 请输入你的代码
let[a, , [b, ]] = arr // 答案 let[a, , [b, ]] = arr
console.log(a, b); // 175cm 'zhangsan'
```



### 题4

```js
let arr = [1,2,3,4,5];
let [a, b, ...c] = arr; 
console.log(a, b, c); // 答案是：a:1,b:2,c:[3,4,5]
```





### 题5

```js
let arr = [1,2];
let [a=2,b,c=3] = arr; 
console.log(a, b, c); // 自己的答案是 a:2,b:1,c:3   正确答案1，2，3
```



### 题6

```javascript
var a = 1, b = 2;
// 写代码,实现互换a,b的值
//  答案代码 [b,a] = [a,b]
[b,a] = [a,b]
console.info(a,b); // 要求输出 2, 1
```



## 对象解构赋值

### 题1

```js
let { name, age,address='1' } = {age: 27, name: '阳明'};
console.log(name, age,address); // 答案是：name：阳明，age：27，address:1
```

### 题2

```js
let {b, name:a} = {name: '王阳明'};
console.log(b, a, name); // 自己的答案是：b:未定义 a:王明阳 name:王明阳  
						 //正确答案是：b:未定义 a:王明阳 name:是个空的 ""
```

### 题3

```js
let { name='a', age,address='1' } = {};
console.log(name, age,address); // 答案是：name：a, age:未定义, address:1
```

### 题4

```js
let obj = {
    name: 'zhangsan',
    age: 22,
    dog: {
        name: '毛毛',
        age: 3
    }
};
// 下面写一句代码，把 zhangsan '毛毛' 解析出来
//  你的代码 // 答案：let { name, dog: { "name": name1} } = obj
let { name, dog: { "name": name1} } = obj
console.log(name, name1); // zhangsan '毛毛'
```



### 题5

```js

let response = {
    data: ['a', 'b', 'c'],
    meta: {
        code: 200,
        msg: '获取数据成功'
    }
}
// 如何获取到 code 和 msg
// 你的代码 // 答案：let{meta:{"code":code,"msg":d}}=response
let{meta:{"code":code,"msg":d}}=response
console.log(code, d); // 200, 'b'
```



### 题6

```js
let obj = {name:'zs', age:20, gender:'男'};
let {age, ...a} = obj;
console.log(age, a); // 答案：age:20 a:{name:'zs',gender:'男'}
```



## 函数

给出如下代码的输出结果，并解释。

### 题1

```js
function f(a=1,b=2){
	console.log(a,b,a+b);
}
f(10) // 答案：a:10,b:2,ab:12
f(10,20) // 答案：a:10, b:20, ab:30
f()	// 答案：a:1, b:2 ,ab:3

```

### 题2

```javascript
function f2(a=1,b){
	console.log(a,b,a+b);
}
f2(10) // 答案：a:10, b:未定义, ab:NAN
f2(10,20)	// 答案：a:10, b:20 ab:30
f2(,3)	// 答案： 直接报错
f2()	// 答案：a:1, b未定义， ab:NAN
```

### 题3 ！！！

```js
function f1({a=1,b=2}={}){
   console.log(a,b,a+b);
}

f1({a:10,b:20}) // 答案：a:10, b:20, ab:30
f1({a:20})	// 答案：a:20 ,b:2, ab:22
f1({c:1}) // 答案：a:1, b:2 ab:3  因为 实参传入的参数没有匹配形参的 所以形参使用 默认参数 传入函数体内
f1()	// 答案：a:1, b:2 ab:3
```

### 题4

```js
function f2 (x,...y){
    console.log(x,y)
}
f2(1,2); // 答案：x:1, y:[2]
f2(2,3,4); // 答案：x:2, y:[3,4]
```

### 题5

```js
function f1 (x,y){
    console.log(x,y)
}
f1(1,2); // 答案： x:1, y:2
f1(2,3,4);	// 答案：x:2, y:3 
```



### 题6

用箭头函数对下列函数进行改写

```js
function f1(x){	
	console.log(x)
}
// 答案写法
// f1 = x => console.log(x)

function f2(x,y){
	return x + y
}
// 答案写法
// f2=(x,y)=> x + y

function f3(x,y){
	return {a:x,b:x+y}
}
// 答案写法
// f3 = (x, y) => ({ a: x, b: x + y })
```

### 题7 

写出如下代码的输出，并解释原因。

```js
var name = 'a'; 
let obj = {
    name: 'b',
    f1 : () => {
        console.log(this);
        console.log(this.name); 
    },
    f2 : function(){
        console.log(this); 
        console.log(this.name); 
    }
};
obj.f1(); // 答案：第一个 this 指向 Windou  ∵箭头函数内没有 this 指向 但所指向外层 ∴指向了 Windou
          // 答案：第二个 this.name 输出是空 ""  因为 this 指向 Windou Windou上面没 Windou.name这个方法 ∴ 输出 ""空
obj.f2(); // 答案：第一个 this 指向 obj ∵ 这是普通函数 普通函数 this 指向 谁调用就指谁
		 // 答案：第二个 this 指向 name: 'b' ∵ 这是一个普通函数  ∴ this指向内部 的name
```

### 题8 ！！！！

写出如下代码的输出，并解释原因。

```js
var obj = {
    f1:()=>{
        console.log(this) 
    },
    f2:function(){
        console.log(this)
    },
    f3:function(){
       var f = ()=>{ console.log(this) }
       return f 
    },
    f4:function(){
        setTimeout(function(){console.log(this)})
    },
    f5:function(){
        setTimeout(()=>{console.log(this)})
    },
    f6:()=>{
        setTimeout(()=>{console.log(this)})
    },
    f7:()=>{
        setTimeout(function(){console.log(this)})
    },
}

obj.f1(); // 答案：Winodow
obj.f2(); // 答案：obj={}
obj.f3()(); // 答案：obj = {}
obj.f4(); // 答案：obj = {}  !!! 正确答案 Window
obj.f5(); // 答案：obj = {} 
obj.f6(); // 答案：Windiwn	
obj.f7(); // 答案：obj = {}!!! 正确答案 Window
```



##  数组

### 题1

```js
let arr1 = [1,2,3];
let arr2 = [...arr1];
console.log(arr2); // 答案：[1,2,3]
```



### 题2

```js
var arr0 = ['a','b'];
var arr1 = [1,2,3];
var arr2 = [4, ...arr1]; 
var arr3 = [..arr0 ,...arr1]; 
console.log(arr2,arr3); // 答案：[4,1,2,3]和[a,b,1,2,3]
```

### 题3 

```javascript
var arr = [1,3,4,6];
// 使用Math.min求最小值
// var min = ? 
// 答案：let  min = [Math.min(...arr)] 
console.info(min);// 1
```

### 题4

从一个复杂的对象数组中找出符合条件的对象。

```js
let data = [
    {id:2,name:'严嵩',age:15},
    {id:3,name:'徐阶',age:17},
    {id:4,name:'高拱',age:18},
    {id:1,name:'张居正',age:12},
]
// 使用find找出‘高拱’的age,注意使用箭头函数来简化代码
// 答案： 1、let b = data.find(i => i.age == 18) 输出 console.log(b.age)
// 答案： 2、let b = data.find(i => i.name == "高拱") 输出 console.log(b.age)
// 答案： 3、let b = data.find(i => i.id == 4) 输出 console.log(b.age)
```

### 题5 

```js
let arr = [1,1,2,3,3];
// 一句代码实现数组去重
// let arr1 = ? 
// 答案：let arr1 = [...new Set(arr)]
console.info(arr1); // [1,2,3]
```



