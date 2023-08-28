import { useRouter } from "next/router";
import { getEventById } from "@/dummy-data";
import { Fragment } from "react";
import EventSummary from "@/components/event-detail/event-summary";
const EventDetailPage = () => {
    const router = useRouter();
    const eventId = router.query.eventId;
    const event = getEventById(eventId);
    if (!event) {
        return <p>No event found!</p>;
    }
    

  return <Fragment>
    <EventSummary/>
  </Fragment>;
}

export default EventDetailPage;