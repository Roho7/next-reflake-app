function Signup() {
  return (
    <div className="h-full flex items-center">
      <div className="bg-base-50 p-4 flex flex-col gap-6 m-10">
        <h1 className="text-4xl">Create an new account</h1>
        <form action="" className="flex flex-col gap-2">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter username"
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
          />
          <input
            type="password"
            id="confirmation"
            name="confirmation"
            placeholder="Confirm password"
          />
          <button>Signup</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
