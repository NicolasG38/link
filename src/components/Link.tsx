import '../App.css'

function Link(){
    const social=[
        {
            title: "LINKEDIN",
            url: "https://www.linkedin.com/in/nicolasgirard38/",
            icon:"/assets/social/linkedIn.svg",
            key : 1,
        },
        {
            title: "BLUESKY",
            url: "https://bsky.app/profile/thelazyagency.bsky.social",
            icon:"/assets/social/bluesky.svg",
            key : 2,
        },
        {
            title: "INSTAGRAM",
            url: "https://www.instagram.com/thelazyagency/",
            icon:"/assets/social/instagram.svg",
            key : 3,
        },
        {
            title: "THREADS",
            url: "https://www.threads.com/@thelazyagency",
            icon:"/assets/social/threads.svg",
            key : 4,
        },
        {
            title: "GITHUB",
            url: "https://github.com/NicolasG38",
            icon:"/assets/social/github.svg",
            key : 5,
        },
    ]

const socialMap= social.map((item) => (
    <a href={item.url} key={item.key} target={"_blank"}>
        <li className={"linkListItem"}>
            <img src={item.icon} alt={"logo"} className={"link"} />
            <p className={"linkText"}>{item.title}</p>
        </li>
    </a>
))
    return (
        <>
            <h1>
                Retrouvez moi sur mes réseaux !
            </h1>
            <section className={"linkSection"}>
                <ul className={"linkListSection"}>
                    {socialMap}
                </ul>
            </section>
        </>
    )
}

export default Link;