function Navbar() {
  const handleSignupLink = () => {};
  const handleLoginLink = () => {};
  const handleLogout = () => {};
  return (
    <div className="w-screen z-10 flex justify-between p-4 bg-seal-500 sticky top-0 left-0">
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
