import { useState } from 'react';

export default function XCounter() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.wrapper}>
      <h1>XCounter App</h1>
      <h2>{count}</h2>

      <div style={styles.btnRow}>
        <button onClick={() => setCount(count - 1)} style={styles.btn}>-</button>
        <button onClick={() => setCount(count + 1)} style={styles.btn}>+</button>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'sans-serif'
  },
  btnRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px'
  },
  btn: {
    fontSize: '25px',
    padding: '10px 20px',
    cursor: 'pointer'
  }
};
