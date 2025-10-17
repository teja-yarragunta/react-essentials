import React from "react";

const App = ({ name }) => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // const formElement = e.currentTarget;
  //   const formData = new FormData(e.currentTarget);
  //   const email = formData.get("email"); // name of input tag
  //   console.log(email);
  //   // Gather the info from the form
  //   // Submit it to a backend
  //   e.currentTarget.reset(); // clears the input fields
  // };
  console.log(name);
  const submit = (formData) => {
    // const email = formData.get("email");
    // const password = formData.get("password");
    // const employmentStatus = formData.get("employmentStatus");
    // console.log(employmentStatus);
    // const dietaryRestrictions = formData.getAll("dietaryRestrictions");
    // console.log(dietaryRestrictions);
    // const favColor = formData.get("favColor");
    // console.log(favColor);

    const data = Object.fromEntries(formData);
    // const dietaryData = formData.getAll("dietaryRestrictions"); // to get check boxes separately, if we check multiple values
    // console.log(dietaryData);

    const dietaryRestrictions = formData.getAll("dietaryRestrictions");
    const allData = {
      ...data,
      dietaryRestrictions,
    };
    console.log(allData);
  };

  return (
    <section>
      <h1>Signup form</h1>
      {/* <form method="post" onSubmit={handleSubmit} action=""> */}
      {/* wont display data on the url, instead it creates a post request and puts it in the body */}
      {/* action="" goes to the file after submitting, in react we can pass a function into action as well. action={handleSubmit} */}
      <form action={submit}>
        {/* behind the scenes of actions, it prevents the default refresh, we can directly access form data, it will automatically reset the form for us, we get a console error stating that when providing a function for the action, we don't need to provide the method */}
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          defaultValue="joe@schmoe.com"
          type="email"
          name="email"
          placeholder="joe@schmoe.com"
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          defaultValue="password123"
          type="password"
          name="password"
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          defaultValue="this is the description"
        ></textarea>

        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="employmentStatus" value="Unemployed" />
            Unemployed
          </label>
          <label>
            <input type="radio" name="employmentStatus" value="Part-time" />
            Part-time
          </label>
          <label>
            <input type="radio" name="employmentStatus" value="Full-time" />
            Full-time
          </label>
        </fieldset>

        <fieldset>
          <legend>Dietary restrictions:</legend>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="kosher" />
            Kosher
          </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="vegan" />
            Vegan
          </label>
          <label>
            <input
              type="checkbox"
              name="dietaryRestrictions"
              defaultChecked={true}
              value="gluten-free"
            />
            Gluten-free
          </label>
        </fieldset>

        <label htmlFor="favColor">What is your favorite color?</label>
        <select id="favColor" name="favColor" defaultValue="">
          <option value="" disabled>
            -- Choose a color --
          </option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>

        <br />
        <button>submit</button>
        {/* we can see when we submit, the url looks like this, because for form the default method is the get method (get request - getting data from the form) - http://localhost:5176/?email=joe%40gmail.com&password=hbjhb. but it's not good idea to include get method on the form for email and password, because those values are visible in the url */}
      </form>
    </section>
  );
};

export default App;
