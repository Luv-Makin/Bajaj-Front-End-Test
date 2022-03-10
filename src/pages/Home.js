import Card from "../components/Card/Card";

const Home = ({ users }) => {
    console.log(users)
    const userData = users.data
    return (
        <main className="container">
            {userData?.map(({ login, node_id, avatar_url, url, type }) => (
                <Card
                    name={login}
                    key={node_id}
                    link={url.html_url}
                    type={type}
                    image_link={avatar_url}
                />
            ))
            }
        </main>
    )
}

export default Home;