import Link from "next/link";
import { useEffect } from "react";
import Layout from "../../components/Layout";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { verify } from "jsonwebtoken";
import { JWT_KEY } from "../../constants";

const Index = () => {
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
    <Layout>
      <div className="h-screen content-center text-black">
        <div className=" mx-auto px-4 md:px-12 ">
          <div className="flex flex-wrap -mx-1 lg:-mx-4 md:my-8">
            {/* <!-- Column --> */}
            <Link href="/company/companies">
              <a className="my-4 px-4 w-full md:w-1/2 lg:my-20 lg:px-4 lg:w-1/3 ">
                {/* Card */}
                <div className="max-w-sm bg-white rounded-lg shadow-md hover:bg-blue-100">
                  <div className="px-6 py-4">
                    <div className="font-bold mb-2">Companies</div>
                  </div>
                  <div className="p-8 ">
                    Here are the Companies that Admins can verify, add, update
                    or delete them.
                  </div>
                </div>
                {/* End Card */}
              </a>
            </Link>
            {/* End Column */}

            {/* <!-- Column --> */}
            <Link href="/company/main-structure">
              <a className="my-4 px-4 w-full md:w-1/2 lg:my-20 lg:px-4 lg:w-1/3 ">
                {/* Card */}
                <div className="max-w-sm bg-white rounded-lg shadow-md hover:bg-blue-100">
                  <div className="px-6 py-4">
                    <div className="font-bold  mb-2">Main Structure</div>
                  </div>
                  <div className="p-8 ">
                    Here are the Companies main Structure where you can add,
                    update or delete them.
                  </div>
                </div>
                {/* End Card */}
              </a>
            </Link>
            {/* End Column */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
