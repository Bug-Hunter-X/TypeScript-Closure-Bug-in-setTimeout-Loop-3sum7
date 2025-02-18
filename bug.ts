function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // This will work correctly

function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    setTimeout(() => {
      console.log(i); // Bug: will print n times n
    }, 0);
  }
}

printNumbers2(5); // This will print 6 six times, due to closure