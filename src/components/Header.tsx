const Header = () => {
  return (
    <div className="flex h-20 flex-row items-center justify-around px-4 sm:px-8">
      <div className="mr-16 sm:mr-32">
        <h1 className="text-xl">Xamã Loja</h1>
      </div>
      <div className="ml-6 flex items-center space-x-4 sm:ml-10">
        <div className="flex items-center">
          <img
            src="/user 1.svg"
            alt="User Icon"
            className="h-[1.125rem] w-[1.125rem]"
          />
          <p className="ml-1 text-sm">Minha Conta</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
