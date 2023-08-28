import Link from "next/link";
function EventItem(props){
    return (
        <li>
            <img src="" alt="" />
            <div>
            <div>
                <h3>{props.event.title}</h3>
            </div>
            <div>
                <time>{props.event.date}</time>
            </div>
            <div>
                <address>{props.event.location}</address>
            </div>
            <div>
            <Link href=''>Explore Events</Link>
            </div>
            </div>
        </li>
    )
}
export default EventItem;