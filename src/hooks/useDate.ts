export default function useDate() {
  // format date to return today or the days date
  function formatDate(dateString: string) {
    const dayDate = new Date(dateString);
    const today = new Date();

    const isToday =
      dayDate.getDate() === today.getDate() &&
      dayDate.getMonth() === today.getMonth() &&
      dayDate.getFullYear() === today.getFullYear();

    if (isToday) {
      return "Today";
    }
    return dayDate.toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    });
  }

  function formatDateTime(dateTimeString: string) {
    const dayTimeDate = new Date(dateTimeString);

    const formattedDateTime = dayTimeDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    });
    return formattedDateTime;
  }

  return { formatDate, formatDateTime };
}
