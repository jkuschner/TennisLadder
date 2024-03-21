// No routing implemation of NavBar
// App refreshes when navbar links are clicked, to improve performance implement react-router-dom

export default function NavBar() {
  const path = window.location.pathname;
  return (
    <nav className="nav">
      <ul> 
        <CustomLink href="/">Ladder</CustomLink>
        <CustomLink href="/matchHistory">Match History</CustomLink>
        <CustomLink href="/enterResults">Enter Results</CustomLink>
        <CustomLink href="/login">Login</CustomLink>
      </ul>
    </nav>
  );
};

function CustomLink(
  {href, children} : {href: any; children: any;} ) {
  const path = window.location.pathname;
  var liClass;
  if (path === href) {
    liClass = "active";
  } else {
    liClass = "";
  }
  return (
    <li className = {liClass}>
      <a href={href}>{children}</a>
    </li>
  );
}; 