import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { type, children } = props;
  return (
    <div className="flex-row px-16 py-4">
      <div className="space-y-6 justify-center">
        <Header />
        <div>
          {children}
          <Navigation type={type} />
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <h1 className="text-white text-center text-[32px] sm:text-[40px] font-extrabold font-['Roboto']">
        Selamat Datang
      </h1>
      <h2 className="text-white text-center text-[12px] sm:text-[14px] mt-2 sm:mt-0 font-light font-['Roboto']">
        Masuk dan Wujudkan Pertanian Lebih Cerdas
      </h2>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-white text-center text-sm">
        Belum punya akun?{" "}
        <Link
          to="/register"
          className="text-primary-200 font-bold text-sm hover:text-primary-75"
        >
          Daftar
        </Link>
      </p>
    );
  } else if (type === "register") {
    return (
      <p className="text-white text-center text-sm">
        Sudah punya akun?{" "}
        <Link
          to="/login"
          className="text-primary-200 font-bold text-sm hover:text-primary-75"
        >
          Masuk
        </Link>
      </p>
    );
  }
};

export default AuthLayout;
