import { useState } from "react";
import { NotificationsDropDown } from "./NotificationsDropDown";



export const Notifications = () => {
    const [hasNotifications, setHasNotifications] = useState(false); //stan true albo false, domyslnie false

    const toggleHasNotifications = () =>
        // jezeli poprzedni stan byl true to robie sie false, jezeli poprzedni byl false to robi się true (onclick)
        setHasNotifications((prevHasNoti) => !prevHasNoti);

    const handleClose = () => {
        // preventDefault sprawia ze jak sa 2 elementy klikalne a my chcemy zeby wykonala sie tylko akcja z X - z 1 elementu
      //  console.log(event);
       // event.preventDefault();
        setHasNotifications(false);
    };    

    const notiClass = `${hasNotifications ? "show" : ""}`; //jezeli jest true to dodaje klase show w notiClass
// WYŚWIETLA IKONĘ DZWONKA
    return (
        <> 
            <span
                className={`p-2 cursor-pointer text-center ms-auto menu-icon ${notiClass}`}
                id="dropdownMenu3"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={toggleHasNotifications}
            >
                <span className="dot-count bg-warning"></span>
                <i className="feather-bell font-xl text-current"></i>
            </span>
            {hasNotifications && <NotificationsDropDown onClose={handleClose}/>}
        </>
    );
};