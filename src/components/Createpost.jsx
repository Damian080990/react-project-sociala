import { useState } from "react";

export const Createpost = () => {
  const [message, setMessage] = useState("");

  const [showDropDown, setShowDropDown] = useState(false);

  const handleShowDropDown = () => {
    setShowDropDown((prevShowDropDown) => !prevShowDropDown);
  }

  const dropDownClass = showDropDown ? 'show' : "";

  const handleChange = (event) => {

    setMessage(event.target.value)
    // console.log(message);
    //Mamy dostęp do message z poziomu całego komponentu {message}
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // nie przeladowuje strony
    try {
      const response = await fetch(
        "https://my.api.mockaroo.com/posts.json?key=e1f51e30",
        {
          method: "post",
          body: JSON.stringify({ message }),
        }
      );
      console.log(response);
      setMessage("");
    } catch {
      console.error("Failed/error occured");
    }
  };
  return (
    <div className="card w-full shadow-xss rounded-xll border-0 ps-4 pt-4 pe-4 pb-3 mb-3">
      <form onSubmit={handleSubmit}>
        <div className="card-body p-0">
          <a
            href="/"
            className="font-xssss fw-600 text-grey-500 card-body p-0 flex items-center"
          >
            <i className="btn-round-sm font-xs text-primary feather-edit-3 me-2 bg-greylight" />
            <button className="cursor-pointer" type="submit">
              Create Post
            </button>
          </a>
        </div>
        <div className="card-body p-0 mt-3 relative">
          <figure className="avatar absolute ms-2 mt-1 top-5">
            <img
              src="assets/images/user.png"
              alt="current user avatar"
              className="shadow-sm rounded-full w30"
            />
          </figure>
          <textarea
            name="message"
            className="h100 bor-0 w-full rounded-xxl p-2 ps-12 font-xssss text-grey-500 fw-500 border-light-md theme-dark-bg"
            cols="30"
            rows="10"
            placeholder="What's on your mind?"
            value={message}
            onChange={handleChange}
          />
        </div>
      </form>
      <div className="card-body flex p-0 mt-0">
        <a
          href="#video"
          className="flex items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"
        >
          <i className="font-md text-danger feather-video me-2" />
          <span className="d-none-xs">Live video</span>
        </a>
        <a
          href="#photo"
          className="flex items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"
        >
          <i className="font-md text-success feather-image me-2" />
          <span className="d-none-xs">Photo/Video</span>
        </a>
        <a
          href="#activity"
          className="flex items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"
        >
          <i className="font-md text-warning feather-camera me-2" />
          <span className="d-none-xs">Feeling/Activity</span>
        </a>
        <div
          className={`ml-auto cursor-pointer relative `}
          id="dropdownMenu4"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={handleShowDropDown}
        >
          <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss" />
          <div
            className={`dropdown-menu p-4 right-0 rounded-xxl border-0 shadow-lg w-100 ${dropDownClass}`}
            aria-labelledby="dropdownMenu4"
          >
            <div className="card-body p-0 flex mt-2">
              <i className="feather-bookmark text-grey-500 me-3 font-lg" />
              <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4 cursor-pointer">
                Save Link
                <span className="block font-xssss fw-500 mt-01 lh-3 text-grey-500">
                  Add this to your saved items
                </span>
              </h4>
            </div>
            <div className="card-body p-0 flex mt-2">
              <i className="feather-alert-circle text-grey-500 me-3 font-lg" />
              <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4 cursor-pointer">
                Hide Post
                <span className="block font-xssss fw-500 mt-01 lh-3 text-grey-500">
                  Save to your saved items
                </span>
              </h4>
            </div>
            <div className="card-body p-0 flex mt-2">
              <i className="feather-alert-octagon text-grey-500 me-3 font-lg" />
              <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4 cursor-pointer">
                Hide All From Group
                <span className="block font-xssss fw-500 mt-01 lh-3 text-grey-500">
                  Save to your saved items
                </span>
              </h4>
            </div>
            <div className="card-body p-0 flex mt-2">
              <i className="feather-lock text-grey-500 me-3 font-lg" />
              <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4 cursor-pointer">
                Unfollow Group
                <span className="block font-xssss fw-500 mt-01 lh-3 text-grey-500">
                  Save to your saved items
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};