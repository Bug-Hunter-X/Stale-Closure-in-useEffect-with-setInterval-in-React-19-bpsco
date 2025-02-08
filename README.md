# Stale Closure in useEffect with setInterval in React 19

This repository demonstrates a common error encountered when using `setInterval` within a `useEffect` hook in React 19.  The issue stems from the closure over the `count` variable, leading to stale state updates.

## Problem
The original code attempts to increment the count every second. However, due to the closure, the callback function always references the initial value of `count`, resulting in unexpected behavior.

## Solution
The corrected code uses the functional update form of `setCount` to ensure the latest state is always used for calculation.