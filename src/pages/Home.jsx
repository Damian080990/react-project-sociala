import { Layout } from "../components/Layout/Layout";
import { Postview } from "../components/Postrview";

export const Home = () => (
    <Layout>

        <div className="main-content right-chat-active">
            <div className="middle-sidebar-bottom">
                <div className="middle-sidebar-left">
                    <div className="row feed-body">
                        <div className="col-xl-8 col-xxl-9 col-lg-8">
                            <Postview user="Zbigniew" time="12:30" avatar="avatar.jpg"/>
                            <Postview user="Adam" time="12:00" avatar="user.png"/> 
                            <Postview user="Ewa" time="12:35" avatar="avatar.jpg"/>
                            <Postview user="Józek" time="12:33" avatar="user.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
);