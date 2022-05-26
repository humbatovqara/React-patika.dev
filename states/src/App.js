// import { useState } from "react";
import { useFormik } from 'formik';

function App() {
  /*
  const [name, setName] = useState("React");
  const [age, setAge] = useState(21);
  const [friends, setFriends] = useState(['Nurlan', 'Ulvi']);
  const [address, setAddress] = useState({ title: "Baku", zip: 12345 });
  */

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      gender: 'male',
      hobbies: [],
      country: "Turkey"
    },
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    },
  });


  return (
    <div className="App">
      {/*   
      <h1>Hello, {name}!</h1>
      <h2>{age}</h2>

      <button onClick={() => setName("Qara")}>Change Name</button>
      <button onClick={() => setAge(22)}>Change Age</button>

      <hr />

      <h2>Friends</h2>
      {
        friends.map((friend, index) => <div key={index}>{friend}</div>)
      }

      <button onClick={() => setFriends([...friends, "Tabriz", "Fuad"])}>Add new friend</button>

      <hr />

      <h2>Address</h2>
      <div>{address.title} {address.zip}</div>

      <button onClick={() => setAddress({ ...address, title: "Gandja" })}>Change the address</button>
    */}

      <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input name="firstName" value={values.firstName} onChange={handleChange} placeholder="Jane" />

          <label htmlFor="lastName">Last Name</label>
          <input name="lastName" value={values.lastName} onChange={handleChange} placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            name="email"
            placeholder="jane@acme.com"
            type="email"
            value={values.email}
          />

          <br /><br />

          <span>Male</span>
          <input checked={values.gender === "male"} type="radio" value="male" name="gender" onChange={handleChange} placeholder="Doe" />

          <span>Female</span>
          <input checked={values.gender === "female"} type="radio" value="female" name="gender" onChange={handleChange} placeholder="Doe" />

          <br /><br />

          <div>
            Play Football
            <input onChange={handleChange} type="checkbox" name="hobbies" value="Football" />
          </div>

          <div>
            Watch Film
            <input onChange={handleChange} type="checkbox" name="hobbies" value="Film" />
          </div>

          <div>
            Photography
            <input onChange={handleChange} type="checkbox" name="hobbies" value="Photography" />
          </div>

          <br /><br />

          <select name="country" onChange={handleChange} value={values.country}>
            <option value="turkey">Turkey</option>
            <option value="england">England</option>
            <option value="usa">USA</option>
          </select>

          <br /><br />

          <button type="submit">Submit</button>

          <br /><br />

          {JSON.stringify(values)}

        </form>
      </div>
    </div >

  );

}

export default App;