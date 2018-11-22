function warnUser(): void {
    console.log("This is my warning message");
}

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}

declare function create(o: object | null): void;

// function f({ a, b = 0 } = { a: "" }): void {
//     // ...
// }
// f({ a: "yes" }); // ok, default b = 0
// f(); // ok, default to {a: ""}, which then defaults b = 0
// f({}); // error, 'a' is required if you supply an argument



// create({ prop: 0 }); // OK
// create(null); // OK
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error



export const playGround = () => {
	let targetBool : boolean = false;
	let targetNumber : number = 1;
	let targetNumArr : number[] = [7, 9, 8];
	let unusable: void = undefined;
	let targetArr : any[] = [false, 8, 'Captain']
	enum Color {Red=1, Green=2, Blue=4}
	let g = Color.Green

	let someValue: any = "this is a string LOL!";
	let strLength: number = (someValue).length;

	console.log(strLength)

	return {
		targetBool: targetBool,
		targetNumber: targetNumber,
		targetNumArr: targetNumArr,
		unusable: unusable,
		targetArr: targetArr,
		Color: Color,
		g:g
	}
}
