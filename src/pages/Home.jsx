import { useEffect, useState } from "react";
import { Layout } from "../components/Layout/Layout";
import { Postview } from "../components/Postrview";
import Loader from "../components/Loader";
import { Createpost } from "../components/Createpost";
import { Storyslider } from "../components/Storyslider";


// const posts = [
//     {
//          user: "Zbigniew",
//          time:"12 minutes ago", 
//          avatar:"avatar.jpg", 
//          postimage:"post.png",
//          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus"
//         },
//     {user: "Adam",
//         time:"15 minutes ago", 
//         avatar:"user.png", 
//         postimage:"post.png",
//         description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus"},
//     {user: "Ewa",
//         time:"12:30", 
//         avatar:"avatar.jpg", 
//         postimage:"post.png",
//         description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus"},
//     {user: "Józek",
//         time:"12:30", 
//         avatar:"user.png", 
//         postimage:"post.png",
//         description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus"}
// ];


export const Home = () => {
  const [posts, setPosts] = useState(); //array
  //HOOK
  useEffect(() => {
    fetch("https://my.api.mockaroo.com/posts.json?key=e1f51e30")
      .then((response) => response.json())
      .then((data) => setPosts(data)); // DANE USTAWIAMY JAKO POSTY W STATE, DZIEKI TEMU SIE WYSWIETLAJA
  }, []); //pobieranie danych z backendu

  const updatedPosts = posts?.map((post) => { //jezeli posty maja wartosc falsy to sie nie wyswietla
    return {
      ...post,
      postimage: `https://picsum.photos/id/${post.id}/800/400`,
    };
  });

  return (
    <Layout>

      <div className="main-content right-chat-active">
        <div className="middle-sidebar-bottom">
          <div className="middle-sidebar-left">
            <div className="row feed-body">
              <div className="col-xl-8 col-xxl-9 col-lg-8">
                <Storyslider />
                <Createpost />
                {!updatedPosts ? ( //DODANIE LOADERA PRZED ZALADOWANIE TRESCI

                  <Loader />
                ) : (
                  updatedPosts.map((post) => (
                    <Postview key={post.id} {...post} />
                  ))
                )}
                {/* <Loader /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
};