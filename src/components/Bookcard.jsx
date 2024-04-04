export default function Bookcard({content}){
    return(
        <>
        {content?.map(item =>
            <article key={item.key}>
                <h3>{item.title}</h3>
                <p>Forfatter: {item.author_name}</p>
                <p>Første publiseringsår: {item.first_publish_year}</p>
                <p>Gjennomsnittlig rating: {item.ratings_average}</p>
                <a href={`https://www.amazon.com/s?k=${item.id_amazon}`}><button>Sjekk boka på Amazon!</button></a>
            </article>
        )}
        </>
    )
}