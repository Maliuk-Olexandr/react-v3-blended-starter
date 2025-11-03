import { FiSearch } from 'react-icons/fi';
import toast from 'react-hot-toast';
import styles from './Form.module.css';
import { useState, type FormEvent } from 'react';

interface FormProps {
  onSearch: (query: string) => void;
}

export default function Form({ onSearch }: FormProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!query.trim()) {
      toast.error('Please enter a search query.');
      return;
    }
    onSearch(query);
    setQuery('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.input}
        placeholder="What do you want to write?"
        name="search"
        autoFocus
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button className={styles.button} type="submit">
        <FiSearch size="16px" />
      </button>
    </form>
  );
}
