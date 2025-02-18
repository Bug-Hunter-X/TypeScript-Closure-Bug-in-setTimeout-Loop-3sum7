# TypeScript Closure Bug in setTimeout Loop

This repository demonstrates a common bug related to closures in TypeScript when using `setTimeout` within a loop.  The issue arises because the closure does not capture the value of `i` at the time of the loop iteration but rather captures the reference to `i`, which changes over time.  This leads to unexpected and incorrect output.

The `bug.ts` file contains the buggy code, while `bugSolution.ts` provides a corrected version, illustrating the proper approach to handle such scenarios using `let` inside the loop or immediately invoked function expressions.