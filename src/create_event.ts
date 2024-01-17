function createCalendarEvent(title: string, startTime: Date, endTime: Date, options: object): void {
    const calendarId = 'primary';
    const calendar = CalendarApp.getCalendarById(calendarId);
    const event = calendar.createEvent(title, startTime, endTime, options);
    Logger.log('Event created: ' + event.getTitle());
}

