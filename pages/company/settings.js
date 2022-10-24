import SettingsComponent from "../../components/SettingsComponent";
import { getCookie } from "cookies-next";
import { useEffect } from "react";
import axios from "axios";
import { baseURL } from "../../constants";
import { useRouter } from "next/router";
import Link from "next/link";
import { HomeIcon } from "../../components/icons";
import { verify } from "jsonwebtoken";
import { JWT_KEY } from "../../constants";

const Settings = () => {
  const router = useRouter();
  const token = getCookie("x-access-token-admin");

  useEffect(() => {
    const isAuthenticated = async () => {
      if (!token) {
        return router.push("/auth/login");
      }

      const payload = verify(token, JWT_KEY);
      if (!payload) {
        // otherwise, return a bad request error
        return router.push("/auth/login");
      }
    }; // checks if the user is authenticated
    isAuthenticated();
  }); // Ensure Auth

  return (
    <div className="h-full flex justify-center">
      <div className=" my-20 mr-4">
        {/* Back Button */}
        <Link href="/company/companies">
          <a className="mr-2 box-border relative inline-flex items-center justify-center w-auto px-4 py-2 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
            <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="relative z-20 flex items-center text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className=""
              >
                <path d="M19 12H6M12 5l-7 7 7 7" />
              </svg>
              Back
            </span>
          </a>
        </Link>
        {/* End of Back Button */}

        {/* Home Button */}
        <Link href="/">
          <a className="mr-2 box-border relative inline-flex items-center justify-center w-auto px-4 py-2 overflow-hidden font-bold text-white transition-all duration-300 bg-blue-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
            <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="relative z-20 flex items-center text-sm">
              <HomeIcon fill="#FFFFFF" />
              <span className="ml-2">Home</span>
            </span>
          </a>
        </Link>
        {/* End of home Button */}
      </div>

      <SettingsComponent />
    </div>
  );
};

export default Settings;
