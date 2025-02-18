function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5);

function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    (function(j) {
      setTimeout(() => {
        console.log(j); // Correct: prints 1 to n
      }, 0);
    })(i);
  }
}

printNumbers2(5); // This will print 1 to 5 correctly

function printNumbers3(n: number): void {
    for (let i = 1; i <= n; i++) {
      setTimeout(() => {
        console.log(i); // Correct: prints 1 to n
      }, 0);
    }
  }
  
printNumbers3(5); //This will also print 1 to 5 correctly