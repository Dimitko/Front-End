let sMessage =
`Здравейте! След натискане на ОК бутона,
в конзолата на браузера (F12/Developer Tools -> Console),
ще видите решенията.`;

alert(sMessage);

task11();
task12();
task13();
task14();
task15();
task16();
task17();

task21();
task22();
task23();
task24();

function task11() {
	let a = [10, 5, 13, 18, 51];

	console.log("\nРешение на задача 1.1");

	console.log("\tИзползваме Array.prototype.forEach");
	printArray(a);

	console.log("\tИзползваме обиковен for цикъл");
	for (let i = 0; i < a.length; i++) {
		console.log("a[" + i + "]= " + a[i]);
	}
	
}

function task12() {
	let a = [10, 5, 13, 18, 51];

	console.log("\nРешение на задача 1.2");
	let b = a.map((element)=> {
		return element * 2;
	});

	printArray(b);
}


function task13() {
	let a = [10, 5, 13, 18, 51];

	console.log("\nРешение на задача 1.3");
	let b = a.filter((element)=> {
		return (element % 2) === 0;
	});

	printArray(b);
}


function task14() {
	let a = [10, 5, 13, 18, 51],
		b = [20, 10, 26, 36, 102];

	console.log("\nРешение на задача 1.4");
	
	function atLeatOneElementIsLessThan10 (array) {
		return array.some((element)=> {
			return element < 10;
		});
	}

	console.log("Има ли елемент от масив А, който е < 10 ? " + atLeatOneElementIsLessThan10(a));
	console.log("Има ли елемент от масив B, който е < 10 ? " + atLeatOneElementIsLessThan10(b));
}


function task15() {
	let a = [10, 5, 13, 18, 51];

	console.log("\nРешение на задача 1.5");
	let b = a.filter((element)=> {
		return (element % 3) === 0;
	});

	printArray(b);
}

function task16() {
	let a = [10, 5, 13, 18, 51];
	const fnReducer = (accumulator, currentVal) => accumulator + currentVal;

	console.log("\nРешение на задача 1.6");
	let result = a.reduce(fnReducer);

	console.log("Сборът на числата от масива е " + result);
}

function task17() {
	let a = [10, 5, 13, 18, 51];

	console.log("\nРешение на задача 1.7");
	
	console.log("\t решение 1 с изчисление на позицията на първия от последните два елемента...");
	let b = a.slice(a.length - 2);
	printArray(b);

	console.log("\t решение 2 (по-добрия вариант) с подаване на отрицателен индекс на 'slice'");
	b = a.slice(-2);
	printArray(b);
}

function task21() {
	console.log("\nРешение на задача 2.1");
	let a = [new Date()];

	printArray(a);
}

function task22() {
	console.log("\nРешение на задача 2.2");
	let a = [new Date()];

	a.push(new Date(2018, 11, 8));
	a[1].setHours(21, 0, 0);

	printArray(a);
}

function task23() {
	console.log("\nРешение на задача 2.3");
	let a = [new Date(), new Date(2018, 11, 8, 21, 0, 0)];

	let b = a.map((oDate) => {
		// нужно ни е копие на обекта, тъй като ще правим модификация
		/* моля обърнете внимание на 2 неща тук:
		let oDateCopy = new Date(oDate.getTime());

			1. какво прави Array.prototype.setMonth, когато му подадете два параметъра
			2. какво се случва, когато за ден от месеца (2-рия параметър) подадем 0
		*/
		oDateCopy.setMonth(oDateCopy.getMonth() + 1, 0);

		return [oDateCopy.getDate(), oDate.getDay()];
	});

	printArray(a);
	printArray(b);
}


function task24() {
	console.log("\nРешение на задача 2.4");
	let a = [new Date(), new Date(2018, 11, 8, 21, 0, 0)];

	/* Връща името на деня на кирилица, според подаденото число 0(неделя)-6(събота)*/
	const getDayOfWeek = (iDay) => {
		let aDaysOfWeek = ["неделя", "понеделник", "вторник", "сряда", "четвъртък", "петък", "събота"];

		if (iDay < 0 || iDay > 6) {
			return "<Грешка при изчисление на ден от седмицата. Подадена е невалидна стойност за параметър [0-6]: " + iDay + ">";
		}

		return aDaysOfWeek[iDay];
	};

	/* Допълваме дадено число с водеща нула, ако те е мо-малко от 10 */
	const pad2Digits = (iVal) => {
		return iVal < 10 ? "0" + iVal : new String(iVal); // Обърнете внимание на new String(число) - правим го за да извършим изрично преобразуване на числото в стринг
	};

	let b = a.map((oDate) => {
		let oDateCopy = new Date(oDate.getTime()),
			sDate,
			sHour,
			sDayOfWeek,
			sCountOfDays;

		sDate = "Дата: " + pad2Digits(oDate.getDate()) + "." + pad2Digits((oDate.getMonth() + 1)) + "." + oDate.getFullYear();
		sHour = "час: " + pad2Digits(oDate.getHours()) + ":" + pad2Digits(oDate.getMinutes()) + ":" + pad2Digits(oDate.getSeconds());
		sDayOfWeek = getDayOfWeek(oDate.getDay());

		oDateCopy.setMonth(oDateCopy.getMonth() + 1, 0)
		sCountOfDays =  oDateCopy.getDate() + " дни";

		return sDate + ", " + sHour + ", " + sDayOfWeek + ", " + sCountOfDays;
	});
	printArray(a);
	printArray(b);
}


/* helper functions*/
function printArray(myArray) {
	console.log("Принтиране на масив с дължина " + myArray.length);
	myArray.forEach((elem, index)=> {
		console.log("масив[" + index + "]= " + elem);
	});
}