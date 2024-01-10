import './App.css';
import Add from './Actions/action';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const [formData, setFormData] = useState({ name: '', age: '', email: '', address: '' });
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Add(formData));
    setFormData({ name: '', age: '', email: '', address: '' });
  };

  return (
    <div className="App">
    <form onSubmit={handleSubmit}>
    <label>Name: </label>
    <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
    <br />

    <label>Age: </label>
    <input type="text" name="age" value={formData.age} onChange={handleInputChange} />
    <br />

    <label>Email: </label>
    <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
    <br />

    <label>Address: </label>
    <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
    <br />

    <button type="submit">Submit</button>
  </form>

  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Email</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.email}</td>
          <td>{item.address}</td>
        </tr>
      ))}
    </tbody>
  </table>
    </div>
  );
}

export default App;
