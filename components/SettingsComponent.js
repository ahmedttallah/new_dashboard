import About from "./settings/about";
// import Social from "./settings/social";
// import MainStructre from "./settings/main_structre";
// import Branches from "./settings/branches";
// import Staff from "./settings/staff";
// import OutsourceAgency from "./settings/outsource_agency";
// import Clients from "./settings/clients";
// import Jobs from "./settings/jobs";Gwq
// import Reputation from "./settings/reputation";
// import Videos from "./settings/videos";
import { useState } from "react";

const SettingsComponent = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div className="w-full md:w-9/12 mx-">
      {/* Tabs */}
      <div className="flex jusitfy-center flex-wrap">
        <div className="w-full">
          <ul
            className="mx-2 flex flex-wrap -mb-px text-sm font-medium text-center text-blue-600"
            role="tablist"
          >
            <li className="mb-4 mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold px-2 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "bg-gray-100 border-b-2 border-blue-600"
                    : "text-teal-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                About
              </a>
            </li>

            <li className="mb-4 mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold px-2 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "bg-gray-100 border-b-2 border-blue-600"
                    : "text-teal-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Social
              </a>
            </li>

            <li className="mb-4 mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold px-2 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "bg-gray-100  border-b-2 border-blue-600"
                    : "text-teal-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Main Structre
              </a>
            </li>

            <li className="mb-4 mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold px-2 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? "bg-gray-100  border-b-2 border-blue-600"
                    : "text-teal-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                Branches
              </a>
            </li>

            <li className="mb-4 mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold px-2 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 5
                    ? "bg-gray-100  border-b-2 border-blue-600"
                    : "text-teal-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link5"
                role="tablist"
              >
                Staff
              </a>
            </li>

            <li className="mb-4 mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold px-2 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 6
                    ? "bg-gray-100  border-b-2 border-blue-600"
                    : "text-teal-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(6);
                }}
                data-toggle="tab"
                href="#link6"
                role="tablist"
              >
                Out Source
              </a>
            </li>

            <li className="mb-4 mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold px-2 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 7
                    ? "bg-gray-100  border-b-2 border-blue-600"
                    : "text-teal-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(7);
                }}
                data-toggle="tab"
                href="#link7"
                role="tablist"
              >
                Clients
              </a>
            </li>

            <li className="mb-4 mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold px-2 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 8
                    ? "bg-gray-100  border-b-2 border-blue-600"
                    : "text-teal-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(8);
                }}
                data-toggle="tab"
                href="#link8"
                role="tablist"
              >
                Jobs
              </a>
            </li>

            <li className="mb-4 mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold px-2 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 9
                    ? "bg-gray-100  border-b-2 border-blue-600"
                    : "text-teal-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(9);
                }}
                data-toggle="tab"
                href="#link9"
                role="tablist"
              >
                Reputation
              </a>
            </li>

            <li className="mb-4 mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold px-2 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 10 ? "bg-gray-100" : "text-teal-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(10);
                }}
                data-toggle="tab"
                href="#link10"
                role="tablist"
              >
                Videos
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* End of Tabs */}

      {/* Fill Every Tabs */}

      <div className="tab-content tab-space">
        <div className={openTab === 1 ? "block" : "hidden"} id="link1">
          <About />
        </div>

        {/* <div className={openTab === 2 ? "block" : "hidden"} id="link2">
          <Social />
        </div>

        <div className={openTab === 3 ? "block" : "hidden"} id="link3">
          <MainStructre />
        </div>

        <div className={openTab === 4 ? "block" : "hidden"} id="link4">
          <Branches />
        </div>

        <div className={openTab === 5 ? "block" : "hidden"} id="link5">
          <Staff />
        </div>

        <div className={openTab === 6 ? "block" : "hidden"} id="link6">
          <OutsourceAgency />
        </div>

        <div className={openTab === 7 ? "block" : "hidden"} id="link7">
          <Clients />
        </div>

        <div className={openTab === 8 ? "block" : "hidden"} id="link8">
          <Jobs />
        </div>

        <div className={openTab === 9 ? "block" : "hidden"} id="link9">
          <Reputation />
        </div>

        <div className={openTab === 10 ? "block" : "hidden"} id="link10">
          <Videos />
        </div> */}
      </div>

      {/* End of Fill Every Tabs */}
    </div>
  );
};

export default SettingsComponent;
