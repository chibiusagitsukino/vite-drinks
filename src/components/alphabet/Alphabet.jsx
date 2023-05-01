import styles from './index.module.scss'


const Alphabet = ({ selectedLetter, setSelectedLetter }) => {

    const alphabet = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ];


      const handleChange = (event) => {
        setSelectedLetter(event.target.value);
      };
    
      return (
        <div className={styles.Alphabet}>
          <label htmlFor="alphabet-select" className={styles.AlphabetLabel}>Select a letter:</label>
          <select id="alphabet-select" className={styles.AlphabetSelect} value={selectedLetter} onChange={handleChange}>
            <option value=""> </option>
            {alphabet.map((letter, index) => (
              <option key={index} value={letter}>
                {letter}
              </option>
            ))}
          </select>
        </div>
      );
    };
    
    export default Alphabet;