//Task1
const greet = (firstName: string) => ('Hello '  +  firstName);
greet('Student') ;

//Task2
const double = (n: number) => n * 2 ;
console.log(double(5))


//Task3
const isEven = (num: number) => num % 2 === 0;
isEven(4) ;

//Task4
const square = (x: number) => x * x;
console.log(square(3));

//Task5
const getAge = (year: number) => 2026 - year;
console.log(getAge(1990));

//Task6
const prices = [10, 20, 30] ;
let total = 0 ;
prices.forEach(p => total += p);
console.log(total);

//Task7
const user = {name: 'John'} ;
const sayHi = () => console.log('Hi ' +  user.name) ;
sayHi();


//Task8
const colors = [{name: 'red'}, {name: 'blue'}] ;
colors.forEach(c => console.log('Color: '  +  c.name)) ;



//Task9
const items = [1, 2, 3] ;
const doubled = items.map(i => i * 2) ;
console.log(doubled);

//Task10
const checkAuth = (user: {isAdmin: boolean}) => user.isAdmin ?  true : false ;
console.log(checkAuth({isAdmin: true})) ;

//Task11
import fs from 'fs/promises' ;
const read = async(path: string) => {
    try {
        const data = await fs.readFile(path, 'utf-8') ;
        console.log(`File content: ${data}`) ;

    }catch(err) {
        console.error('Error reading file:', err);
    }
};
read('example.txt') ;

//Task12
const getData = async(url: string) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch(err) {
        console.error('Error fetching data:', err);
    }
};
getData('https://api.example.com/data') ;


//Task13
const process = (data: number[]) => data.filter(x => x > 10).map(x => x * 2) ;
console.log(process([5, 15, 25])) ;

//Task14
const timer = (ms: number) => new Promise(res => setTimeout(res, ms)) ;
timer(2000).then(() => console.log('Timer done!')) ;

//Task15
const logErr = (m: string) => console.error('Error: ' +  m) ;
logErr('Something went wrong') ;