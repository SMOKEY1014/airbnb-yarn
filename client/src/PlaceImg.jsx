export default function PlaceImg({place, index=0,className}) {
    if (!place?.photos?.length) {
        return ''
    }
    if (!className) {
        className = 'object-cover aspect-square'
    }
    return (
    
        <img className={className} src={'https://airbnb-yarn.onrender.com/uploads/' + place?.photos?.[index]} alt="" />

    )
}