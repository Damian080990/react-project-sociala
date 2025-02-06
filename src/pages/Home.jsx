import { useEffect, useState } from "react";
import { Layout } from "../components/Layout/Layout";
import { Postview } from "../components/Postrview";

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
const [posts, setPosts] = useState();
//HOOK
useEffect(() => {
    fetch("https://my.api.mockaroo.com/posts.json?key=6d1737e0")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []); //pobieranie danych z backendu

  console.log('posts from Home component: ', posts);
  const updatedPosts = posts?.map((post) => {
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
                            {updatedPosts && updatedPosts.length > 0 && updatedPosts.map((post) => (
                                <Postview key={post.id} {...post} /> // uproszczony zapisa Mapowania +destrukturyzacja
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)};