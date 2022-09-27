const NavLink = (props) => {
  return (
    <a href="/">
      <span className="cursor-pointer border-b-2 pb-[0.4rem] border-transparent hover:border-white">
        {props.name}
      </span>
    </a>
  );
};

export default NavLink;
