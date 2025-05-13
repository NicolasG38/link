import '../App.css'

function MixOfTheMonth(){
    return (
        <>
            <h2>
                Mix of the month
            </h2>
            <iframe className={"youtubeVideo"} src="https://www.youtube.com/embed/GgzsIHT_WS8?si=v-w0G74hHRnim_7N" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p className={"youtube-title"}>
                Miss Monique - Special B'day Podcast 2025 [Melodic Techno/Progressive House DJ Mix]
            </p>
        </>
    )
}

export default MixOfTheMonth;