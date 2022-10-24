import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dropdown } from "react-dropdown-now";
import "react-dropdown-now/style.css";
import { baseURL } from "../../constants";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import { AddIcon, UpdateIcon, DeleteIcon } from "../icons";

const About = () => {
  const router = useRouter();
  const id = getCookie("edit-company-id");

  // About Section Data comming from Backend.
  const [since, setSince] = useState();
  const [companyForm, setCompanyForm] = useState();
  const [status, setStatus] = useState();
  const [companyType, setCompanyType] = useState();
  const [staff, setStaff] = useState();
  const [capitalMoney, setCapitalMoney] = useState();
  const [currency, setCurrency] = useState();
  const [businessFields, setBusinessFields] = useState([]);
  const [sisterCompany, setSisterCompany] = useState([]);
  const [docs, setDocs] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  const [callCenter, setCallCenter] = useState([]);
  const [whatsApp, setWhatsApp] = useState([]);
  const [companyProfilePDF, setCompanyProfilePDf] = useState();
  const [currentAdress, setCurrentAddress] = useState();
  const [previousAddresses, setPreviousAddresses] = useState([]);

  useEffect(() => {
    const loadData = () => {
      axios
        .get(`${baseURL}/company/profile-data/about`, {
          params: { companyId: id },
        })
        .then((res) => {
          setSince(res.data.aboutData.since);
          setCompanyForm(res.data.aboutData.companyForm);
          setStatus(res.data.aboutData.status);
          setCompanyType(res.data.aboutData.companyType);
          setStaff(res.data.aboutData.staffNumber);
          setCapitalMoney(res.data.aboutData.capitalMoney);
          setCurrency(res.data.aboutData.currency);
          setBusinessFields(res.data.aboutData.businessFields);
          setSisterCompany(res.data.aboutData.sisterCompany);
          setDocs(res.data.aboutData.docs);
          setEmail(res.data.aboutData.email);
          setPhone(res.data.aboutData.phone);
          setCallCenter(res.data.aboutData.callCenter);
          setWhatsApp(res.data.aboutData.whatsApp);
          setCompanyProfilePDf(res.data.aboutData.companyProfilePDF);
          setCurrentAddress(res.data.aboutData.currentAdress);
          setPreviousAddresses(res.data.aboutData.previousAddresses);
        })
        .catch((err) => {
          if (err.response.data) console.log(err.response.data.msg);
          else console.log("Internal Server ERROR");
        });
    };
    if (id) loadData();
  }, [id, router.query]); // Fetch Data From Server

  // Since Area
  const [showAddSinceModal, setShowAddSinceModal] = useState(false);
  const addSinceSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      id: id,
      since: event.target.addsince.value,
    };

    await axios
      .post(`${baseURL}/company/settings/since`, formData)
      .then((res) => {
        toast.success(res.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });

        // Empty input Fields
        event.target.addsince.value = "";

        // Close Update Modal
        setShowAddSinceModal(false);
        router.push(`/company/settings`);
      })
      .catch(function (error) {
        if (error.response) {
          toast.error(error.response.data.msg, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast(error.message);
        }
      });
  };
  //////////
  const [showUpdateSinceModal, setShowUpdateSinceModal] = useState(false);
  const updateSinceSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      id: id,
      since: event.target.addsince.value,
    };

    await axios
      .patch(`${baseURL}/company/settings/since`, formData)
      .then((res) => {
        toast.success(res.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });

        // Empty input Fields
        event.target.addsince.value = "";

        // Close Update Modal
        setShowUpdateSinceModal(false);
        router.push(`/company/settings`);
      })
      .catch(function (error) {
        if (error.response) {
          toast.error(error.response.data.msg, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast(error.message);
        }
      });
  };
  //////////
  const deleteSinceSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      id: id,
      since: "",
    };

    await axios
      .patch(`${baseURL}/company/settings/since`, formData)
      .then((res) => {
        toast.success(res.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });
        router.push(`/company/settings`);
      })
      .catch(function (error) {
        if (error.response) {
          toast.error(error.response.data.msg, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast(error.message);
        }
      });
  };

  // Status Area
  const [showUpdateStatusModal, setShowUpdateStatusModal] = useState(false);
  const [statusDrop, setStatusDrop] = useState({
    label: status,
    value: status,
  });
  /////////
  const updateStatusSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      id: id,
      status: statusDrop.value,
    };

    await axios
      .patch(`${baseURL}/company/settings/status`, formData)
      .then((res) => {
        toast.success(res.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });

        // Close Update Modal
        setShowUpdateStatusModal(false);
        router.push(`/company/settings`);
      })
      .catch(function (error) {
        if (error.response) {
          toast.error(error.response.data.msg, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast(error.message);
        }
      });
  };

  // Company Form Area
  const [showAddComFormModal, setShowAddComFormModal] = useState(false);
  const addComFormSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      id: id,
      companyForm: event.target.addsince.value,
    };

    await axios
      .post(`${baseURL}/company/settings/companyform`, formData)
      .then((res) => {
        toast.success(res.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });

        // Empty input Fields
        event.target.addsince.value = "";

        // Close Update Modal
        setShowAddComFormModal(false);
        router.push(`/company/settings`);
      })
      .catch(function (error) {
        if (error.response) {
          toast.error(error.response.data.msg, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast(error.message);
        }
      });
  };
  //////////
  const [showUpdateComFormModal, setShowUpdateComFormModal] = useState(false);
  const updateComFormSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      id: id,
      companyForm: event.target.addsince.value,
    };

    await axios
      .patch(`${baseURL}/company/settings/companyform`, formData)
      .then((res) => {
        toast.success(res.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });

        // Empty input Fields
        event.target.addsince.value = "";

        // Close Update Modal
        setShowUpdateComFormModal(false);
        router.push(`/company/settings`);
      })
      .catch(function (error) {
        if (error.response) {
          toast.error(error.response.data.msg, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast(error.message);
        }
      });
  };
  //////////
  const deleteComFormSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      id: id,
      companyForm: "",
    };

    await axios
      .patch(`${baseURL}/company/settings/companyform`, formData)
      .then((res) => {
        toast.success(res.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });
        router.push(`/company/settings`);
      })
      .catch(function (error) {
        if (error.response) {
          toast.error(error.response.data.msg, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast(error.message);
        }
      });
  };

  // Company Type Area
  const [showUpdateComTypeModal, setShowUpdateComTypeModal] = useState(false);
  /////////
  const updateComTypeSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      id: id,
      companyType: event.target.addsince.value,
    };

    await axios
      .patch(`${baseURL}/company/settings/companytype`, formData)
      .then((res) => {
        toast.success(res.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });

        // Close Update Modal
        setShowUpdateComTypeModal(false);
        router.push(`/company/settings`);
      })
      .catch(function (error) {
        if (error.response) {
          toast.error(error.response.data.msg, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast(error.message);
        }
      });
  };

  // Staff Area
  const [showAddStaffModal, setShowAddStaffModal] = useState(false);
  const addStaffSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      id: id,
      staffNumber: event.target.addsince.value,
    };

    await axios
      .post(`${baseURL}/company/settings/staffnumber`, formData)
      .then((res) => {
        toast.success(res.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });

        // Empty input Fields
        event.target.addsince.value = "";

        // Close Update Modal
        setShowAddStaffModal(false);
        router.push(`/company/settings`);
      })
      .catch(function (error) {
        if (error.response) {
          toast.error(error.response.data.msg, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast(error.message);
        }
      });
  };
  //////////
  const [showUpdateStaffModal, setShowUpdateStaffModal] = useState(false);
  const updateStaffSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      id: id,
      staffNumber: event.target.addsince.value,
    };

    await axios
      .patch(`${baseURL}/company/settings/staffnumber`, formData)
      .then((res) => {
        toast.success(res.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });

        // Empty input Fields
        event.target.addsince.value = "";

        // Close Update Modal
        setShowUpdateStaffModal(false);
        router.push(`/company/settings`);
      })
      .catch(function (error) {
        if (error.response) {
          toast.error(error.response.data.msg, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast(error.message);
        }
      });
  };
  //////////
  const deleteStaffSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      id: id,
      staffNumber: "",
    };

    await axios
      .patch(`${baseURL}/company/settings/staffnumber`, formData)
      .then((res) => {
        toast.success(res.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });
        router.push(`/company/settings`);
      })
      .catch(function (error) {
        if (error.response) {
          toast.error(error.response.data.msg, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast(error.message);
        }
      });
  };

  // Capital Money Area
  const [showAddCapitalMoneyModal, setShowAddCapitalMoneyModal] =
    useState(false);
  const addCapitalMoneySubmit = async (event) => {
    event.preventDefault();

    const formData = {
      id: id,
      capitalMoney: event.target.addsince.value,
      currency: event.target.addsince2.value,
    };

    await axios
      .post(`${baseURL}/company/settings/capitalmoney`, formData)
      .then((res) => {
        toast.success(res.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });

        // Empty input Fields
        event.target.addsince.value = "";
        event.target.addsince2.value = "";

        // Close Update Modal
        setShowAddCapitalMoneyModal(false);
        router.push(`/company/settings`);
      })
      .catch(function (error) {
        if (error.response) {
          toast.error(error.response.data.msg, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast(error.message);
        }
      });
  };
  //////////
  const [showUpdateCapitalMoneyModal, setShowUpdateCapitalMoneyModal] =
    useState(false);
  const updateCapitalMoneySubmit = async (event) => {
    event.preventDefault();

    const formData = {
      id: id,
      capitalMoney: event.target.addsince.value,
      currency: event.target.addsince2.value,
    };

    await axios
      .patch(`${baseURL}/company/settings/capitalmoney`, formData)
      .then((res) => {
        toast.success(res.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });

        // Empty input Fields
        event.target.addsince.value = "";
        event.target.addsince2.value = "";

        // Close Update Modal
        setShowUpdateCapitalMoneyModal(false);
        router.push(`/company/settings`);
      })
      .catch(function (error) {
        if (error.response) {
          toast.error(error.response.data.msg, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast(error.message);
        }
      });
  };
  //////////
  const deleteCapitalMoneySubmit = async (event) => {
    event.preventDefault();
    const formData = {
      id: id,
      capitalMoney: "",
      currency: "",
    };

    await axios
      .patch(`${baseURL}/company/settings/capitalMoney`, formData)
      .then((res) => {
        toast.success(res.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });
        router.push(`/company/settings`);
      })
      .catch(function (error) {
        if (error.response) {
          toast.error(error.response.data.msg, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast(error.message);
        }
      });
  };

  // Business Fields Area
  const [showAddBusinessFieldsModal, setShowAddBusinessFieldsModal] =
    useState(false);
  const addBusinessFieldsSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      id: id,
      name: event.target.addsince.value,
      link: event.target.addsince2.value,
    };

    await axios
      .post(`${baseURL}/company/settings/businessfields`, formData)
      .then((res) => {
        toast.success(res.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });

        // Empty input Fields
        event.target.addsince.value = "";
        event.target.addsince2.value = "";

        // Close Update Modal
        setShowAddBusinessFieldsModal(false);
        router.push(`/company/settings`);
      })
      .catch(function (error) {
        if (error.response) {
          toast.error(error.response.data.msg, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast(error.message);
        }
      });
  };
  //////////
  const [showUpdateBusinessFieldsModal, setShowUpdateBusinessFieldsModal] =
    useState(false);

  const [fieldId, setFieldId] = useState("");
  const [fieldIdDelete, setFieldIdDelete] = useState("");
  const updateBusinessFieldsSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      id: id,
      fieldId: fieldId,
      name: event.target.addsince.value,
      link: event.target.addsince2.value,
    };

    await axios
      .patch(`${baseURL}/company/settings/businessfields`, formData)
      .then((res) => {
        toast.success(res.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });

        // Empty input Fields
        event.target.addsince.value = "";
        event.target.addsince2.value = "";

        // Close Update Modal
        setShowUpdateBusinessFieldsModal(false);
        router.push(`/company/settings`);
      })
      .catch(function (error) {
        if (error.response) {
          toast.error(error.response.data.msg, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast(error.message);
        }
      });
  };
  //////////
  const deleteBusinessFieldsSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      id: id,
      fieldId: fieldIdDelete,
    };

    await axios
      .patch(`${baseURL}/company/settings/businessfields/del`, formData)
      .then((res) => {
        toast.success(res.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });
        router.push(`/company/settings`);
      })
      .catch(function (error) {
        if (error.response) {
          toast.error(error.response.data.msg, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast(error.message);
        }
      });
  };

  // Sister Companies Area
  const [showAddSisterCompanyModal, setShowAddSisterCompanyModal] =
    useState(false);
  const addSisterCompanySubmit = async (event) => {
    event.preventDefault();

    const formData = {
      id: id,
      name: event.target.addsince.value,
      link: event.target.addsince2.value,
    };

    await axios
      .post(`${baseURL}/company/settings/sistercompany`, formData)
      .then((res) => {
        toast.success(res.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });

        // Empty input Fields
        event.target.addsince.value = "";
        event.target.addsince2.value = "";

        // Close Update Modal
        setShowAddSisterCompanyModal(false);
        router.push(`/company/settings`);
      })
      .catch(function (error) {
        if (error.response) {
          toast.error(error.response.data.msg, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast(error.message);
        }
      });
  };
  //////////
  const [showUpdateSisterCompanyModal, setShowUpdateSisterCompanyModal] =
    useState(false);

  const [sisterCompId, setSisterCompId] = useState("");
  const [sisterCompIdDelete, setSisterCompIdDelete] = useState("");
  const updateSisterCompanySubmit = async (event) => {
    event.preventDefault();

    const formData = {
      id: id,
      sisterCompId: sisterCompId,
      name: event.target.addsince.value,
      link: event.target.addsince2.value,
    };

    await axios
      .patch(`${baseURL}/company/settings/sistercompany`, formData)
      .then((res) => {
        toast.success(res.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });

        // Empty input Fields
        event.target.addsince.value = "";
        event.target.addsince2.value = "";

        // Close Update Modal
        setShowUpdateSisterCompanyModal(false);
        router.push(`/company/settings`);
      })
      .catch(function (error) {
        if (error.response) {
          toast.error(error.response.data.msg, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast(error.message);
        }
      });
  };
  //////////
  const deleteSisterCompanySubmit = async (event) => {
    event.preventDefault();
    const formData = {
      id: id,
      sisterCompId: sisterCompIdDelete,
    };

    await axios
      .patch(`${baseURL}/company/settings/sistercompany/del`, formData)
      .then((res) => {
        toast.success(res.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });
        router.push(`/company/settings`);
      })
      .catch(function (error) {
        if (error.response) {
          toast.error(error.response.data.msg, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast(error.message);
        }
      });
  };

  // Emails Area
  const [showAddEmailModal, setShowAddEmailModal] = useState(false);
  const addEmailSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      id: id,
      email: event.target.addsince.value,
    };

    await axios
      .post(`${baseURL}/company/settings/email`, formData)
      .then((res) => {
        toast.success(res.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });

        // Empty input Fields
        event.target.addsince.value = "";

        // Close Update Modal
        setShowAddEmailModal(false);
        router.push(`/company/settings`);
      })
      .catch(function (error) {
        if (error.response) {
          toast.error(error.response.data.msg, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast(error.message);
        }
      });
  };
  //////////
  const [showUpdateEmailModal, setShowUpdateEmailModal] = useState(false);

  const [emailKey, setEmailKey] = useState("");
  const [emailKeyDelete, setEmailKeyDelete] = useState("");
  const updateEmailSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      id: id,
      emailKey: emailKey,
      email: event.target.addsince.value,
    };

    await axios
      .patch(`${baseURL}/company/settings/email`, formData)
      .then((res) => {
        toast.success(res.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });

        // Empty input Fields
        event.target.addsince.value = "";

        // Close Update Modal
        setShowUpdateEmailModal(false);
        router.push(`/company/settings`);
      })
      .catch(function (error) {
        if (error.response) {
          toast.error(error.response.data.msg, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast(error.message);
        }
      });
  };
  //////////
  const deleteEmailSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      id: id,
      emailKey: emailKeyDelete,
    };

    await axios
      .patch(`${baseURL}/company/settings/email/del`, formData)
      .then((res) => {
        toast.success(res.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });
        router.push(`/company/settings`);
      })
      .catch(function (error) {
        if (error.response) {
          toast.error(error.response.data.msg, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast(error.message);
        }
      });
  };

  // Phones Area
  const [showAddPhoneModal, setShowAddPhoneModal] = useState(false);
  const addPhoneSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      id: id,
      phone: event.target.addsince.value,
    };

    await axios
      .post(`${baseURL}/company/settings/phone`, formData)
      .then((res) => {
        toast.success(res.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });

        // Empty input Fields
        event.target.addsince.value = "";

        // Close Update Modal
        setShowAddPhoneModal(false);
        router.push(`/company/settings`);
      })
      .catch(function (error) {
        if (error.response) {
          toast.error(error.response.data.msg, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast(error.message);
        }
      });
  };
  //////////
  const [showUpdatePhoneModal, setShowUpdatePhoneModal] = useState(false);

  const [phoneKey, setPhoneKey] = useState("");
  const [phoneKeyDelete, setPhoneKeyDelete] = useState("");
  const updatePhoneSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      id: id,
      phoneKey: phoneKey,
      phone: event.target.addsince.value,
    };

    await axios
      .patch(`${baseURL}/company/settings/phone`, formData)
      .then((res) => {
        toast.success(res.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });

        // Empty input Fields
        event.target.addsince.value = "";

        // Close Update Modal
        setShowUpdatePhoneModal(false);
        router.push(`/company/settings`);
      })
      .catch(function (error) {
        if (error.response) {
          toast.error(error.response.data.msg, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast(error.message);
        }
      });
  };
  //////////
  const deletePhoneSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      id: id,
      phoneKey: phoneKeyDelete,
    };

    await axios
      .patch(`${baseURL}/company/settings/phone/del`, formData)
      .then((res) => {
        toast.success(res.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });
        router.push(`/company/settings`);
      })
      .catch(function (error) {
        if (error.response) {
          toast.error(error.response.data.msg, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast(error.message);
        }
      });
  };

  return (
    <div className="bg-white p-3 shadow-sm rounded-sm min-h-screen h-min">
      {/* Start of about section data */}
      <div className="container my-4 mx-auto px-4 md:px-12 text-indigo-800">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {/* Since */}
          {/* <!-- Column --> */}

          {since ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Since
                  </div>
                  <p className="mt-2 text-slate-600">{since}</p>

                  <div className="flex justify-end mt-4">
                    <button
                      onClick={() => {
                        setShowUpdateSinceModal(!showUpdateSinceModal);
                      }}
                      title="Update"
                      className="mx-1 inline-flex items-center py-1 px-2 rounded-md bg-indigo-500 hover:bg-indigo-600"
                    >
                      <UpdateIcon color={"#ffffff"} />
                    </button>

                    <button
                      onClick={deleteSinceSubmit}
                      title="Delete"
                      className="mx-1 inline-flex items-center py-1 px-2 rounded-md bg-red-600 hover:bg-red-700"
                    >
                      <DeleteIcon color={"#ffffff"} />
                    </button>
                  </div>
                </div>
              </div>
              {showUpdateSinceModal ? (
                <div className="mt-10 flex justify-center items-center flex-col w-1/2 rounded-lg shadow-sm h-auto p-2 min-w-min bg-opacity-40	">
                  <form onSubmit={updateSinceSubmit}>
                    <div className="relative z-0 mb-6 w-full group">
                      <input
                        type="text"
                        name="addsince"
                        id="addsince"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="addsince"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        {since}
                      </label>
                      <p className="text-xs text-gray-400 mt-2">e.g. 2022</p>
                    </div>
                    <div className="flex gap-5">
                      <button className="hover:shadow-indigo-800 my-2 w-auto px-4 h-10 bg-indigo-600 text-white rounded-md shadow hover:shadow-xl font-semibold">
                        Update
                      </button>
                      <button
                        className=" w-auto px-6 my-2 border border-red-100 h-10 hover:bg-red-700 hover:text-white bg-red-200  rounded-md text-red-600  hover:shadow-lg font-semibold"
                        onClick={() => setShowUpdateSinceModal(false)}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              ) : null}
              {/* End since update Modal */}
            </div>
          ) : (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Since
                  </div>

                  <div className="flex justify-end mt-4">
                    <button
                      onClick={() => {
                        setShowAddSinceModal(!showAddSinceModal);
                      }}
                      title="Add"
                      className="mx-1 inline-flex items-center py-1 px-2 rounded-md bg-gray-200 hover:bg-gray-300"
                    >
                      <AddIcon color={"#1f2937"} />
                    </button>
                  </div>
                </div>
              </div>

              {showAddSinceModal ? (
                <div className="mt-10 flex justify-center items-center flex-col w-1/2 rounded-lg shadow-sm h-auto p-2 min-w-min bg-opacity-40	">
                  <form onSubmit={addSinceSubmit}>
                    <div className="relative z-0 mb-6 w-full group">
                      <input
                        type="text"
                        name="addsince"
                        id="addsince"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="addsince"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Add a Year
                      </label>
                      <p className="text-xs text-gray-400 mt-2">e.g. 2022</p>
                    </div>
                    <div className="flex gap-5">
                      <button className="hover:shadow-indigo-800 my-2 w-auto px-4 h-10 bg-indigo-600 text-white rounded-md shadow hover:shadow-xl font-semibold">
                        Add
                      </button>
                      <button
                        className=" w-auto px-6 my-2 border border-red-100 h-10 hover:bg-red-700 hover:text-white bg-red-200  rounded-md text-red-600  hover:shadow-lg font-semibold"
                        onClick={() => setShowAddSinceModal(false)}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              ) : null}
              {/* End since add Modal */}
            </div>
          )}
          {/* End of Column */}

          {/* <!-- Column --> */}
          {/* ststus */}
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Status
                </div>
                {status == "Active" ? (
                  <p className="mt-2 text-green-600"> {status} </p>
                ) : (
                  <p className="mt-2 text-yellow-600"> {status} </p>
                )}
                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => {
                      setShowUpdateStatusModal(!showUpdateStatusModal);
                    }}
                    title="Update"
                    className="mx-1 inline-flex items-center py-1 px-2 rounded-md bg-indigo-500 hover:bg-indigo-600"
                  >
                    <UpdateIcon color={"#ffffff"} />
                  </button>
                </div>
              </div>
            </div>
            {showUpdateStatusModal ? (
              <div className="mt-10 flex justify-center items-center flex-col w-1/2 rounded-lg shadow-sm h-auto p-2 min-w-min bg-opacity-40	">
                <form onSubmit={updateStatusSubmit}>
                  <div className="relative z-0 mb-6 w-full group">
                    <Dropdown
                      placeholder={status}
                      name="status"
                      id="status"
                      className={
                        status.value == "Active"
                          ? "text-green-600 "
                          : "text-yellow-500"
                      }
                      options={[
                        "Active",
                        "Inactive Permanently",
                        "Inactive Temporarily",
                      ]}
                      value={statusDrop}
                      onChange={(statusDrop) => setStatusDrop(statusDrop)}
                    />
                  </div>
                  <div className="flex gap-5">
                    <button className="hover:shadow-indigo-800 my-2 w-auto px-4 h-10 bg-indigo-600 text-white rounded-md shadow hover:shadow-xl font-semibold">
                      Update
                    </button>
                    <button
                      className=" w-auto px-6 my-2 border border-red-100 h-10 hover:bg-red-700 hover:text-white bg-red-200  rounded-md text-red-600  hover:shadow-lg font-semibold"
                      onClick={() => setShowUpdateStatusModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            ) : null}
            {/* End since update Modal */}
          </div>
          {/* End of Column */}

          {/* company form */}
          {/* <!-- Column --> */}
          {companyForm ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Company Form
                  </div>
                  <p className="mt-2 text-slate-600">{companyForm}</p>

                  <div className="flex justify-end mt-4">
                    <button
                      onClick={() => {
                        setShowUpdateComFormModal(!showUpdateComFormModal);
                      }}
                      title="Update"
                      className="mx-1 inline-flex items-center py-1 px-2 rounded-md bg-indigo-500 hover:bg-indigo-600"
                    >
                      <UpdateIcon color={"#ffffff"} />
                    </button>

                    <button
                      onClick={deleteComFormSubmit}
                      title="Delete"
                      className="mx-1 inline-flex items-center py-1 px-2 rounded-md bg-red-600 hover:bg-red-700"
                    >
                      <DeleteIcon color={"#ffffff"} />
                    </button>
                  </div>
                </div>
              </div>
              {showUpdateComFormModal ? (
                <div className="mt-10 flex justify-center items-center flex-col w-1/2 rounded-lg shadow-sm h-auto p-2 min-w-min bg-opacity-40	">
                  <form onSubmit={updateComFormSubmit}>
                    <div className="relative z-0 mb-6 w-full group">
                      <input
                        type="text"
                        name="addsince"
                        id="addsince"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="addsince"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        {companyForm}
                      </label>
                      <p className="text-xs text-gray-400 mt-2">e.g. Single</p>
                    </div>
                    <div className="flex gap-5">
                      <button className="hover:shadow-indigo-800 my-2 w-auto px-4 h-10 bg-indigo-600 text-white rounded-md shadow hover:shadow-xl font-semibold">
                        Update
                      </button>
                      <button
                        className=" w-auto px-6 my-2 border border-red-100 h-10 hover:bg-red-700 hover:text-white bg-red-200  rounded-md text-red-600  hover:shadow-lg font-semibold"
                        onClick={() => setShowUpdateComFormModal(false)}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              ) : null}
              {/* End since update Modal */}
            </div>
          ) : (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Company Form
                  </div>
                  <div className="flex justify-end mt-4">
                    <button
                      onClick={() => {
                        setShowAddComFormModal(!showAddComFormModal);
                      }}
                      title="Add"
                      className="mx-1 inline-flex items-center py-1 px-2 rounded-md bg-gray-200 hover:bg-gray-300"
                    >
                      <AddIcon color={"#1f2937"} />
                    </button>
                  </div>
                </div>
              </div>

              {showAddComFormModal ? (
                <div className="mt-10 flex justify-center items-center flex-col w-1/2 rounded-lg shadow-sm h-auto p-2 min-w-min bg-opacity-40	">
                  <form onSubmit={addComFormSubmit}>
                    <div className="relative z-0 mb-6 w-full group">
                      <input
                        type="text"
                        name="addsince"
                        id="addsince"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="addsince"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Add a Form
                      </label>
                      <p className="text-xs text-gray-400 mt-2">e.g. Single</p>
                    </div>
                    <div className="flex gap-5">
                      <button className="hover:shadow-indigo-800 my-2 w-auto px-4 h-10 bg-indigo-600 text-white rounded-md shadow hover:shadow-xl font-semibold">
                        Add
                      </button>
                      <button
                        className=" w-auto px-6 my-2 border border-red-100 h-10 hover:bg-red-700 hover:text-white bg-red-200  rounded-md text-red-600  hover:shadow-lg font-semibold"
                        onClick={() => setShowAddComFormModal(false)}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              ) : null}
              {/* End since add Modal */}
            </div>
          )}
          {/* End of Column */}

          {/* company type */}
          {/* <!-- Column --> */}

          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Company Type
                </div>
                <p className="mt-2 text-slate-600">{companyType}</p>

                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => {
                      setShowUpdateComTypeModal(!showUpdateComTypeModal);
                    }}
                    title="Update"
                    className="mx-1 inline-flex items-center py-1 px-2 rounded-md bg-indigo-500 hover:bg-indigo-600"
                  >
                    <UpdateIcon color={"#ffffff"} />
                  </button>
                </div>
              </div>
            </div>
            {showUpdateComTypeModal ? (
              <div className="mt-10 flex justify-center items-center flex-col w-1/2 rounded-lg shadow-sm h-auto p-2 min-w-min bg-opacity-40	">
                <form onSubmit={updateComTypeSubmit}>
                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="text"
                      name="addsince"
                      id="addsince"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="addsince"
                      className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Add a Type
                    </label>
                    <p className="text-xs text-gray-400 mt-2">e.g. Single</p>
                  </div>
                  <div className="flex gap-5">
                    <button className="hover:shadow-indigo-800 my-2 w-auto px-4 h-10 bg-indigo-600 text-white rounded-md shadow hover:shadow-xl font-semibold">
                      Update
                    </button>
                    <button
                      className=" w-auto px-6 my-2 border border-red-100 h-10 hover:bg-red-700 hover:text-white bg-red-200  rounded-md text-red-600  hover:shadow-lg font-semibold"
                      onClick={() => setShowUpdateComTypeModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            ) : null}
            {/* End since update Modal */}
          </div>
          {/* End of Column */}

          {/* Staff */}
          {/* <!-- Column --> */}

          {staff ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Staff
                  </div>
                  <p className="mt-2 text-slate-600">{staff}</p>

                  <div className="flex justify-end mt-4">
                    <button
                      onClick={() => {
                        setShowUpdateStaffModal(!showUpdateStaffModal);
                      }}
                      title="Update"
                      className="mx-1 inline-flex items-center py-1 px-2 rounded-md bg-indigo-500 hover:bg-indigo-600"
                    >
                      <UpdateIcon color={"#ffffff"} />
                    </button>

                    <button
                      onClick={deleteStaffSubmit}
                      title="Delete"
                      className="mx-1 inline-flex items-center py-1 px-2 rounded-md bg-red-600 hover:bg-red-700"
                    >
                      <DeleteIcon color={"#ffffff"} />
                    </button>
                  </div>
                </div>
              </div>
              {showUpdateStaffModal ? (
                <div className="mt-10 flex justify-center items-center flex-col w-1/2 rounded-lg shadow-sm h-auto p-2 min-w-min bg-opacity-40	">
                  <form onSubmit={updateStaffSubmit}>
                    <div className="relative z-0 mb-6 w-full group">
                      <input
                        type="text"
                        name="addsince"
                        id="addsince"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="addsince"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        {staff}
                      </label>
                      <p className="text-xs text-gray-400 mt-2">
                        e.g. 100 Or Range ~30{" "}
                      </p>
                    </div>
                    <div className="flex gap-5">
                      <button className="hover:shadow-indigo-800 my-2 w-auto px-4 h-10 bg-indigo-600 text-white rounded-md shadow hover:shadow-xl font-semibold">
                        Update
                      </button>
                      <button
                        className=" w-auto px-6 my-2 border border-red-100 h-10 hover:bg-red-700 hover:text-white bg-red-200  rounded-md text-red-600  hover:shadow-lg font-semibold"
                        onClick={() => setShowUpdateStaffModal(false)}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              ) : null}
              {/* End staff update Modal */}
            </div>
          ) : (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Staff
                  </div>

                  <div className="flex justify-end mt-4">
                    <button
                      onClick={() => {
                        setShowAddStaffModal(!showAddStaffModal);
                      }}
                      title="Add"
                      className="mx-1 inline-flex items-center py-1 px-2 rounded-md bg-gray-200 hover:bg-gray-300"
                    >
                      <AddIcon color={"#1f2937"} />
                    </button>
                  </div>
                </div>
              </div>

              {showAddStaffModal ? (
                <div className="mt-10 flex justify-center items-center flex-col w-1/2 rounded-lg shadow-sm h-auto p-2 min-w-min bg-opacity-40	">
                  <form onSubmit={addStaffSubmit}>
                    <div className="relative z-0 mb-6 w-full group">
                      <input
                        type="text"
                        name="addsince"
                        id="addsince"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="addsince"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Add Number or Range
                      </label>
                      <p className="text-xs text-gray-400 mt-2">
                        e.g. 100 Or ~30
                      </p>
                    </div>
                    <div className="flex gap-5">
                      <button className="hover:shadow-indigo-800 my-2 w-auto px-4 h-10 bg-indigo-600 text-white rounded-md shadow hover:shadow-xl font-semibold">
                        Add
                      </button>
                      <button
                        className=" w-auto px-6 my-2 border border-red-100 h-10 hover:bg-red-700 hover:text-white bg-red-200  rounded-md text-red-600  hover:shadow-lg font-semibold"
                        onClick={() => setShowAddStaffModal(false)}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              ) : null}
              {/* End since add Modal */}
            </div>
          )}
          {/* End of Column */}

          {/* Capital Money */}
          {/* <!-- Column --> */}

          {capitalMoney ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Paid Capital Money
                  </div>
                  <p className="mt-2 text-slate-600">
                    {capitalMoney} {currency}
                  </p>

                  <div className="flex justify-end mt-4">
                    <button
                      onClick={() => {
                        setShowUpdateCapitalMoneyModal(
                          !showUpdateCapitalMoneyModal
                        );
                      }}
                      title="Update"
                      className="mx-1 inline-flex items-center py-1 px-2 rounded-md bg-indigo-500 hover:bg-indigo-600"
                    >
                      <UpdateIcon color={"#ffffff"} />
                    </button>

                    <button
                      onClick={deleteCapitalMoneySubmit}
                      title="Delete"
                      className="mx-1 inline-flex items-center py-1 px-2 rounded-md bg-red-600 hover:bg-red-700"
                    >
                      <DeleteIcon color={"#ffffff"} />
                    </button>
                  </div>
                </div>
              </div>
              {showUpdateCapitalMoneyModal ? (
                <div className="mt-10 flex justify-center items-center flex-col w-1/2 rounded-lg shadow-sm h-auto p-2 min-w-min bg-opacity-40	">
                  <form onSubmit={updateCapitalMoneySubmit}>
                    <div className="relative z-0 mb-6 w-full group">
                      <input
                        type="text"
                        name="addsince"
                        id="addsince"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="addsince"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        {capitalMoney}
                      </label>
                      <p className="text-xs text-gray-400 mt-2">e.g. 10000</p>

                      <input
                        type="text"
                        name="addsince2"
                        id="addsince2"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="addsince2"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      ></label>
                      <p className="text-xs text-gray-400 mt-2">
                        e.g. EGP, USD
                      </p>
                    </div>
                    <div className="flex gap-5">
                      <button className="hover:shadow-indigo-800 my-2 w-auto px-4 h-10 bg-indigo-600 text-white rounded-md shadow hover:shadow-xl font-semibold">
                        Update
                      </button>
                      <button
                        className=" w-auto px-6 my-2 border border-red-100 h-10 hover:bg-red-700 hover:text-white bg-red-200  rounded-md text-red-600  hover:shadow-lg font-semibold"
                        onClick={() => setShowUpdateCapitalMoneyModal(false)}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              ) : null}
              {/* End Capital Money update Modal */}
            </div>
          ) : (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Paid Capital Money
                  </div>

                  <div className="flex justify-end mt-4">
                    <button
                      onClick={() => {
                        setShowAddCapitalMoneyModal(!showAddCapitalMoneyModal);
                      }}
                      title="Add"
                      className="mx-1 inline-flex items-center py-1 px-2 rounded-md bg-gray-200 hover:bg-gray-300"
                    >
                      <AddIcon color={"#1f2937"} />
                    </button>
                  </div>
                </div>
              </div>

              {showAddCapitalMoneyModal ? (
                <div className="mt-10 flex justify-center items-center flex-col w-1/2 rounded-lg shadow-sm h-auto p-2 min-w-min bg-opacity-40	">
                  <form onSubmit={addCapitalMoneySubmit}>
                    <div className="relative z-0 mb-6 w-full group">
                      <input
                        type="text"
                        name="addsince"
                        id="addsince"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="addsince"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        {capitalMoney}
                      </label>
                      <p className="text-xs text-gray-400 mt-2">e.g. 10000</p>

                      <input
                        type="text"
                        name="addsince2"
                        id="addsince2"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="addsince2"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        {currency}
                      </label>
                      <p className="text-xs text-gray-400 mt-2">
                        e.g. EGP, USD
                      </p>
                    </div>
                    <div className="flex gap-5">
                      <button className="hover:shadow-indigo-800 my-2 w-auto px-4 h-10 bg-indigo-600 text-white rounded-md shadow hover:shadow-xl font-semibold">
                        Add
                      </button>
                      <button
                        className=" w-auto px-6 my-2 border border-red-100 h-10 hover:bg-red-700 hover:text-white bg-red-200  rounded-md text-red-600  hover:shadow-lg font-semibold"
                        onClick={() => setShowAddCapitalMoneyModal(false)}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              ) : null}
              {/* End Capital Money add Modal */}
            </div>
          )}
          {/* End of Column */}

          {/* Business Fields */}
          {/* <!-- Column --> */}

          {businessFields.length != 0 ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Business Fields
                  </div>
                  {businessFields.map(function (item, idx) {
                    return (
                      <>
                        <p key={idx} className="mt-2 text-blue-600">
                          <a target="_blank" rel="noreferrer" href={item.link}>
                            {item.name}
                          </a>
                        </p>
                        <div className="flex justify-end mt-4">
                          <button
                            onClick={() => {
                              setFieldId(item._id);
                              setShowUpdateBusinessFieldsModal(
                                !showUpdateBusinessFieldsModal
                              );
                            }}
                            title="Update"
                            className="mx-1 inline-flex items-center py-1 px-2 rounded-md bg-indigo-500 hover:bg-indigo-600"
                          >
                            <UpdateIcon color={"#ffffff"} />
                          </button>

                          <button
                            title="Double Click to Delete"
                            onClick={() => setFieldIdDelete(item._id)}
                            onDoubleClick={deleteBusinessFieldsSubmit}
                            className="mx-1 inline-flex items-center py-1 px-2 rounded-md bg-red-600 hover:bg-red-700"
                          >
                            <DeleteIcon color={"#ffffff"} />
                          </button>
                        </div>
                      </>
                    );
                  })}
                  {showUpdateBusinessFieldsModal ? (
                    <div className="mt-10 flex justify-center items-center flex-col w-1/2 rounded-lg shadow-sm h-auto p-2 min-w-min bg-opacity-40	">
                      <form onSubmit={updateBusinessFieldsSubmit}>
                        <div className="relative z-0 mb-6 w-full group">
                          <input
                            type="text"
                            name="addsince"
                            id="addsince"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            htmlFor="addsince"
                            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Name
                          </label>
                          <p className="text-xs text-gray-400 mt-2">
                            e.g. Software
                          </p>

                          <input
                            type="text"
                            name="addsince2"
                            id="addsince2"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            htmlFor="addsince2"
                            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          ></label>
                          <p className="text-xs text-gray-400 mt-2">
                            e.g. https://en.wikipedia.org/wiki/Software
                          </p>
                        </div>
                        <div className="flex gap-5">
                          <button className="hover:shadow-indigo-800 my-2 w-auto px-4 h-10 bg-indigo-600 text-white rounded-md shadow hover:shadow-xl font-semibold">
                            Update
                          </button>
                          <button
                            className=" w-auto px-6 my-2 border border-red-100 h-10 hover:bg-red-700 hover:text-white bg-red-200  rounded-md text-red-600  hover:shadow-lg font-semibold"
                            onClick={() =>
                              setShowUpdateBusinessFieldsModal(false)
                            }
                          >
                            Close
                          </button>
                        </div>
                      </form>
                    </div>
                  ) : null}
                  {/* End Business Fields update Modal */}
                  <div className="flex justify-end mt-4">
                    <button
                      onClick={() => {
                        setShowAddBusinessFieldsModal(
                          !showAddBusinessFieldsModal
                        );
                      }}
                      title="Add"
                      className="mx-1 inline-flex items-center py-1 px-2 rounded-md bg-gray-200 hover:bg-gray-300"
                    >
                      <AddIcon color={"#1f2937"} />
                    </button>
                  </div>
                </div>
              </div>
              {showAddBusinessFieldsModal ? (
                <div className="mt-10 flex justify-center items-center flex-col w-1/2 rounded-lg shadow-sm h-auto p-2 min-w-min bg-opacity-40	">
                  <form onSubmit={addBusinessFieldsSubmit}>
                    <div className="relative z-0 mb-6 w-full group">
                      <input
                        type="text"
                        name="addsince"
                        id="addsince"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="addsince"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Name
                      </label>
                      <p className="text-xs text-gray-400 mt-2">
                        e.g. Software
                      </p>

                      <input
                        type="text"
                        name="addsince2"
                        id="addsince2"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="addsince2"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      ></label>
                      <p className="text-xs text-gray-400 mt-2">
                        e.g. https://en.wikipedia.org/wiki/Software
                      </p>
                    </div>
                    <div className="flex gap-5">
                      <button className="hover:shadow-indigo-800 my-2 w-auto px-4 h-10 bg-indigo-600 text-white rounded-md shadow hover:shadow-xl font-semibold">
                        Add
                      </button>
                      <button
                        className=" w-auto px-6 my-2 border border-red-100 h-10 hover:bg-red-700 hover:text-white bg-red-200  rounded-md text-red-600  hover:shadow-lg font-semibold"
                        onClick={() => setShowAddBusinessFieldsModal(false)}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              ) : null}
              {/* End Business Fields add Modal */}
            </div>
          ) : (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Business Fields
                  </div>

                  <div className="flex justify-end mt-4">
                    <button
                      onClick={() => {
                        setShowAddBusinessFieldsModal(
                          !showAddBusinessFieldsModal
                        );
                      }}
                      title="Add"
                      className="mx-1 inline-flex items-center py-1 px-2 rounded-md bg-gray-200 hover:bg-gray-300"
                    >
                      <AddIcon color={"#1f2937"} />
                    </button>
                  </div>
                </div>
              </div>

              {showAddBusinessFieldsModal ? (
                <div className="mt-10 flex justify-center items-center flex-col w-1/2 rounded-lg shadow-sm h-auto p-2 min-w-min bg-opacity-40	">
                  <form onSubmit={addBusinessFieldsSubmit}>
                    <div className="relative z-0 mb-6 w-full group">
                      <input
                        type="text"
                        name="addsince"
                        id="addsince"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="addsince"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Name
                      </label>
                      <p className="text-xs text-gray-400 mt-2">
                        e.g. Software
                      </p>

                      <input
                        type="text"
                        name="addsince2"
                        id="addsince2"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="addsince2"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      ></label>
                      <p className="text-xs text-gray-400 mt-2">
                        e.g. https://en.wikipedia.org/wiki/Software
                      </p>
                    </div>
                    <div className="flex gap-5">
                      <button className="hover:shadow-indigo-800 my-2 w-auto px-4 h-10 bg-indigo-600 text-white rounded-md shadow hover:shadow-xl font-semibold">
                        Add
                      </button>
                      <button
                        className=" w-auto px-6 my-2 border border-red-100 h-10 hover:bg-red-700 hover:text-white bg-red-200  rounded-md text-red-600  hover:shadow-lg font-semibold"
                        onClick={() => setShowAddBusinessFieldsModal(false)}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              ) : null}
              {/* End Business Fields add Modal */}
            </div>
          )}
          {/* End of Column */}

          {/* Sister Companies */}
          {/* <!-- Column --> */}

          {sisterCompany.length != 0 ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Sister Companies
                  </div>
                  {sisterCompany.map(function (item, idx) {
                    return (
                      <>
                        <p key={idx} className="mt-2 text-blue-600">
                          <a target="_blank" rel="noreferrer" href={item.link}>
                            {item.name}
                          </a>
                        </p>
                        <div className="flex justify-end mt-4">
                          <button
                            onClick={() => {
                              setSisterCompId(item._id);
                              setShowUpdateSisterCompanyModal(
                                !showUpdateSisterCompanyModal
                              );
                            }}
                            title="Update"
                            className="mx-1 inline-flex items-center py-1 px-2 rounded-md bg-indigo-500 hover:bg-indigo-600"
                          >
                            <UpdateIcon color={"#ffffff"} />
                          </button>

                          <button
                            title="Double Click to Delete"
                            onClick={() => setSisterCompIdDelete(item._id)}
                            onDoubleClick={deleteSisterCompanySubmit}
                            className="mx-1 inline-flex items-center py-1 px-2 rounded-md bg-red-600 hover:bg-red-700"
                          >
                            <DeleteIcon color={"#ffffff"} />
                          </button>
                        </div>
                      </>
                    );
                  })}
                  {showUpdateSisterCompanyModal ? (
                    <div className="mt-10 flex justify-center items-center flex-col w-1/2 rounded-lg shadow-sm h-auto p-2 min-w-min bg-opacity-40	">
                      <form onSubmit={updateSisterCompanySubmit}>
                        <div className="relative z-0 mb-6 w-full group">
                          <input
                            type="text"
                            name="addsince"
                            id="addsince"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            htmlFor="addsince"
                            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Name
                          </label>
                          <p className="text-xs text-gray-400 mt-2">
                            e.g. Emplopedia
                          </p>

                          <input
                            type="text"
                            name="addsince2"
                            id="addsince2"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            htmlFor="addsince2"
                            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          ></label>
                          <p className="text-xs text-gray-400 mt-2">
                            e.g. https://emplopedia.com
                          </p>
                        </div>
                        <div className="flex gap-5">
                          <button className="hover:shadow-indigo-800 my-2 w-auto px-4 h-10 bg-indigo-600 text-white rounded-md shadow hover:shadow-xl font-semibold">
                            Update
                          </button>
                          <button
                            className=" w-auto px-6 my-2 border border-red-100 h-10 hover:bg-red-700 hover:text-white bg-red-200  rounded-md text-red-600  hover:shadow-lg font-semibold"
                            onClick={() =>
                              setShowUpdateSisterCompanyModal(false)
                            }
                          >
                            Close
                          </button>
                        </div>
                      </form>
                    </div>
                  ) : null}
                  {/* End Sister Company update Modal */}
                  <div className="flex justify-end mt-4">
                    <button
                      onClick={() => {
                        setShowAddSisterCompanyModal(
                          !showAddSisterCompanyModal
                        );
                      }}
                      title="Add"
                      className="mx-1 inline-flex items-center py-1 px-2 rounded-md bg-gray-200 hover:bg-gray-300"
                    >
                      <AddIcon color={"#1f2937"} />
                    </button>
                  </div>
                </div>
              </div>
              {showAddSisterCompanyModal ? (
                <div className="mt-10 flex justify-center items-center flex-col w-1/2 rounded-lg shadow-sm h-auto p-2 min-w-min bg-opacity-40	">
                  <form onSubmit={addSisterCompanySubmit}>
                    <div className="relative z-0 mb-6 w-full group">
                      <input
                        type="text"
                        name="addsince"
                        id="addsince"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="addsince"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Name
                      </label>
                      <p className="text-xs text-gray-400 mt-2">
                        e.g. Emplopedia
                      </p>

                      <input
                        type="text"
                        name="addsince2"
                        id="addsince2"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="addsince2"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      ></label>
                      <p className="text-xs text-gray-400 mt-2">
                        e.g. https://emplopedia.com
                      </p>
                    </div>
                    <div className="flex gap-5">
                      <button className="hover:shadow-indigo-800 my-2 w-auto px-4 h-10 bg-indigo-600 text-white rounded-md shadow hover:shadow-xl font-semibold">
                        Add
                      </button>
                      <button
                        className=" w-auto px-6 my-2 border border-red-100 h-10 hover:bg-red-700 hover:text-white bg-red-200  rounded-md text-red-600  hover:shadow-lg font-semibold"
                        onClick={() => setShowAddSisterCompanyModal(false)}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              ) : null}
              {/* End Sister Company add Modal */}
            </div>
          ) : (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Sister Companies
                  </div>

                  <div className="flex justify-end mt-4">
                    <button
                      onClick={() => {
                        setShowAddSisterCompanyModal(
                          !showAddSisterCompanyModal
                        );
                      }}
                      title="Add"
                      className="mx-1 inline-flex items-center py-1 px-2 rounded-md bg-gray-200 hover:bg-gray-300"
                    >
                      <AddIcon color={"#1f2937"} />
                    </button>
                  </div>
                </div>
              </div>

              {showAddSisterCompanyModal ? (
                <div className="mt-10 flex justify-center items-center flex-col w-1/2 rounded-lg shadow-sm h-auto p-2 min-w-min bg-opacity-40	">
                  <form onSubmit={addSisterCompanySubmit}>
                    <div className="relative z-0 mb-6 w-full group">
                      <input
                        type="text"
                        name="addsince"
                        id="addsince"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="addsince"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Name
                      </label>
                      <p className="text-xs text-gray-400 mt-2">
                        e.g. Emplopedia
                      </p>

                      <input
                        type="text"
                        name="addsince2"
                        id="addsince2"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="addsince2"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      ></label>
                      <p className="text-xs text-gray-400 mt-2">
                        e.g. https://emplopedia.com
                      </p>
                    </div>
                    <div className="flex gap-5">
                      <button className="hover:shadow-indigo-800 my-2 w-auto px-4 h-10 bg-indigo-600 text-white rounded-md shadow hover:shadow-xl font-semibold">
                        Add
                      </button>
                      <button
                        className=" w-auto px-6 my-2 border border-red-100 h-10 hover:bg-red-700 hover:text-white bg-red-200  rounded-md text-red-600  hover:shadow-lg font-semibold"
                        onClick={() => setShowAddSisterCompanyModal(false)}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              ) : null}
              {/* End Sister Company add Modal */}
            </div>
          )}
          {/* End of Column */}

          {/* Email */}
          {/* <!-- Column --> */}

          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Emails
                </div>
                {email.map(function (item, idx) {
                  return (
                    <>
                      <p key={idx} className="mt-2 text-blue-600">
                        {item}
                      </p>
                      <div className="flex justify-end mt-4">
                        <button
                          onClick={() => {
                            setEmailKey(item);
                            setShowUpdateEmailModal(!showUpdateEmailModal);
                          }}
                          title="Update"
                          className="mx-1 inline-flex items-center py-1 px-2 rounded-md bg-indigo-500 hover:bg-indigo-600"
                        >
                          <UpdateIcon color={"#ffffff"} />
                        </button>

                        <button
                          title="Double Click to Delete"
                          onClick={() => setEmailKeyDelete(item)}
                          onDoubleClick={deleteEmailSubmit}
                          className="mx-1 inline-flex items-center py-1 px-2 rounded-md bg-red-600 hover:bg-red-700"
                        >
                          <DeleteIcon color={"#ffffff"} />
                        </button>
                      </div>
                    </>
                  );
                })}
                {showUpdateEmailModal ? (
                  <div className="mt-10 flex justify-center items-center flex-col w-1/2 rounded-lg shadow-sm h-auto p-2 min-w-min bg-opacity-40	">
                    <form onSubmit={updateEmailSubmit}>
                      <div className="relative z-0 mb-6 w-full group">
                        <input
                          type="text"
                          name="addsince"
                          id="addsince"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          required
                        />
                        <label
                          htmlFor="addsince"
                          className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Email
                        </label>
                        <p className="text-xs text-gray-400 mt-2">
                          e.g. info@emplopedia.com
                        </p>
                      </div>
                      <div className="flex gap-5">
                        <button className="hover:shadow-indigo-800 my-2 w-auto px-4 h-10 bg-indigo-600 text-white rounded-md shadow hover:shadow-xl font-semibold">
                          Update
                        </button>
                        <button
                          className=" w-auto px-6 my-2 border border-red-100 h-10 hover:bg-red-700 hover:text-white bg-red-200  rounded-md text-red-600  hover:shadow-lg font-semibold"
                          onClick={() => setShowUpdateEmailModal(false)}
                        >
                          Close
                        </button>
                      </div>
                    </form>
                  </div>
                ) : null}
                {/* End Emails update Modal */}
                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => {
                      setShowAddEmailModal(!showAddEmailModal);
                    }}
                    title="Add"
                    className="mx-1 inline-flex items-center py-1 px-2 rounded-md bg-gray-200 hover:bg-gray-300"
                  >
                    <AddIcon color={"#1f2937"} />
                  </button>
                </div>
              </div>
            </div>
            {showAddEmailModal ? (
              <div className="mt-10 flex justify-center items-center flex-col w-1/2 rounded-lg shadow-sm h-auto p-2 min-w-min bg-opacity-40	">
                <form onSubmit={addEmailSubmit}>
                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="text"
                      name="addsince"
                      id="addsince"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="addsince"
                      className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email
                    </label>
                    <p className="text-xs text-gray-400 mt-2">
                      e.g. info@emplopedia.com
                    </p>
                  </div>
                  <div className="flex gap-5">
                    <button className="hover:shadow-indigo-800 my-2 w-auto px-4 h-10 bg-indigo-600 text-white rounded-md shadow hover:shadow-xl font-semibold">
                      Add
                    </button>
                    <button
                      className=" w-auto px-6 my-2 border border-red-100 h-10 hover:bg-red-700 hover:text-white bg-red-200  rounded-md text-red-600  hover:shadow-lg font-semibold"
                      onClick={() => setShowAddEmailModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            ) : null}
            {/* End Emails add Modal */}
          </div>
          {/* End of Column */}

          {/* Phone */}
          {/* <!-- Column --> */}
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Phones
                </div>
                {phone.map(function (item, idx) {
                  return (
                    <>
                      <p key={idx} className="mt-2 text-blue-600">
                        {item}
                      </p>
                      <div className="flex justify-end mt-4">
                        <button
                          onClick={() => {
                            setPhoneKey(item);
                            setShowUpdatePhoneModal(!showUpdatePhoneModal);
                          }}
                          title="Update"
                          className="mx-1 inline-flex items-center py-1 px-2 rounded-md bg-indigo-500 hover:bg-indigo-600"
                        >
                          <UpdateIcon color={"#ffffff"} />
                        </button>

                        <button
                          title="Double Click to Delete"
                          onClick={() => setPhoneKeyDelete(item)}
                          onDoubleClick={deletePhoneSubmit}
                          className="mx-1 inline-flex items-center py-1 px-2 rounded-md bg-red-600 hover:bg-red-700"
                        >
                          <DeleteIcon color={"#ffffff"} />
                        </button>
                      </div>
                    </>
                  );
                })}
                {showUpdatePhoneModal ? (
                  <div className="mt-10 flex justify-center items-center flex-col w-1/2 rounded-lg shadow-sm h-auto p-2 min-w-min bg-opacity-40	">
                    <form onSubmit={updatePhoneSubmit}>
                      <div className="relative z-0 mb-6 w-full group">
                        <input
                          type="text"
                          name="addsince"
                          id="addsince"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          required
                        />
                        <label
                          htmlFor="addsince"
                          className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Phone
                        </label>
                        <p className="text-xs text-gray-400 mt-2">
                          e.g. +20123456789
                        </p>
                      </div>
                      <div className="flex gap-5">
                        <button className="hover:shadow-indigo-800 my-2 w-auto px-4 h-10 bg-indigo-600 text-white rounded-md shadow hover:shadow-xl font-semibold">
                          Update
                        </button>
                        <button
                          className=" w-auto px-6 my-2 border border-red-100 h-10 hover:bg-red-700 hover:text-white bg-red-200  rounded-md text-red-600  hover:shadow-lg font-semibold"
                          onClick={() => setShowUpdatePhoneModal(false)}
                        >
                          Close
                        </button>
                      </div>
                    </form>
                  </div>
                ) : null}
                {/* End Phones update Modal */}
                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => {
                      setShowAddPhoneModal(!showAddPhoneModal);
                    }}
                    title="Add"
                    className="mx-1 inline-flex items-center py-1 px-2 rounded-md bg-gray-200 hover:bg-gray-300"
                  >
                    <AddIcon color={"#1f2937"} />
                  </button>
                </div>
              </div>
            </div>
            {showAddPhoneModal ? (
              <div className="mt-10 flex justify-center items-center flex-col w-1/2 rounded-lg shadow-sm h-auto p-2 min-w-min bg-opacity-40	">
                <form onSubmit={addPhoneSubmit}>
                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="text"
                      name="addsince"
                      id="addsince"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="addsince"
                      className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Phones
                    </label>
                    <p className="text-xs text-gray-400 mt-2">
                      e.g. +20123456789
                    </p>
                  </div>
                  <div className="flex gap-5">
                    <button className="hover:shadow-indigo-800 my-2 w-auto px-4 h-10 bg-indigo-600 text-white rounded-md shadow hover:shadow-xl font-semibold">
                      Add
                    </button>
                    <button
                      className=" w-auto px-6 my-2 border border-red-100 h-10 hover:bg-red-700 hover:text-white bg-red-200  rounded-md text-red-600  hover:shadow-lg font-semibold"
                      onClick={() => setShowAddPhoneModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            ) : null}
            {/* End Phones add Modal */}
          </div>

          {/* End of Column */}

          {/* <!-- Column --> */}

          {callCenter.length != 0 ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      Call Center
                    </div>
                    {callCenter.map(function (item, idx) {
                      return (
                        <p key={idx} className="mt-2 text-slate-600">
                          {item}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {/* End of Column */}

          {/* <!-- Column --> */}

          {whatsApp.length != 0 ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      Whatsapp
                    </div>
                    {whatsApp.map(function (item, idx) {
                      return (
                        <p key={idx} className="mt-2 text-slate-600">
                          {item}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {/* End of Column */}

          {/* <!-- Column --> */}

          {companyProfilePDF ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      Company Profile PDF
                    </div>
                    <p className="mt-2 text-blue-600">
                      <a target="_blank" rel="noreferrer" href="#">
                        {companyProfilePDF}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {/* End of Column */}

          {/* <!-- Column --> */}

          {currentAdress ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      Current Address
                    </div>
                    <p className="mt-2 text-slate-600">
                      {currentAdress.location}
                    </p>
                    <p className="mt-2 text-slate-600">
                      <span className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        From :{" "}
                      </span>{" "}
                      {currentAdress.from}
                    </p>
                    <p className="mt-2 text-slate-600">
                      <span className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        To :{" "}
                      </span>{" "}
                      {currentAdress.to}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {/* End of Column */}

          {/* <!-- Column --> */}

          {previousAddresses.length != 0 ? (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-indigo-200 overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      Previous Addresses
                    </div>
                    {previousAddresses.map(function (item, idx) {
                      return (
                        <span key={idx}>
                          <p className="mt-2 text-slate-600">
                            {previousAddresses.location}
                          </p>
                          <p className="mt-2 text-slate-600">
                            <span className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                              From :{" "}
                            </span>{" "}
                            {previousAddresses.from}
                          </p>
                          <p className="mt-2 text-slate-600">
                            <span className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                              To :{" "}
                            </span>{" "}
                            {previousAddresses.to}
                          </p>
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {/* End of Column */}
        </div>
        <ToastContainer autoClose={1000} />
      </div>
    </div>
  );
};

export default About;
