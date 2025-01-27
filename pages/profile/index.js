import Head from "next/head";
import Link from "next/link";
import React from "react";
import Footer from "../../components/Frontend/Footer/Footer";
import NavBar from "../../components/Frontend/Header/NavBar";
import Newsletter from "../../components/Frontend/Home/Newsletter";
import { BsEye } from "react-icons/bs";
import {
  FaRegBuilding,
  FaShoppingBag,
  FaRegUser,
  FaRegSun,
} from "react-icons/fa";
import { useSession, signOut, getSession } from "next-auth/react";

const Profile = () => {
  const { data: session } = useSession();
  console.log(session.user.image);
  return (
    <div>
      <Head>
        <title>Profile || Job Hunt - Bangladesh</title>
        <meta
          name="description"
          content="Profile Page || Job Hunt - Bangladesh || This Website is for job seekers in Bangladesh"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NavBar />

      <div className="container">
        <img
          className="w-100 rounded-4"
          src="https://jobbox-nextjs.vercel.app/assets/imgs/page/candidates/img.png"
          alt="Candidate Cover"
        />
        <div className="px-5">
          <img
            className="company_logo rounded-3"
            src={session?.user?.image}
            alt="Profile"
          />
          <div className="d-flex justify-content-between align-items-start mt-2 mb-4 pb-1">
            <div className="pt-2 pb-1">
              <div className="">
                <div className="d-flex align-items-center">
                  <h3 className="fw-bolder">
                    {session?.user ? session?.user?.name : "Emon Ahmed"}
                  </h3>
                  <div className="d-flex align-items-center px-2">
                    <img
                      className="img18"
                      src="/media/img/location.svg"
                      alt="Jobs Location"
                    />
                    <div className="ms-1">
                      <div className="fontSize17 secondary-text fw-semibold">
                        Dhaka, Bangladesh
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span className="fontSize16">
                UI/UX Designer. Front end Developer
              </span>
            </div>

            <button className="btn bg-primary-color text-white fw-bolder px-5 py-3">
              <Link className="nav-link text-white" href="/sign-in">
                <span className="pe-3 fontSize17">
                  <BsEye />
                </span>
                Preview
              </Link>
            </button>
          </div>
        </div>
        <hr />
        <div className="row align-items-start my-5">
          <div className="col-md-3">
            <div
              className="profile_setting nav flex-column nav-pills me-3 pb-4"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                className="nav-link active px-5 my-2 text-start"
                id="v-pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-home"
                type="button"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                {" "}
                <span className="pe-2">
                  <FaRegBuilding />
                </span>{" "}
                My Profile
              </button>
              <button
                className="nav-link px-5 my-2 text-start"
                id="v-pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-profile"
                type="button"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                {" "}
                <span className="pe-2">
                  <FaShoppingBag />{" "}
                </span>
                Applied Jobs
              </button>
              <button
                className="nav-link px-5 my-2 text-start"
                id="v-pills-messages-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-messages"
                type="button"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                {" "}
                <span className="pe-2">
                  <FaRegUser />
                </span>{" "}
                My Jobs
              </button>
              <button
                className="nav-link px-5 my-2 text-start"
                id="v-pills-settings-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-settings"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                {" "}
                <span className="pe-2">
                  <FaRegSun />
                </span>{" "}
                Settings
              </button>
            </div>
            <hr />
            <p className="text-start py-2 fontSize13 text-danger">
              Delete Account
            </p>
          </div>
          <div className="col-md-9">
            <div className="tab-content py-2" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
                tabindex="0"
              >
                <h3 className="text-black fw-bolder">My Account</h3>
                <p className="text-black-50 py-1">Update your profile</p>
                <p className="text-black-50 py-1">{session?.user?.email}</p>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
                tabindex="0"
              >
                <h3 className="text-black fw-bolder">Applied Jobs</h3>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
                tabindex="0"
              >
                <h3 className="text-black fw-bolder">My Jobs</h3>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-settings"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
                tabindex="0"
              >
                <h3 className="text-black fw-bolder">Setting</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Profile;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
