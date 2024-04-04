export default function Bookcard({books}){
    return(
        <> {/*.map-er gjennom books-propen som holder på arrayen med API-data, og skriver
        ut et artikkelkort med de forskjellige verdiene fra API-et som trengs i henhold til oppgaveteksten: */}
        {books?.map(book =>
            <article key={book.key}>
                <h3>{book.title}</h3>
                <p>Forfatter: {book.author_name}</p>
                <p>Første publiseringsår: {book.first_publish_year}</p>
                <p>Gjennomsnittlig rating: {book.ratings_average}</p>
                {/*Fått hjelp av medstudent Mia Wilhelmsen til å få amazon.com-linken til å funke bedre:*/}
                <a href={book.id_amazon && book.id_amazon.length > 0 ? `https://www.amazon.com/s?k=${book.id_amazon[0]}` : `https://www.amazon.com`}><button>Sjekk boka på Amazon!</button></a>
            </article>
        )}
        </>
    )
}