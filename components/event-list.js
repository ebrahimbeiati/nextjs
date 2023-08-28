import EventItem from "./event/event-item";


function EventList (props){
    const {events}=props;
    return (
        <ul>
            {events.map((event) => (
                <EventItem id={event.id} title={event.title} location={event.location}
                date={event.date} image={event.image} key={event.id}/>
                
            ))}
        </ul>
    );
}
export default EventList;