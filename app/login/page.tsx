function Login() {
  return (
    <div className="h-full flex items-center">
      <div className="bg-base-50 p-4 flex flex-col gap-6">
        <h1 className="text-4xl">Login</h1>
        <div className="flex flex-col gap-2">
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
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
