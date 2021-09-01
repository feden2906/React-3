export default function Car ({id, model, year, price}) {
    return(
        <div>
            <p>Id: {id}. Model: {model}, {year}. Price: {price}</p>
        </div>
    );
}