//arrow functions
const sum = (a, b) => {
    return a+ b;
}

console.log(sum(2,3));
//-------

const input = [1,2,3,4,5];

//solving using map

function transform (i) {
    return i* 2 ;
}

const ans = input.map(transform);
console.log(ans);


//dumb way of solving
const newArray = []
	
for (let i=0; i< input.length; i++) {
		newArray.push(input[i] * 2);
	}
	
console.log (newArray);

//filtering
//what if I tell you, given an input array, give me back all the even values from it.

const arr = [1,2,3,4,5]

// dumb way to solve
const newArr = [];
for (let i=0; i<arr.length; i++){
    if(arr[i] %2 == 0){
        newArr.push(arr[i]);
    }
}

console.log(newArr);

//filter way to solve this problem
const art = [1, 2, 3, 4, 5]; 
// ans 

const answer = arr.filter(function (n) { 
    if(n% 2 == 0){
        return true;
    } else {
        return false;
        }
    });
console.log(answer);

// ans 
// function filterLogic(n) { 
// 	if(n% 2 == 0){
// 		return true;
// 	} else {
// 		return false;
// 		}
// 	}
// const ans = arr.filter(filterLogic);
// console.log(ans);	

//filter example 2
const arr2 = ["pawan", "basant", "anshu"];

//ans
const ans2 = arr2.filter(function (n) {
    if(n.startsWith("p")){
        return true;
    } else {
        return false;
    }
});

console.log(ans2);