export default function useDate() {
  // format date to return today, tomorrow or the days date
  function formatDate(dateString: string) {
    const dayDate = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const isToday =
      dayDate.getDate() === today.getDate() &&
      dayDate.getMonth() === today.getMonth() &&
      dayDate.getFullYear() === today.getFullYear();

    // const isTomorrow =
    //   dayDate.getDate() === tomorrow.getDate() &&
    //   dayDate.getMonth() === tomorrow.getMonth() &&
    //   dayDate.getFullYear() === tomorrow.getFullYear();

    if (isToday) {
      return "Today";
    }
    // if (isTomorrow) {
    //   return "Tomorrow";
    // }
    return dayDate.toLocaleDateString("en-US", {
      weekday: "short",
      month: "long",
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
