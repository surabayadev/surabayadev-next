export const isProd = process.env.NODE_ENV === 'production';
export const isLocal = process.env.NODE_ENV === 'development';

export const showLogger = isLocal
  ? true
  : process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true' ?? false;

export const eventbriteId = process.env.EVENTBRITE_ID
export const eventbriteAPIKey = process.env.EVENTBRITE_API_KEY
