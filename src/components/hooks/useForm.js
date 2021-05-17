import { useState } from 'react';

const useForm = (storeItem) => {
    const [list, setList] = useState([]);

    const handleSubmit = event => {
        event.preventDefault();
        item.due = new Date();
    fetch(todoAPI, {
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    })
      .then(response => response.json())
      .then(savedItem => {
        setList([...list, savedItem])
      })
      .catch(console.error);
    }
    return [list, handleSubmit];
}

export default useForm;