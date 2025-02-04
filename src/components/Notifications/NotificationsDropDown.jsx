import PropTypes from "prop-types";

const userCardNotifications = [
    { name: 'Hendrix Stamp', notificationTime: '3 min', notificationMessage: 'There are many variations of pass..' },
    { name: 'Goria Coast', notificationTime: '2 min', notificationMessage: 'Mobile Apps UI Designer is require..' },
    { name: 'Surfiya Zakir', notificationTime: '1 min', notificationMessage: 'Mobile Apps UI Designer is require..' },
    { name: 'Victor Exrixon', notificationTime: '30 sec', notificationMessage: 'Mobile Apps UI Designer is require..' },


];

export const NotificationsDropDown = ({onClose}) => {
    return (
        <div
                className= 'dropdown-menu p-7 right-0 rounded-xxl border-0 shadow-lg show'
                /* a11ly = accessibility - aria */
                aria-labelledby="dropdownMenu3"
            >
                <div className="flex justify-between items-center">  
                <h4 className="fw-700 font-xss mb-4">Notification</h4>
                <button onClick={onClose} className="cursor-pointer">X</button>
                </div>
                {userCardNotifications.map((userCardNotification) => (
                    <div key={userCardNotification.name} className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
                        <img
                            src="assets/images/user.png"
                            alt="user"
                            className="w40 position-absolute left-0"
                        />
                        <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
                            {userCardNotification.name}{" "}
                            <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
                                {" "}
                                {userCardNotification.notificationTime}
                            </span>
                        </h5>
                        <h6 className="text-grey-500 fw-500 font-xssss lh-4">
                            {userCardNotification.notificationMessage}
                        </h6>
                    </div>
                ))}

            </div>
    )
}

NotificationsDropDown.propTypes = {
    onClose: PropTypes.func.isRequired
};