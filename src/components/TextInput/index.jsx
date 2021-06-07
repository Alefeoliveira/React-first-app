import P from 'prop-types';
import './styles.css';

export const TextInput = ({ searchValue, handleChange }) => (
  <input
    className="text-input"
    onChange={handleChange}
    type="search"
    value={searchValue}
    placeholder="type your text"
  />
);

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};
