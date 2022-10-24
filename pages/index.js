import Layout from "../components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "../constants";
import { getCookie } from "cookies-next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { verify } from "jsonwebtoken";
import { JWT_KEY } from "../constants";
import { useRouter } from "next/router";

export default function Home() {
  const [comLength, setComLength] = useState();

  const router = useRouter();
  useEffect(() => {
    const token = getCookie("x-access-token-admin");

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

  useEffect(() => {
    const loadData = async () => {
      var companies = [];
      await axios
        .get(`${baseURL}/company/all`, {})
        .then((data) => {
          companies = data.data.companies;
          setComLength(companies.length);
        })
        .catch((err) => {
          if (err.response)
            toast.error(err.response.data.msg, {
              position: toast.POSITION.TOP_CENTER,
            });
          else
            toast.error("Internal Server ERROR", {
              position: toast.POSITION.TOP_CENTER,
            });
        });
    };
    loadData();
  }, []); // Fetch Data from Server

  return (
    <Layout>
      <div className="h-screen content-center text-black">
        <div className=" mx-auto px-4 md:px-12 ">
          <div className="flex flex-wrap -mx-1 lg:-mx-4 md:my-8">
            {/* <!-- Column --> */}
            <div className="my-4 px-4 w-full md:w-1/2 lg:my-20 lg:px-4 lg:w-1/3 ">
              {/* Card */}
              <div className="max-w-xs bg-white rounded-lg shadow-md hover:bg-blue-100">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">No. Companies</div>
                </div>
                <div className="flex justify-center text-4xl pb-8 font-bold text-sky-600">
                  {comLength}
                </div>
              </div>
              {/* End Card */}
            </div>
            {/* End Column */}
          </div>
        </div>
        <ToastContainer autoClose={1000} />
      </div>
    </Layout>
  );
}
