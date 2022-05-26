// import { useState } from "react";
import { Formik, Field, Form } from 'formik';

function App() {
  /*
  const [name, setName] = useState("React");
  const [age, setAge] = useState(21);
  const [friends, setFriends] = useState(['Nurlan', 'Ulvi']);
  const [address, setAddress] = useState({ title: "Baku", zip: 12345 });
  */


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
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field id="firstName" name="firstName" placeholder="Jane" />

            <label htmlFor="lastName">Last Name</label>
            <Field id="lastName" name="lastName" placeholder="Doe" />

            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </div>

  );

}

export default App;