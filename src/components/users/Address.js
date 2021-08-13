export const Address = ({address}) => {
    return (
        <ul>
            <li>city: {address.city}</li>
            <li>street: {address.street}</li>
            <li>suite: {address.suite}</li>
            <li>zipcode: {address.zipcode}</li>
            <Geo {...address.geo}/>
        </ul>
    )
}