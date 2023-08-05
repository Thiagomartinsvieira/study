const Register = () => {
  return (
    <div>
      <h1>Register to post</h1>
      <p>create your user and share your stories</p>
      <form>
        <label>
          <span>Name:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="username"
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input type="email" name="email" required placeholder="user email" />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="your password"
          />
        </label>
        <label>
          <span>Password Confirmation</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Repet your password"
          />
        </label>
        <button className="btn">Register</button>
      </form>
    </div>
  )
}

export default Register
