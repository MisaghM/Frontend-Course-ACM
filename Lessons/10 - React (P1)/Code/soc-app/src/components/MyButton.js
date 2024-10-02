import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const btnStyle = {
  padding: 20
};

function MyButton({ count, onClick }) {
  const theme = useContext(ThemeContext);
  const style = (theme === 'dark') ? { backgroundColor: '#242424' } : { backgroundColor: 'white' };

  return (
    <div style={style}>
      <p>Hi {theme}</p>
      <button style={btnStyle} onClick={onClick}>Clicked {count} times.</button>
    </div>
  );
}

export default MyButton;
