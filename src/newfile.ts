function calEvent(): void {
    const options = {
        description: 'Описание2',
        location: 'Локация3'
    };
    createCalendarEvent('Новое событие3', new Date('2024-01-17T10:00:00'), new Date('2024-01-17T11:00:00'), options)
}