function Navbar() {
  const handleSignupLink = () => {};
  const handleLoginLink = () => {};
  const handleLogout = () => {};
  return (
    <div className="">
      <img
        src="src/assets/logo-1.png"
        alt=""
        className="object-contain cursor-pointer"
      />
      {
        <a className="nav-btn" onClick={handleLogout}>
          Logout
        </a>
      }
      {location.pathname === "/login" && (
        <a className="nav-btn" onClick={handleSignupLink}>
          Create Account
        </a>
      )}
      {location.pathname === "/signup" && (
        <a className="nav-btn" onClick={handleLoginLink}>
          Login
        </a>
      )}
    </div>
  );
}

export default Navbar;
