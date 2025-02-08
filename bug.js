```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of previous state in the callback function
    const intervalId = setInterval(() => {
      setCount(count + 1); // This will not update correctly
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```