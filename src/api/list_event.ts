export async function fetchListEvents() {
    try {
        const API_URL = "https://www.eventbriteapi.com/v3/organizations/54649742978/events";
        const response = await fetch(API_URL, {
            headers: {
                Authorization: 'Bearer ' + process.env.EVENTBRITE_API_KEY,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Request failed');
        }

        return await response.json();
        // Process the data further
    } catch (error) {
        return [];
    }
}