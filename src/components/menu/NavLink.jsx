const NavLink = (props) => {
  return (
    <a href="/">
      <span className="cursor-pointer border-b-2 pb-[0.4rem] border-transparent hover:border-white mr-5">
        {props.name}
      </span>
    </a>
  );
};

export default NavLink;
