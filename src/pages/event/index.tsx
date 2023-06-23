import { useState } from 'react';
export const metadata = {
  title: 'Event - Surabayadev',
  description: 'Page description',
};

import Image from 'next/image';
import Link from 'next/link';

import Layout from '@/components/layout/Layout';
import { eventbriteAPIKey } from '@/constant/env';
import Head from 'next/head';

export async function getStaticProps() {
  // const API_URL = "https://www.eventbriteapi.com/v3/organizations/54649742978/events?order_by=start_desc";
  // const response = await fetch(API_URL, {
  //   headers: {
  //     'Authorization': 'Bearer 3KRZDGMP2VHUUVW2XHCG',
  //     'Content-Type': 'application/json'
  //   }
  // });
  // const result = await response.json()
  // const posts = result.events;

  const result = {
    "pagination": {
      "object_count": 27,
      "page_number": 1,
      "page_size": 50,
      "page_count": 1,
      "has_more_items": false
    },
    "events": [
      {
        "name": {
          "text": "Breaking the Barrier: Unleashing the Power of Frontend & FullStack Web Dev",
          "html": "Breaking the Barrier: Unleashing the Power of Frontend &amp; FullStack Web Dev"
        },
        "description": {
          "text": "Bersiap untuk hadir di SurabayaDev Offline Meetup! Breaking the Barrier: Unleashing the Power of Frontend and FullStack Web Development",
          "html": "Bersiap untuk hadir di SurabayaDev Offline Meetup! Breaking the Barrier: Unleashing the Power of Frontend and FullStack Web Development"
        },
        "url": "https://www.eventbrite.com/e/breaking-the-barrier-unleashing-the-power-of-frontend-fullstack-web-dev-tickets-661811404727",
        "start": {
          "timezone": "Asia/Jakarta",
          "local": "2023-06-24T10:00:00",
          "utc": "2023-06-24T03:00:00Z"
        },
        "end": {
          "timezone": "Asia/Jakarta",
          "local": "2023-06-24T12:00:00",
          "utc": "2023-06-24T05:00:00Z"
        },
        "organization_id": "54649742978",
        "created": "2023-06-18T03:13:38Z",
        "changed": "2023-06-21T16:49:05Z",
        "published": "2023-06-20T03:18:00Z",
        "capacity": 120,
        "capacity_is_custom": true,
        "status": "live",
        "currency": "USD",
        "listed": true,
        "shareable": true,
        "invite_only": false,
        "online_event": false,
        "show_remaining": false,
        "tx_time_limit": 1200,
        "hide_start_date": false,
        "hide_end_date": false,
        "locale": "en_US",
        "is_locked": false,
        "privacy_setting": "unlocked",
        "is_series": false,
        "is_series_parent": false,
        "inventory_type": "limited",
        "is_reserved_seating": false,
        "show_pick_a_seat": false,
        "show_seatmap_thumbnail": false,
        "show_colors_in_seatmap_thumbnail": false,
        "source": "coyote",
        "is_free": true,
        "version": null,
        "summary": "Bersiap untuk hadir di SurabayaDev Offline Meetup! Breaking the Barrier: Unleashing the Power of Frontend and FullStack Web Development",
        "facebook_event_id": null,
        "logo_id": "539144629",
        "organizer_id": "10707642470",
        "venue_id": "160126599",
        "category_id": "102",
        "subcategory_id": "2004",
        "format_id": "2",
        "id": "661811404727",
        "resource_uri": "https://www.eventbriteapi.com/v3/events/661811404727/",
        "is_externally_ticketed": false,
        "logo": {
          "crop_mask": {
            "top_left": {
              "x": 0,
              "y": 0
            },
            "width": 2160,
            "height": 1080
          },
          "original": {
            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F539144629%2F199272588639%2F1%2Foriginal.20230620-054235?auto=format%2Ccompress&q=75&sharp=10&s=864dc485486007c15a49298d91fc3108",
            "width": 2160,
            "height": 1080
          },
          "id": "539144629",
          "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F539144629%2F199272588639%2F1%2Foriginal.20230620-054235?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=aea44d369cb0b96a9f6d994c010e98d1",
          "aspect_ratio": "2",
          "edge_color": "#fae4bd",
          "edge_color_set": true
        }
      },
      {
        "name": {
          "text": "Web Automation Testing with Puppeteer",
          "html": "Web Automation Testing with Puppeteer"
        },
        "description": {
          "text": "Learn the basics of web automation testing using Puppeteer, an open-source Node library, in this webinar. Boost your testing efficiency!",
          "html": "Learn the basics of web automation testing using Puppeteer, an open-source Node library, in this webinar. Boost your testing efficiency!"
        },
        "url": "https://www.eventbrite.com/e/web-automation-testing-with-puppeteer-tickets-600400523127",
        "start": {
          "timezone": "Asia/Jakarta",
          "local": "2023-04-01T15:00:00",
          "utc": "2023-04-01T08:00:00Z"
        },
        "end": {
          "timezone": "Asia/Jakarta",
          "local": "2023-04-01T17:00:00",
          "utc": "2023-04-01T10:00:00Z"
        },
        "organization_id": "54649742978",
        "created": "2023-03-27T13:00:24Z",
        "changed": "2023-04-01T23:47:25Z",
        "published": "2023-03-28T05:03:27Z",
        "capacity": 100,
        "capacity_is_custom": false,
        "status": "completed",
        "currency": "USD",
        "listed": true,
        "shareable": false,
        "invite_only": false,
        "online_event": true,
        "show_remaining": false,
        "tx_time_limit": 1200,
        "hide_start_date": false,
        "hide_end_date": false,
        "locale": "en_US",
        "is_locked": false,
        "privacy_setting": "unlocked",
        "is_series": false,
        "is_series_parent": false,
        "inventory_type": "limited",
        "is_reserved_seating": false,
        "show_pick_a_seat": false,
        "show_seatmap_thumbnail": false,
        "show_colors_in_seatmap_thumbnail": false,
        "source": "coyote",
        "is_free": true,
        "version": null,
        "summary": "Learn the basics of web automation testing using Puppeteer, an open-source Node library, in this webinar. Boost your testing efficiency!",
        "facebook_event_id": null,
        "logo_id": "479143479",
        "organizer_id": "10707642470",
        "venue_id": null,
        "category_id": "102",
        "subcategory_id": "2004",
        "format_id": "2",
        "id": "600400523127",
        "resource_uri": "https://www.eventbriteapi.com/v3/events/600400523127/",
        "is_externally_ticketed": false,
        "logo": {
          "crop_mask": {
            "top_left": {
              "x": 0,
              "y": 0
            },
            "width": 2160,
            "height": 1080
          },
          "original": {
            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F479143479%2F199272588639%2F1%2Foriginal.20230328-030717?auto=format%2Ccompress&q=75&sharp=10&s=7a2f9a12f04a42d56f3863ecd10c92ec",
            "width": 2160,
            "height": 1080
          },
          "id": "479143479",
          "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F479143479%2F199272588639%2F1%2Foriginal.20230328-030717?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=f1ae3f7ea6278fcd7493db4772ff2afb",
          "aspect_ratio": "2",
          "edge_color": "#d5e5cf",
          "edge_color_set": true
        }
      },
      {
        "name": {
          "text": "QA Career Preparation | MQA x SurabayaDev",
          "html": "QA Career Preparation | MQA x SurabayaDev"
        },
        "description": {
          "text": "Mempersiapkan untuk menjadi sebagai seorang Quality Assurance",
          "html": "Mempersiapkan untuk menjadi sebagai seorang Quality Assurance"
        },
        "url": "https://www.eventbrite.com/e/qa-career-preparation-mqa-x-surabayadev-tickets-557755370327",
        "start": {
          "timezone": "Asia/Jakarta",
          "local": "2023-02-25T15:00:00",
          "utc": "2023-02-25T08:00:00Z"
        },
        "end": {
          "timezone": "Asia/Jakarta",
          "local": "2023-02-25T16:30:00",
          "utc": "2023-02-25T09:30:00Z"
        },
        "organization_id": "54649742978",
        "created": "2023-02-21T12:28:38Z",
        "changed": "2023-02-26T04:46:42Z",
        "published": "2023-02-21T16:15:01Z",
        "capacity": 100,
        "capacity_is_custom": false,
        "status": "completed",
        "currency": "USD",
        "listed": true,
        "shareable": true,
        "invite_only": false,
        "online_event": true,
        "show_remaining": false,
        "tx_time_limit": 1200,
        "hide_start_date": false,
        "hide_end_date": false,
        "locale": "en_US",
        "is_locked": false,
        "privacy_setting": "unlocked",
        "is_series": false,
        "is_series_parent": false,
        "inventory_type": "limited",
        "is_reserved_seating": false,
        "show_pick_a_seat": false,
        "show_seatmap_thumbnail": false,
        "show_colors_in_seatmap_thumbnail": false,
        "source": "coyote",
        "is_free": true,
        "version": null,
        "summary": "Mempersiapkan untuk menjadi sebagai seorang Quality Assurance",
        "facebook_event_id": null,
        "logo_id": "451740199",
        "organizer_id": "10707642470",
        "venue_id": null,
        "category_id": "102",
        "subcategory_id": null,
        "format_id": "2",
        "id": "557755370327",
        "resource_uri": "https://www.eventbriteapi.com/v3/events/557755370327/",
        "is_externally_ticketed": false,
        "logo": {
          "crop_mask": {
            "top_left": {
              "x": 0,
              "y": 0
            },
            "width": 2160,
            "height": 1080
          },
          "original": {
            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F451740199%2F199272588639%2F1%2Foriginal.20230222-050855?auto=format%2Ccompress&q=75&sharp=10&s=cf8ce0be7ea13c005dbaf72aa33be976",
            "width": 2160,
            "height": 1080
          },
          "id": "451740199",
          "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F451740199%2F199272588639%2F1%2Foriginal.20230222-050855?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=ef88fea3fe99e10d1810d57b14c4cb9f",
          "aspect_ratio": "2",
          "edge_color": "#ffffff",
          "edge_color_set": true
        }
      },
      {
        "name": {
          "text": "Front End Web Development with React JS | PatriaDev x SurabayaDev",
          "html": "Front End Web Development with React JS | PatriaDev x SurabayaDev"
        },
        "description": {
          "text": "Mengetahui bagaimana kerja seorang front end dev dalam proses web development menggunakan library javascript React JS",
          "html": "Mengetahui bagaimana kerja seorang front end dev dalam proses web development menggunakan library javascript React JS"
        },
        "url": "https://www.eventbrite.com/e/front-end-web-development-with-react-js-patriadev-x-surabayadev-tickets-480802201327",
        "vanity_url": "https://patriadev-surabayadev.eventbrite.com",
        "start": {
          "timezone": "Asia/Jakarta",
          "local": "2022-12-17T15:00:00",
          "utc": "2022-12-17T08:00:00Z"
        },
        "end": {
          "timezone": "Asia/Jakarta",
          "local": "2022-12-17T16:30:00",
          "utc": "2022-12-17T09:30:00Z"
        },
        "organization_id": "54649742978",
        "created": "2022-12-04T10:14:39Z",
        "changed": "2022-12-17T21:10:28Z",
        "published": "2022-12-04T12:42:15Z",
        "capacity": 300,
        "capacity_is_custom": false,
        "status": "completed",
        "currency": "USD",
        "listed": true,
        "shareable": true,
        "invite_only": false,
        "online_event": true,
        "show_remaining": false,
        "tx_time_limit": 1200,
        "hide_start_date": false,
        "hide_end_date": false,
        "locale": "en_US",
        "is_locked": false,
        "privacy_setting": "unlocked",
        "is_series": false,
        "is_series_parent": false,
        "inventory_type": "limited",
        "is_reserved_seating": false,
        "show_pick_a_seat": false,
        "show_seatmap_thumbnail": false,
        "show_colors_in_seatmap_thumbnail": false,
        "source": "coyote",
        "is_free": true,
        "version": null,
        "summary": "Mengetahui bagaimana kerja seorang front end dev dalam proses web development menggunakan library javascript React JS",
        "facebook_event_id": null,
        "logo_id": "404755679",
        "organizer_id": "10707642470",
        "venue_id": null,
        "category_id": "102",
        "subcategory_id": null,
        "format_id": "2",
        "id": "480802201327",
        "resource_uri": "https://www.eventbriteapi.com/v3/events/480802201327/",
        "is_externally_ticketed": false,
        "logo": {
          "crop_mask": {
            "top_left": {
              "x": 0,
              "y": 0
            },
            "width": 2160,
            "height": 1080
          },
          "original": {
            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F404755679%2F199272588639%2F1%2Foriginal.20221205-101809?auto=format%2Ccompress&q=75&sharp=10&s=9aefe059e9f07b0d0545dffda5d9a78c",
            "width": 2160,
            "height": 1080
          },
          "id": "404755679",
          "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F404755679%2F199272588639%2F1%2Foriginal.20221205-101809?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=1852d6fb53e0d9ebd51ca82de84dbf6b",
          "aspect_ratio": "2",
          "edge_color": "#e6f7f8",
          "edge_color_set": true
        }
      },
      {
        "name": {
          "text": "Evaluating User Experience to Build Better Products",
          "html": "Evaluating User Experience to Build Better Products"
        },
        "description": {
          "text": "Heuristic Usability merupakan Metode untuk menganalisa agar memberikan kemudahan dalam penggunaan.",
          "html": "Heuristic Usability merupakan Metode untuk menganalisa agar memberikan kemudahan dalam penggunaan."
        },
        "url": "https://www.eventbrite.com/e/evaluating-user-experience-to-build-better-products-tickets-472558885347",
        "vanity_url": "https://surabayadevuiux.eventbrite.com",
        "start": {
          "timezone": "Asia/Jakarta",
          "local": "2022-11-27T15:00:00",
          "utc": "2022-11-27T08:00:00Z"
        },
        "end": {
          "timezone": "Asia/Jakarta",
          "local": "2022-11-27T17:00:00",
          "utc": "2022-11-27T10:00:00Z"
        },
        "organization_id": "54649742978",
        "created": "2022-11-21T13:17:29Z",
        "changed": "2022-11-28T00:44:18Z",
        "published": "2022-11-22T14:32:28Z",
        "capacity": 300,
        "capacity_is_custom": false,
        "status": "completed",
        "currency": "USD",
        "listed": true,
        "shareable": false,
        "invite_only": false,
        "online_event": true,
        "show_remaining": false,
        "tx_time_limit": 1200,
        "hide_start_date": false,
        "hide_end_date": false,
        "locale": "en_US",
        "is_locked": false,
        "privacy_setting": "unlocked",
        "is_series": false,
        "is_series_parent": false,
        "inventory_type": "limited",
        "is_reserved_seating": false,
        "show_pick_a_seat": false,
        "show_seatmap_thumbnail": false,
        "show_colors_in_seatmap_thumbnail": false,
        "source": "coyote",
        "is_free": true,
        "version": null,
        "summary": "Heuristic Usability merupakan Metode untuk menganalisa agar memberikan kemudahan dalam penggunaan.",
        "facebook_event_id": null,
        "logo_id": "398655539",
        "organizer_id": "10707642470",
        "venue_id": null,
        "category_id": "102",
        "subcategory_id": "2004",
        "format_id": "1",
        "id": "472558885347",
        "resource_uri": "https://www.eventbriteapi.com/v3/events/472558885347/",
        "is_externally_ticketed": false,
        "logo": {
          "crop_mask": {
            "top_left": {
              "x": 0,
              "y": 0
            },
            "width": 2160,
            "height": 1080
          },
          "original": {
            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F398655539%2F199272588639%2F1%2Foriginal.20221123-103052?auto=format%2Ccompress&q=75&sharp=10&s=61d27b8306173f7c336defa1d5d643f3",
            "width": 2160,
            "height": 1080
          },
          "id": "398655539",
          "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F398655539%2F199272588639%2F1%2Foriginal.20221123-103052?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=be012158f50cb3ad3118b892905efcae",
          "aspect_ratio": "2",
          "edge_color": "#ecf5e0",
          "edge_color_set": true
        }
      },
      {
        "name": {
          "text": "Memulai Karir sebagai Product Manager",
          "html": "Memulai Karir sebagai Product Manager"
        },
        "description": {
          "text": "Meet Up Surabaya dev \"Memulai Karir sebagai Product Manager\"",
          "html": "Meet Up Surabaya dev \"Memulai Karir sebagai Product Manager\""
        },
        "url": "https://www.eventbrite.com/e/memulai-karir-sebagai-product-manager-tickets-440262606307",
        "start": {
          "timezone": "Asia/Jakarta",
          "local": "2022-10-29T16:00:00",
          "utc": "2022-10-29T09:00:00Z"
        },
        "end": {
          "timezone": "Asia/Jakarta",
          "local": "2022-10-29T17:00:00",
          "utc": "2022-10-29T10:00:00Z"
        },
        "organization_id": "54649742978",
        "created": "2022-10-12T10:37:47Z",
        "changed": "2022-10-30T00:19:34Z",
        "published": "2022-10-16T01:50:09Z",
        "capacity": 300,
        "capacity_is_custom": false,
        "status": "completed",
        "currency": "USD",
        "listed": true,
        "shareable": true,
        "invite_only": false,
        "online_event": true,
        "show_remaining": false,
        "tx_time_limit": 1200,
        "hide_start_date": false,
        "hide_end_date": false,
        "locale": "en_US",
        "is_locked": false,
        "privacy_setting": "unlocked",
        "is_series": false,
        "is_series_parent": false,
        "inventory_type": "limited",
        "is_reserved_seating": false,
        "show_pick_a_seat": false,
        "show_seatmap_thumbnail": false,
        "show_colors_in_seatmap_thumbnail": false,
        "source": "coyote",
        "is_free": true,
        "version": null,
        "summary": "Meet Up Surabaya dev \"Memulai Karir sebagai Product Manager\"",
        "facebook_event_id": null,
        "logo_id": "379858989",
        "organizer_id": "10707642470",
        "venue_id": null,
        "category_id": "102",
        "subcategory_id": "2999",
        "format_id": "2",
        "id": "440262606307",
        "resource_uri": "https://www.eventbriteapi.com/v3/events/440262606307/",
        "is_externally_ticketed": false,
        "logo": {
          "crop_mask": {
            "top_left": {
              "x": 0,
              "y": 0
            },
            "width": 2160,
            "height": 1080
          },
          "original": {
            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F379858989%2F199272588639%2F1%2Foriginal.20221025-092921?auto=format%2Ccompress&q=75&sharp=10&s=fa25901a00a2769534cb1530f68b413a",
            "width": 2160,
            "height": 1080
          },
          "id": "379858989",
          "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F379858989%2F199272588639%2F1%2Foriginal.20221025-092921?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=d5a688421db6700a6dc1ba9f52433a25",
          "aspect_ratio": "2",
          "edge_color": "#e7d8ce",
          "edge_color_set": true
        }
      },
      {
        "name": {
          "text": "Digital Expansion Through Building User Interface : ReactJS",
          "html": "Digital Expansion Through Building User Interface : ReactJS"
        },
        "description": {
          "text": "Mobile and Web Application Simplified\nExpand your business digitally with ReactJS",
          "html": "Mobile and Web Application Simplified\nExpand your business digitally with ReactJS"
        },
        "url": "https://www.eventbrite.com/e/digital-expansion-through-building-user-interface-reactjs-tickets-432473880017",
        "start": {
          "timezone": "Asia/Jakarta",
          "local": "2022-10-12T18:30:00",
          "utc": "2022-10-12T11:30:00Z"
        },
        "end": {
          "timezone": "Asia/Jakarta",
          "local": "2022-10-12T20:30:00",
          "utc": "2022-10-12T13:30:00Z"
        },
        "organization_id": "54649742978",
        "created": "2022-10-05T10:36:05Z",
        "changed": "2022-10-13T03:59:06Z",
        "published": "2022-10-05T10:58:28Z",
        "capacity": 300,
        "capacity_is_custom": false,
        "status": "completed",
        "currency": "USD",
        "listed": true,
        "shareable": true,
        "invite_only": false,
        "online_event": true,
        "show_remaining": false,
        "tx_time_limit": 1200,
        "hide_start_date": false,
        "hide_end_date": false,
        "locale": "en_US",
        "is_locked": false,
        "privacy_setting": "unlocked",
        "is_series": false,
        "is_series_parent": false,
        "inventory_type": "limited",
        "is_reserved_seating": false,
        "show_pick_a_seat": false,
        "show_seatmap_thumbnail": false,
        "show_colors_in_seatmap_thumbnail": false,
        "source": "coyote",
        "is_free": true,
        "version": null,
        "summary": "Mobile and Web Application Simplified\nExpand your business digitally with ReactJS",
        "facebook_event_id": null,
        "logo_id": "369549679",
        "organizer_id": "10707642470",
        "venue_id": null,
        "category_id": "116",
        "subcategory_id": null,
        "format_id": "10",
        "id": "432473880017",
        "resource_uri": "https://www.eventbriteapi.com/v3/events/432473880017/",
        "is_externally_ticketed": false,
        "logo": {
          "crop_mask": {
            "top_left": {
              "x": 0,
              "y": 33
            },
            "width": 1278,
            "height": 639
          },
          "original": {
            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F369549679%2F199272588639%2F1%2Foriginal.20221008-030721?auto=format%2Ccompress&q=75&sharp=10&s=1dc29ce69227aeb026c77609c39c0dd1",
            "width": 1279,
            "height": 720
          },
          "id": "369549679",
          "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F369549679%2F199272588639%2F1%2Foriginal.20221008-030721?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C33%2C1278%2C639&s=a1c631f2e7d8dcb7190ccc62354ae971",
          "aspect_ratio": "2",
          "edge_color": "#4086f4",
          "edge_color_set": true
        }
      },
      {
        "name": {
          "text": "Begin your journey as a backend engineer",
          "html": "Begin your journey as a backend engineer"
        },
        "description": {
          "text": "Apakah kamu berencana untuk menjadi seorang backend engineer?",
          "html": "Apakah kamu berencana untuk menjadi seorang backend engineer?"
        },
        "url": "https://www.eventbrite.com/e/begin-your-journey-as-a-backend-engineer-tickets-395982503327",
        "start": {
          "timezone": "Asia/Jakarta",
          "local": "2022-08-09T19:30:00",
          "utc": "2022-08-09T12:30:00Z"
        },
        "end": {
          "timezone": "Asia/Jakarta",
          "local": "2022-08-09T21:00:00",
          "utc": "2022-08-09T14:00:00Z"
        },
        "organization_id": "54649742978",
        "created": "2022-08-03T15:41:38Z",
        "changed": "2022-08-10T03:42:44Z",
        "published": "2022-08-04T08:59:05Z",
        "capacity": 200,
        "capacity_is_custom": false,
        "status": "completed",
        "currency": "USD",
        "listed": true,
        "shareable": true,
        "invite_only": false,
        "online_event": true,
        "show_remaining": false,
        "tx_time_limit": 1200,
        "hide_start_date": false,
        "hide_end_date": false,
        "locale": "en_US",
        "is_locked": false,
        "privacy_setting": "unlocked",
        "is_series": false,
        "is_series_parent": false,
        "inventory_type": "limited",
        "is_reserved_seating": false,
        "show_pick_a_seat": false,
        "show_seatmap_thumbnail": false,
        "show_colors_in_seatmap_thumbnail": false,
        "source": "coyote",
        "is_free": true,
        "version": null,
        "summary": "Apakah kamu berencana untuk menjadi seorang backend engineer?",
        "facebook_event_id": null,
        "logo_id": "330251559",
        "organizer_id": "10707642470",
        "venue_id": null,
        "category_id": "102",
        "subcategory_id": "2004",
        "format_id": "1",
        "id": "395982503327",
        "resource_uri": "https://www.eventbriteapi.com/v3/events/395982503327/",
        "is_externally_ticketed": false,
        "logo": {
          "crop_mask": {
            "top_left": {
              "x": 0,
              "y": 0
            },
            "width": 2160,
            "height": 1080
          },
          "original": {
            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F330251559%2F199272588639%2F1%2Foriginal.20220805-050517?auto=format%2Ccompress&q=75&sharp=10&s=30c07297eb2a23ac87d7672229efb9d4",
            "width": 2160,
            "height": 1080
          },
          "id": "330251559",
          "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F330251559%2F199272588639%2F1%2Foriginal.20220805-050517?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=89ca20123566373adb3be9cecc8c3c24",
          "aspect_ratio": "2",
          "edge_color": "#e4ecea",
          "edge_color_set": true
        }
      },
      {
        "name": {
          "text": "Quality Assurance",
          "html": "Quality Assurance"
        },
        "description": {
          "text": "Quality Assurance",
          "html": "Quality Assurance"
        },
        "url": "https://www.eventbrite.com/e/quality-assurance-tickets-267771922027",
        "start": {
          "timezone": "Asia/Jakarta",
          "local": "2022-02-26T16:00:00",
          "utc": "2022-02-26T09:00:00Z"
        },
        "end": {
          "timezone": "Asia/Jakarta",
          "local": "2022-02-26T17:30:00",
          "utc": "2022-02-26T10:30:00Z"
        },
        "organization_id": "54649742978",
        "created": "2022-02-11T17:58:53Z",
        "changed": "2022-02-26T21:07:53Z",
        "published": "2022-02-12T11:46:23Z",
        "capacity": 150,
        "capacity_is_custom": false,
        "status": "completed",
        "currency": "USD",
        "listed": true,
        "shareable": true,
        "invite_only": false,
        "online_event": true,
        "show_remaining": false,
        "tx_time_limit": 1200,
        "hide_start_date": false,
        "hide_end_date": true,
        "locale": "en_US",
        "is_locked": false,
        "privacy_setting": "unlocked",
        "is_series": false,
        "is_series_parent": false,
        "inventory_type": "limited",
        "is_reserved_seating": false,
        "show_pick_a_seat": false,
        "show_seatmap_thumbnail": false,
        "show_colors_in_seatmap_thumbnail": false,
        "source": "coyote",
        "is_free": true,
        "version": null,
        "summary": "Quality Assurance",
        "facebook_event_id": null,
        "logo_id": "228537819",
        "organizer_id": "10707642470",
        "venue_id": null,
        "category_id": "102",
        "subcategory_id": "2999",
        "format_id": "9",
        "id": "267771922027",
        "resource_uri": "https://www.eventbriteapi.com/v3/events/267771922027/",
        "is_externally_ticketed": false,
        "logo": {
          "crop_mask": {
            "top_left": {
              "x": 0,
              "y": 0
            },
            "width": 2160,
            "height": 1080
          },
          "original": {
            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F228537819%2F199272588639%2F1%2Foriginal.20220211-175903?auto=format%2Ccompress&q=75&sharp=10&s=78dbf8258f74aa3144b0ba0537dc25e0",
            "width": 2160,
            "height": 1080
          },
          "id": "228537819",
          "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F228537819%2F199272588639%2F1%2Foriginal.20220211-175903?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=19a7424e984389f06ddc8d20918505da",
          "aspect_ratio": "2",
          "edge_color": "#1f1f1f",
          "edge_color_set": true
        }
      },
      {
        "name": {
          "text": "PELUANG KERJA REMOTE DI PERUSAHAAN LUAR NEGERI",
          "html": "PELUANG KERJA REMOTE DI PERUSAHAAN LUAR NEGERI"
        },
        "description": {
          "text": "Bahas peluang kerja remote di perusahaan luar negeri",
          "html": "Bahas peluang kerja remote di perusahaan luar negeri"
        },
        "url": "https://www.eventbrite.com/e/peluang-kerja-remote-di-perusahaan-luar-negeri-tickets-241722798397",
        "start": {
          "timezone": "Asia/Jakarta",
          "local": "2022-01-16T15:00:00",
          "utc": "2022-01-16T08:00:00Z"
        },
        "end": {
          "timezone": "Asia/Jakarta",
          "local": "2022-01-16T18:00:00",
          "utc": "2022-01-16T11:00:00Z"
        },
        "organization_id": "54649742978",
        "created": "2022-01-08T10:13:42Z",
        "changed": "2022-01-17T00:55:24Z",
        "published": "2022-01-08T10:57:39Z",
        "capacity": 150,
        "capacity_is_custom": false,
        "status": "completed",
        "currency": "USD",
        "listed": true,
        "shareable": true,
        "invite_only": false,
        "online_event": true,
        "show_remaining": false,
        "tx_time_limit": 1200,
        "hide_start_date": false,
        "hide_end_date": true,
        "locale": "en_US",
        "is_locked": false,
        "privacy_setting": "unlocked",
        "is_series": false,
        "is_series_parent": false,
        "inventory_type": "limited",
        "is_reserved_seating": false,
        "show_pick_a_seat": false,
        "show_seatmap_thumbnail": false,
        "show_colors_in_seatmap_thumbnail": false,
        "source": "coyote",
        "is_free": true,
        "version": null,
        "summary": "Bahas peluang kerja remote di perusahaan luar negeri",
        "facebook_event_id": null,
        "logo_id": "209613209",
        "organizer_id": "10707642470",
        "venue_id": null,
        "category_id": "102",
        "subcategory_id": "2999",
        "format_id": "2",
        "id": "241722798397",
        "resource_uri": "https://www.eventbriteapi.com/v3/events/241722798397/",
        "is_externally_ticketed": false,
        "logo": {
          "crop_mask": {
            "top_left": {
              "x": 0,
              "y": 0
            },
            "width": 2160,
            "height": 1080
          },
          "original": {
            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F209613209%2F199272588639%2F1%2Foriginal.20220109-110907?auto=format%2Ccompress&q=75&sharp=10&s=1bc7554037e62ad5167e3c82d657630c",
            "width": 2160,
            "height": 1080
          },
          "id": "209613209",
          "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F209613209%2F199272588639%2F1%2Foriginal.20220109-110907?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=cc66a30c78b00e98568945fd94e27195",
          "aspect_ratio": "2",
          "edge_color": "#1f1f1f",
          "edge_color_set": true
        }
      },
      {
        "name": {
          "text": "Inagurasi Volunteer Surabaya Dev 2021",
          "html": "Inagurasi Volunteer Surabaya Dev 2021"
        },
        "description": {
          "text": "Perpisahan volunteer surabaya dev",
          "html": "Perpisahan volunteer surabaya dev"
        },
        "url": "https://www.eventbrite.com/e/inagurasi-volunteer-surabaya-dev-2021-tickets-212427415117",
        "start": {
          "timezone": "Asia/Jakarta",
          "local": "2021-11-28T09:00:50",
          "utc": "2021-11-28T02:00:50Z"
        },
        "end": {
          "timezone": "Asia/Jakarta",
          "local": "2021-11-28T12:00:15",
          "utc": "2021-11-28T05:00:15Z"
        },
        "organization_id": "54649742978",
        "created": "2021-11-17T11:02:36Z",
        "changed": "2021-11-28T20:55:05Z",
        "published": "2021-11-17T11:08:23Z",
        "capacity": 50,
        "capacity_is_custom": false,
        "status": "completed",
        "currency": "USD",
        "listed": false,
        "shareable": true,
        "invite_only": false,
        "online_event": false,
        "show_remaining": true,
        "tx_time_limit": 480,
        "hide_start_date": false,
        "hide_end_date": false,
        "locale": "en_US",
        "is_locked": false,
        "privacy_setting": "unlocked",
        "is_series": false,
        "is_series_parent": false,
        "inventory_type": "limited",
        "is_reserved_seating": false,
        "show_pick_a_seat": false,
        "show_seatmap_thumbnail": false,
        "show_colors_in_seatmap_thumbnail": false,
        "source": "apiv3_android",
        "is_free": true,
        "version": null,
        "summary": "Perpisahan volunteer surabaya dev",
        "facebook_event_id": null,
        "logo_id": null,
        "organizer_id": "10707642470",
        "venue_id": "73743769",
        "category_id": "113",
        "subcategory_id": null,
        "format_id": "2",
        "id": "212427415117",
        "resource_uri": "https://www.eventbriteapi.com/v3/events/212427415117/",
        "is_externally_ticketed": false,
        "logo": null
      },
      {
        "name": {
          "text": "Inagurasi Volunteer - Octobers 2021",
          "html": "Inagurasi Volunteer - Octobers 2021"
        },
        "description": {
          "text": "Terima kasih untuk pengabdian kalian semuanya para volunteer 2021 batch 1",
          "html": "Terima kasih untuk pengabdian kalian semuanya para volunteer 2021 batch 1"
        },
        "url": "https://www.eventbrite.com/e/inagurasi-volunteer-octobers-2021-tickets-197819071167",
        "start": {
          "timezone": "Asia/Jakarta",
          "local": "2021-10-31T18:00:40",
          "utc": "2021-10-31T11:00:40Z"
        },
        "end": {
          "timezone": "Asia/Jakarta",
          "local": "2021-10-31T21:00:09",
          "utc": "2021-10-31T14:00:09Z"
        },
        "organization_id": "54649742978",
        "created": "2021-10-24T11:09:38Z",
        "changed": "2021-10-24T11:57:59Z",
        "published": "2021-10-24T11:53:34Z",
        "capacity": 100,
        "capacity_is_custom": false,
        "status": "canceled",
        "currency": "USD",
        "listed": true,
        "shareable": true,
        "invite_only": false,
        "online_event": true,
        "show_remaining": true,
        "tx_time_limit": 480,
        "hide_start_date": false,
        "hide_end_date": false,
        "locale": "en_US",
        "is_locked": false,
        "privacy_setting": "unlocked",
        "is_series": false,
        "is_series_parent": false,
        "inventory_type": "limited",
        "is_reserved_seating": false,
        "show_pick_a_seat": false,
        "show_seatmap_thumbnail": false,
        "show_colors_in_seatmap_thumbnail": false,
        "source": "apiv3_android",
        "is_free": true,
        "version": null,
        "summary": "Terima kasih untuk pengabdian kalian semuanya para volunteer 2021 batch 1",
        "facebook_event_id": null,
        "logo_id": null,
        "organizer_id": "10707642470",
        "venue_id": null,
        "category_id": "199",
        "subcategory_id": null,
        "format_id": "2",
        "id": "197819071167",
        "resource_uri": "https://www.eventbriteapi.com/v3/events/197819071167/",
        "is_externally_ticketed": false,
        "logo": null
      },
      {
        "name": {
          "text": "inagurasi volunteer batch 1 - octobers 2021",
          "html": "inagurasi volunteer batch 1 - octobers 2021"
        },
        "description": {
          "text": "terima kasih untuk volunteer batch 1  2021",
          "html": "terima kasih untuk volunteer batch 1  2021"
        },
        "url": "https://www.eventbrite.com/e/inagurasi-volunteer-batch-1-octobers-2021-tickets-197825008927",
        "start": {
          "timezone": "Asia/Jakarta",
          "local": "2021-10-31T10:00:00",
          "utc": "2021-10-31T03:00:00Z"
        },
        "end": {
          "timezone": "Asia/Jakarta",
          "local": "2021-10-31T13:00:00",
          "utc": "2021-10-31T06:00:00Z"
        },
        "organization_id": "54649742978",
        "created": "2021-10-24T12:00:48Z",
        "changed": "2021-10-31T15:50:23Z",
        "published": "2021-10-24T13:41:31Z",
        "capacity": 50,
        "capacity_is_custom": false,
        "status": "completed",
        "currency": "USD",
        "listed": true,
        "shareable": true,
        "invite_only": false,
        "online_event": true,
        "show_remaining": false,
        "tx_time_limit": 480,
        "hide_start_date": false,
        "hide_end_date": false,
        "locale": "en_US",
        "is_locked": false,
        "privacy_setting": "unlocked",
        "is_series": false,
        "is_series_parent": false,
        "inventory_type": "limited",
        "is_reserved_seating": false,
        "show_pick_a_seat": false,
        "show_seatmap_thumbnail": false,
        "show_colors_in_seatmap_thumbnail": false,
        "source": "coyote",
        "is_free": true,
        "version": null,
        "summary": "terima kasih untuk volunteer batch 1  2021",
        "facebook_event_id": null,
        "logo_id": null,
        "organizer_id": "10707642470",
        "venue_id": null,
        "category_id": "113",
        "subcategory_id": "13999",
        "format_id": "2",
        "id": "197825008927",
        "resource_uri": "https://www.eventbriteapi.com/v3/events/197825008927/",
        "is_externally_ticketed": false,
        "logo": null
      },
      {
        "name": {
          "text": "Introduction IoT: MQTT",
          "html": "Introduction IoT: MQTT"
        },
        "description": {
          "text": "Kenalan sama MQTT yang sering digunakan dibidang IoT (Intenet of Things)",
          "html": "Kenalan sama MQTT yang sering digunakan dibidang IoT (Intenet of Things)"
        },
        "url": "https://www.eventbrite.com/e/introduction-iot-mqtt-tickets-169760412965",
        "start": {
          "timezone": "Asia/Jakarta",
          "local": "2021-09-12T15:30:00",
          "utc": "2021-09-12T08:30:00Z"
        },
        "end": {
          "timezone": "Asia/Jakarta",
          "local": "2021-09-12T17:30:00",
          "utc": "2021-09-12T10:30:00Z"
        },
        "organization_id": "54649742978",
        "created": "2021-09-05T12:29:09Z",
        "changed": "2021-09-12T19:37:02Z",
        "published": "2021-09-05T13:05:06Z",
        "capacity": 201,
        "capacity_is_custom": false,
        "status": "completed",
        "currency": "USD",
        "listed": true,
        "shareable": true,
        "invite_only": false,
        "online_event": true,
        "show_remaining": false,
        "tx_time_limit": 900,
        "hide_start_date": false,
        "hide_end_date": true,
        "locale": "en_US",
        "is_locked": false,
        "privacy_setting": "unlocked",
        "is_series": false,
        "is_series_parent": false,
        "inventory_type": "limited",
        "is_reserved_seating": false,
        "show_pick_a_seat": false,
        "show_seatmap_thumbnail": false,
        "show_colors_in_seatmap_thumbnail": false,
        "source": "coyote",
        "is_free": true,
        "version": null,
        "summary": "Kenalan sama MQTT yang sering digunakan dibidang IoT (Intenet of Things)",
        "facebook_event_id": null,
        "logo_id": "146710523",
        "organizer_id": "10707642470",
        "venue_id": null,
        "category_id": "102",
        "subcategory_id": "2999",
        "format_id": "2",
        "id": "169760412965",
        "resource_uri": "https://www.eventbriteapi.com/v3/events/169760412965/",
        "is_externally_ticketed": false,
        "logo": {
          "crop_mask": {
            "top_left": {
              "x": 0,
              "y": 0
            },
            "width": 800,
            "height": 400
          },
          "original": {
            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F146710523%2F199272588639%2F1%2Foriginal.20210905-122937?auto=format%2Ccompress&q=75&sharp=10&s=0629f458e3565fe28fbc74681904689c",
            "width": 800,
            "height": 400
          },
          "id": "146710523",
          "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F146710523%2F199272588639%2F1%2Foriginal.20210905-122937?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C800%2C400&s=b805cd3c7ce32225faf2619d59190601",
          "aspect_ratio": "2",
          "edge_color": "#1f1f1f",
          "edge_color_set": true
        }
      },
      {
        "name": {
          "text": "example",
          "html": "example"
        },
        "description": {
          "text": "example",
          "html": "example"
        },
        "url": "https://www.eventbrite.com/e/example-tickets-153606913413",
        "start": {
          "timezone": "Asia/Bangkok",
          "local": "2021-06-14T19:00:00",
          "utc": "2021-06-14T12:00:00Z"
        },
        "end": {
          "timezone": "Asia/Bangkok",
          "local": "2021-06-14T22:00:00",
          "utc": "2021-06-14T15:00:00Z"
        },
        "organization_id": "54649742978",
        "created": "2021-05-05T06:41:12Z",
        "changed": "2021-06-14T20:16:04Z",
        "published": "2021-05-05T06:42:04Z",
        "capacity": 300,
        "capacity_is_custom": false,
        "status": "completed",
        "currency": "USD",
        "listed": false,
        "shareable": false,
        "invite_only": false,
        "online_event": true,
        "show_remaining": false,
        "tx_time_limit": 480,
        "hide_start_date": false,
        "hide_end_date": false,
        "locale": "en_US",
        "is_locked": false,
        "privacy_setting": "unlocked",
        "is_series": false,
        "is_series_parent": false,
        "inventory_type": "limited",
        "is_reserved_seating": false,
        "show_pick_a_seat": false,
        "show_seatmap_thumbnail": false,
        "show_colors_in_seatmap_thumbnail": false,
        "source": "coyote",
        "is_free": true,
        "version": null,
        "summary": "example",
        "facebook_event_id": null,
        "logo_id": null,
        "organizer_id": "13540762452",
        "venue_id": null,
        "category_id": null,
        "subcategory_id": null,
        "format_id": null,
        "id": "153606913413",
        "resource_uri": "https://www.eventbriteapi.com/v3/events/153606913413/",
        "is_externally_ticketed": false,
        "logo": null
      },
      {
        "name": {
          "text": "How to Build a Mobile App: From Zero to User",
          "html": "How to Build a Mobile App: From Zero to User"
        },
        "description": {
          "text": "sharing and networking about mobile development with mobile developer at CariKosan.com",
          "html": "sharing and networking about mobile development with mobile developer at CariKosan.com"
        },
        "url": "https://www.eventbrite.com/e/how-to-build-a-mobile-app-from-zero-to-user-tickets-129201678699",
        "start": {
          "timezone": "Asia/Jakarta",
          "local": "2020-11-28T19:00:00",
          "utc": "2020-11-28T12:00:00Z"
        },
        "end": {
          "timezone": "Asia/Jakarta",
          "local": "2020-11-28T21:00:00",
          "utc": "2020-11-28T14:00:00Z"
        },
        "organization_id": "54649742978",
        "created": "2020-11-15T08:57:40Z",
        "changed": "2020-11-28T20:44:38Z",
        "published": "2020-11-15T09:05:03Z",
        "capacity": 300,
        "capacity_is_custom": false,
        "status": "completed",
        "currency": "USD",
        "listed": true,
        "shareable": true,
        "invite_only": false,
        "online_event": true,
        "show_remaining": false,
        "tx_time_limit": 480,
        "hide_start_date": false,
        "hide_end_date": false,
        "locale": "en_US",
        "is_locked": false,
        "privacy_setting": "unlocked",
        "is_series": false,
        "is_series_parent": false,
        "inventory_type": "limited",
        "is_reserved_seating": false,
        "show_pick_a_seat": false,
        "show_seatmap_thumbnail": false,
        "show_colors_in_seatmap_thumbnail": false,
        "source": "coyote",
        "is_free": true,
        "version": null,
        "summary": "sharing and networking about mobile development with mobile developer at CariKosan.com",
        "facebook_event_id": null,
        "logo_id": "117944691",
        "organizer_id": "10707642470",
        "venue_id": null,
        "category_id": "102",
        "subcategory_id": null,
        "format_id": "2",
        "id": "129201678699",
        "resource_uri": "https://www.eventbriteapi.com/v3/events/129201678699/",
        "is_externally_ticketed": false,
        "logo": {
          "crop_mask": {
            "top_left": {
              "x": 0,
              "y": 0
            },
            "width": 800,
            "height": 400
          },
          "original": {
            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F117944691%2F199272588639%2F1%2Foriginal.20201117-145915?auto=format%2Ccompress&q=75&sharp=10&s=c63a9c9b17f7ed647cf12bd2c959f702",
            "width": 800,
            "height": 400
          },
          "id": "117944691",
          "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F117944691%2F199272588639%2F1%2Foriginal.20201117-145915?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C800%2C400&s=19e47abae2d508465715378e25149f76",
          "aspect_ratio": "2",
          "edge_color": "#ffffff",
          "edge_color_set": true
        }
      },
      {
        "name": {
          "text": "Cuman Test : Hai Eventbrite Surabaya Dev Sedang Testing (Prototype)",
          "html": "Cuman Test : Hai Eventbrite Surabaya Dev Sedang Testing (Prototype)"
        },
        "description": {
          "text": "Just Test the Eventbrite",
          "html": "Just Test the Eventbrite"
        },
        "url": "https://www.eventbrite.com/e/cuman-test-hai-eventbrite-surabaya-dev-sedang-testing-prototype-registration-129487788461",
        "vanity_url": "https://surabayadevtest.eventbrite.com",
        "start": {
          "timezone": "Asia/Jakarta",
          "local": "2020-11-18T07:00:00",
          "utc": "2020-11-18T00:00:00Z"
        },
        "end": {
          "timezone": "Asia/Jakarta",
          "local": "2020-11-18T10:00:00",
          "utc": "2020-11-18T03:00:00Z"
        },
        "organization_id": "54649742978",
        "created": "2020-11-17T15:11:01Z",
        "changed": "2020-11-18T08:31:39Z",
        "published": "2020-11-17T15:22:06Z",
        "capacity": 15,
        "capacity_is_custom": false,
        "status": "completed",
        "currency": "USD",
        "listed": true,
        "shareable": true,
        "invite_only": false,
        "online_event": true,
        "show_remaining": false,
        "tx_time_limit": 480,
        "hide_start_date": false,
        "hide_end_date": false,
        "locale": "en_US",
        "is_locked": false,
        "privacy_setting": "unlocked",
        "is_series": false,
        "is_series_parent": false,
        "inventory_type": "limited",
        "is_reserved_seating": false,
        "show_pick_a_seat": false,
        "show_seatmap_thumbnail": false,
        "show_colors_in_seatmap_thumbnail": false,
        "source": "coyote",
        "is_free": true,
        "version": null,
        "summary": "Just Test the Eventbrite",
        "facebook_event_id": null,
        "logo_id": "117946931",
        "organizer_id": "10707642470",
        "venue_id": null,
        "category_id": "113",
        "subcategory_id": null,
        "format_id": "2",
        "id": "129487788461",
        "resource_uri": "https://www.eventbriteapi.com/v3/events/129487788461/",
        "is_externally_ticketed": false,
        "logo": {
          "crop_mask": {
            "top_left": {
              "x": 0,
              "y": 0
            },
            "width": 2160,
            "height": 1080
          },
          "original": {
            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F117946931%2F199272588639%2F1%2Foriginal.20201117-151746?auto=format%2Ccompress&q=75&sharp=10&s=871373b62d36ae8a2f1ca4688fc17aed",
            "width": 2160,
            "height": 1080
          },
          "id": "117946931",
          "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F117946931%2F199272588639%2F1%2Foriginal.20201117-151746?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=df7994a184e80fdf3908b5b7de07c994",
          "aspect_ratio": "2",
          "edge_color": "#008100",
          "edge_color_set": true
        }
      },
      {
        "name": {
          "text": "Implement Design Thinking in Product Development",
          "html": "Implement Design Thinking in Product Development"
        },
        "description": {
          "text": "Bagaimana design thinking berpengaruh dalam product development. Yuk kulik lebih dalam",
          "html": "Bagaimana design thinking berpengaruh dalam product development. Yuk kulik lebih dalam"
        },
        "url": "https://www.eventbrite.com/e/implement-design-thinking-in-product-development-tickets-124808586843",
        "start": {
          "timezone": "Asia/Jakarta",
          "local": "2020-10-24T19:00:00",
          "utc": "2020-10-24T12:00:00Z"
        },
        "end": {
          "timezone": "Asia/Jakarta",
          "local": "2020-10-24T21:00:00",
          "utc": "2020-10-24T14:00:00Z"
        },
        "organization_id": "54649742978",
        "created": "2020-10-10T09:38:51Z",
        "changed": "2020-10-24T19:47:59Z",
        "published": "2020-10-15T12:52:34Z",
        "capacity": 400,
        "capacity_is_custom": false,
        "status": "completed",
        "currency": "USD",
        "listed": true,
        "shareable": true,
        "invite_only": false,
        "online_event": true,
        "show_remaining": false,
        "tx_time_limit": 480,
        "hide_start_date": false,
        "hide_end_date": false,
        "locale": "en_US",
        "is_locked": false,
        "privacy_setting": "unlocked",
        "is_series": false,
        "is_series_parent": false,
        "inventory_type": "limited",
        "is_reserved_seating": false,
        "show_pick_a_seat": false,
        "show_seatmap_thumbnail": false,
        "show_colors_in_seatmap_thumbnail": false,
        "source": "coyote",
        "is_free": true,
        "version": null,
        "summary": "Bagaimana design thinking berpengaruh dalam product development. Yuk kulik lebih dalam",
        "facebook_event_id": null,
        "logo_id": "114958291",
        "organizer_id": "10707642470",
        "venue_id": null,
        "category_id": "102",
        "subcategory_id": "2999",
        "format_id": "2",
        "id": "124808586843",
        "resource_uri": "https://www.eventbriteapi.com/v3/events/124808586843/",
        "is_externally_ticketed": false,
        "logo": {
          "crop_mask": {
            "top_left": {
              "x": 0,
              "y": 0
            },
            "width": 800,
            "height": 400
          },
          "original": {
            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F114958291%2F199272588639%2F1%2Foriginal.20201017-013525?auto=format%2Ccompress&q=75&sharp=10&s=12f691973b0acb851374a8a8c1923c86",
            "width": 800,
            "height": 400
          },
          "id": "114958291",
          "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F114958291%2F199272588639%2F1%2Foriginal.20201017-013525?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C800%2C400&s=1bcd45bc91a4e7bbc65352b378b7cd51",
          "aspect_ratio": "2",
          "edge_color": "#ffffff",
          "edge_color_set": true
        }
      },
      {
        "name": {
          "text": "SurabayaDev Special Meetup with CODEX : Front-End Developer Going Beyond",
          "html": "SurabayaDev Special Meetup with CODEX : Front-End Developer Going Beyond"
        },
        "description": {
          "text": "Surabaya Dev berkolaborasi dengan CODEX mempersembahkan Online Event : Front-End Developer Going Beyond",
          "html": "Surabaya Dev berkolaborasi dengan CODEX mempersembahkan Online Event : Front-End Developer Going Beyond"
        },
        "url": "https://www.eventbrite.com/e/surabayadev-special-meetup-with-codex-front-end-developer-going-beyond-registration-113436852680",
        "vanity_url": "https://sbydevxcodex.eventbrite.com",
        "start": {
          "timezone": "Asia/Jakarta",
          "local": "2020-07-23T19:00:00",
          "utc": "2020-07-23T12:00:00Z"
        },
        "end": {
          "timezone": "Asia/Jakarta",
          "local": "2020-07-23T20:30:00",
          "utc": "2020-07-23T13:30:00Z"
        },
        "organization_id": "54649742978",
        "created": "2020-07-14T07:06:26Z",
        "changed": "2020-07-23T19:42:32Z",
        "published": "2020-07-16T08:21:44Z",
        "capacity": 200,
        "capacity_is_custom": false,
        "status": "completed",
        "currency": "USD",
        "listed": true,
        "shareable": false,
        "invite_only": false,
        "online_event": true,
        "show_remaining": false,
        "tx_time_limit": 480,
        "hide_start_date": false,
        "hide_end_date": false,
        "locale": "en_US",
        "is_locked": false,
        "privacy_setting": "unlocked",
        "is_series": false,
        "is_series_parent": false,
        "inventory_type": "limited",
        "is_reserved_seating": false,
        "show_pick_a_seat": false,
        "show_seatmap_thumbnail": false,
        "show_colors_in_seatmap_thumbnail": false,
        "source": "coyote",
        "is_free": true,
        "version": null,
        "summary": "Surabaya Dev berkolaborasi dengan CODEX mempersembahkan Online Event : Front-End Developer Going Beyond",
        "facebook_event_id": "337805654271474",
        "logo_id": "106367722",
        "organizer_id": "10707642470",
        "venue_id": null,
        "category_id": "102",
        "subcategory_id": "2004",
        "format_id": "2",
        "id": "113436852680",
        "resource_uri": "https://www.eventbriteapi.com/v3/events/113436852680/",
        "is_externally_ticketed": false,
        "logo": {
          "crop_mask": {
            "top_left": {
              "x": 0,
              "y": 0
            },
            "width": 1280,
            "height": 640
          },
          "original": {
            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F106367722%2F199272588639%2F1%2Foriginal.20200717-085656?auto=format%2Ccompress&q=75&sharp=10&s=637846290ae96e20fd645696ec597658",
            "width": 1280,
            "height": 640
          },
          "id": "106367722",
          "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F106367722%2F199272588639%2F1%2Foriginal.20200717-085656?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1280%2C640&s=db77ca0d03154ee052459b74fdbfca78",
          "aspect_ratio": "2",
          "edge_color": "#e2f6e0",
          "edge_color_set": true
        }
      },
      {
        "name": {
          "text": "Firebase Online Study Jam 2020 by Surabaya Dev",
          "html": "Firebase Online Study Jam 2020 by Surabaya Dev"
        },
        "description": {
          "text": "[PLEASE READ]\nHello Everyone,Hope all is well on pandemic this year, hope you all enjoy the Ramadhan.We had a great turn out on our first Firebase Study Jam session. Hope everyone who joined had as much fun as we did.Session will be on Sunday, May 17th! will open at 1:00pm.Please be advised that we will be looking to to get started at 12:30pm sharp!\n\nFirebase Online Study Jam 2020 : Get to Know Firebase for Web\nFacilitator :\n\nArryangga Aliev Pratamaputra, Software Engineer at Warung Pintar\nNusendra Hanggarawan, Full Stack Developer Freelancer\nHendro Rahmat, Software Engineer at Raudhahpay Malaysia\n\n\nWe are taking on participants through the RSVP in Evenbrite with fill Google Form\n>registration here Form Registration\nFREE !RSVP will be limited on a serious participant (Selection Participant) For more details on setup, Google’s Firebase guide will be a good place to get started (https://firebase.google.com/docs/guides/).\nThere is no prior setup required, as the codelabs will run on all the latest web browsers. And most importantly, don't forget your connection!\nLook forward to see everyone!SurabayaDev Team © 2020\nFacebook | Instagram | Twitter | Telegram | Github | Youtube\n\n\n\n\n\n\n\n\n\n\n\n\n",
          "html": "<P>[PLEASE READ]</P>\n<P>Hello Everyone,<BR><BR>Hope all is well on pandemic this year, hope you all enjoy the Ramadhan.<BR><BR>We had a great turn out on our first Firebase Study Jam session. Hope everyone who joined had as much fun as we did.<BR><BR>Session will be on Sunday, May 17th! will open at 1:00pm.<BR>Please be advised that we will be looking to to get started at 12:30pm sharp!</P>\n<P><BR></P>\n<P><STRONG>Firebase Online Study Jam 2020 : Get to Know Firebase for Web</STRONG></P>\n<P>Facilitator :</P>\n<DIV>\n<P><STRONG><A HREF=\"https://www.linkedin.com/in/arryanggaputra/\" TARGET=\"_blank\" REL=\"nofollow noopener noreferrer\">Arryangga Aliev Pratamaputra</A>,</STRONG> Software Engineer at Warung Pintar</P>\n<P><STRONG><A HREF=\"https://www.linkedin.com/in/nusendra-hanggarawan-79854990/\" TARGET=\"_blank\" REL=\"nofollow noopener noreferrer\">Nusendra Hanggarawan</A>,</STRONG> Full Stack Developer Freelancer</P>\n<P><STRONG><A HREF=\"https://www.linkedin.com/in/hendro-rahmat-572bb8116\" TARGET=\"_blank\" REL=\"nofollow noopener noreferrer\">Hendro Rahmat</A>,</STRONG> Software Engineer at Raudhahpay Malaysia</P>\n<P><BR></P>\n</DIV>\n<P><STRONG>We are taking on participants through the RSVP in Evenbrite with fill Google Form</STRONG></P>\n<P>&gt;registration here <STRONG><A HREF=\"https://forms.gle/mhbBHz9NLnqw1zUw8\" TARGET=\"_blank\" REL=\"nofollow noopener noreferrer\">Form Registration</A>&lt;</STRONG></P>\n<P>FREE !<BR>RSVP will be limited on a serious participant (Selection Participant) <BR><BR>For more details on setup, Google’s Firebase guide will be a good place to get started (<A CLASS=\"link\" HREF=\"https://firebase.google.com/docs/guides/\" TARGET=\"__blank\" TITLE=\"https://firebase.google.com/docs/guides/\" REL=\"nofollow noopener noreferrer\">https://firebase.google.com/docs/guides/</A>).</P>\n<P>There is no prior setup required, as the codelabs will run on all the latest web browsers. And most importantly, don't forget your connection!</P>\n<P><BR>Look forward to see everyone!<BR><BR>SurabayaDev Team <SPAN>© 2020</SPAN><BR></P>\n<P><A HREF=\"http://www.facebook.com/SurabayaDev\" TARGET=\"_blank\" REL=\"nofollow noopener noreferrer\">Facebook</A><SPAN> | </SPAN><A HREF=\"http://www.instagram.com/SurabayaDev\" TARGET=\"_blank\" REL=\"nofollow noopener noreferrer\">Instagram</A><SPAN> | </SPAN><A HREF=\"http://www.twitter.com/SurabayaDev\" TARGET=\"_blank\" REL=\"nofollow noopener noreferrer\">Twitter</A><SPAN> | </SPAN><A HREF=\"http://t.me/SurabayaDev\" TARGET=\"_blank\" REL=\"nofollow noopener noreferrer\">Telegram</A><SPAN> | </SPAN><A HREF=\"https://github.com/SurabayaDev\" TARGET=\"_blank\" REL=\"nofollow noopener noreferrer\">Github</A><SPAN> | </SPAN><A HREF=\"https://www.youtube.com/channel/UCNi3kbD2-4XYPVjq9FFk5Rw\" TARGET=\"_blank\" REL=\"nofollow noopener noreferrer\">Youtube</A></P>\n<P><SPAN><BR></SPAN></P>\n<P><BR></P>\n<DIV><BR></DIV>\n<DIV CLASS=\"jfk-bubble gtx-bubble\" ROLE=\"alertdialog\">\n<DIV CLASS=\"jfk-bubble-content-id\">\n<DIV><BR></DIV>\n</DIV>\n<DIV CLASS=\"jfk-bubble-closebtn-id jfk-bubble-closebtn\" ROLE=\"button\"><BR></DIV>\n<DIV CLASS=\"jfk-bubble-arrow-id jfk-bubble-arrow jfk-bubble-arrowup\">\n<DIV CLASS=\"jfk-bubble-arrowimplbefore\"><BR></DIV>\n<DIV CLASS=\"jfk-bubble-arrowimplafter\"><BR></DIV>\n</DIV>\n</DIV>"
        },
        "url": "https://www.eventbrite.com/e/firebase-online-study-jam-2020-by-surabaya-dev-tickets-99540602622",
        "vanity_url": "https://firebasestudyjamsbydev.eventbrite.com",
        "start": {
          "timezone": "Asia/Jakarta",
          "local": "2020-05-17T13:00:00",
          "utc": "2020-05-17T06:00:00Z"
        },
        "end": {
          "timezone": "Asia/Jakarta",
          "local": "2020-05-17T17:00:00",
          "utc": "2020-05-17T10:00:00Z"
        },
        "organization_id": "54649742978",
        "created": "2020-03-12T14:55:53Z",
        "changed": "2020-05-17T16:04:09Z",
        "published": "2020-03-12T14:57:07Z",
        "capacity": 65,
        "capacity_is_custom": false,
        "status": "completed",
        "currency": "USD",
        "listed": true,
        "shareable": true,
        "invite_only": false,
        "online_event": true,
        "show_remaining": true,
        "tx_time_limit": 480,
        "hide_start_date": false,
        "hide_end_date": false,
        "locale": "en_US",
        "is_locked": false,
        "privacy_setting": "unlocked",
        "is_series": false,
        "is_series_parent": false,
        "inventory_type": "limited",
        "is_reserved_seating": false,
        "show_pick_a_seat": false,
        "show_seatmap_thumbnail": false,
        "show_colors_in_seatmap_thumbnail": false,
        "source": "create_2.0",
        "is_free": true,
        "version": null,
        "summary": "[PLEASE READ]\nHello Everyone,Hope all is well on pandemic this year, hope you all enjoy the Ramadhan.We had a great turn out on our first Fi",
        "facebook_event_id": null,
        "logo_id": "100764394",
        "organizer_id": "10707642470",
        "venue_id": null,
        "category_id": "102",
        "subcategory_id": "2004",
        "format_id": "9",
        "id": "99540602622",
        "resource_uri": "https://www.eventbriteapi.com/v3/events/99540602622/",
        "is_externally_ticketed": false,
        "logo": {
          "crop_mask": {
            "top_left": {
              "x": 0,
              "y": 258
            },
            "width": 1080,
            "height": 540
          },
          "original": {
            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F100764394%2F199272588639%2F1%2Foriginal.20200512-134505?auto=format%2Ccompress&q=75&sharp=10&s=9aef6b3494ef406a0ca35947163b74dc",
            "width": 1080,
            "height": 1080
          },
          "id": "100764394",
          "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F100764394%2F199272588639%2F1%2Foriginal.20200512-134505?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C258%2C1080%2C540&s=74cdfe95b0de93d0d92b6694c654fbb6",
          "aspect_ratio": "2",
          "edge_color": "#b9f6ca",
          "edge_color_set": true
        }
      },
      {
        "name": {
          "text": "Introduction to NestJs - SurabayaDev MeetUp | February 2020",
          "html": "Introduction to NestJs - SurabayaDev MeetUp | February 2020"
        },
        "description": {
          "text": "Hai sobat Developer!\r\n\r\nSurabayaDev menyapa kamu kembali di MeetUp pertama tahun 2020 ini\r\nYuk berkenalan dan belajar bareng dengan NestJs bersama Mas Prasetyo Wicaksono seorang Software Engineer di Star Fish Innovation asal Thailand. \r\n\r\nJangan lupa RSVP di eventbrite ya.\r\nIntroducton to NestJs\r\nWith Prasetyo Wicaksono - Senior Software Engineer at Star Fish Innovation Thailand\r\nFree Entry\r\nSave Date :\r\n\r\nSabtu, 29 Februari 2020\r\n12.30 - 14.30\r\nDilo Surabaya\r\n\r\nBakal ada hadiah menarik yang bisa kamu dapatkan di acara ini\r\nTiket Terbatas!\r\n#SurabayaDev #SurabayaDevMeetUp #Nestjs #surabayadeveloper #community #technoevent #technology #programming #programmer #javascript",
          "html": "<P><STRONG>Hai sobat Developer!</STRONG></P>\r\n<BLOCKQUOTE>\r\n<P><STRONG>SurabayaDev</STRONG> menyapa kamu kembali di MeetUp pertama tahun 2020 ini</P>\r\n<P>Yuk berkenalan dan belajar bareng dengan NestJs bersama Mas Prasetyo Wicaksono seorang Software Engineer di Star Fish Innovation asal Thailand. </P>\r\n</BLOCKQUOTE>\r\n<P>Jangan lupa RSVP di eventbrite ya.</P>\r\n<P><STRONG>Introducton to NestJs</STRONG></P>\r\n<P>With <STRONG>Prasetyo Wicaksono - Senior Software Engineer at Star Fish Innovation Thailand</STRONG></P>\r\n<P>Free Entry</P>\r\n<P>Save Date :</P>\r\n<UL>\r\n<LI><SPAN STYLE=\"font-size: medium;\">Sabtu, 29 Februari 2020</SPAN></LI>\r\n<LI><SPAN STYLE=\"font-size: medium;\">12.30 - 14.30</SPAN></LI>\r\n<LI><SPAN STYLE=\"font-size: medium;\">Dilo Surabaya</SPAN></LI>\r\n</UL>\r\n<P>Bakal ada hadiah menarik yang bisa kamu dapatkan di acara ini</P>\r\n<P>Tiket Terbatas!</P>\r\n<P>#SurabayaDev #SurabayaDevMeetUp #Nestjs #surabayadeveloper #community #technoevent #technology #programming #programmer #javascript</P>"
        },
        "url": "https://www.eventbrite.com/e/introduction-to-nestjs-surabayadev-meetup-february-2020-tickets-96372082493",
        "vanity_url": "https://sbydevmeetup.eventbrite.com",
        "start": {
          "timezone": "Asia/Jakarta",
          "local": "2020-02-29T12:30:00",
          "utc": "2020-02-29T05:30:00Z"
        },
        "end": {
          "timezone": "Asia/Jakarta",
          "local": "2020-02-29T14:30:00",
          "utc": "2020-02-29T07:30:00Z"
        },
        "organization_id": "54649742978",
        "created": "2020-02-24T04:14:03Z",
        "changed": "2020-02-29T12:41:45Z",
        "published": "2020-02-25T02:54:35Z",
        "capacity": 70,
        "capacity_is_custom": false,
        "status": "completed",
        "currency": "USD",
        "listed": true,
        "shareable": true,
        "invite_only": false,
        "online_event": false,
        "show_remaining": true,
        "tx_time_limit": 480,
        "hide_start_date": false,
        "hide_end_date": false,
        "locale": "en_US",
        "is_locked": false,
        "privacy_setting": "unlocked",
        "is_series": false,
        "is_series_parent": false,
        "inventory_type": "limited",
        "is_reserved_seating": false,
        "show_pick_a_seat": false,
        "show_seatmap_thumbnail": false,
        "show_colors_in_seatmap_thumbnail": false,
        "source": "create_2.0",
        "is_free": true,
        "version": null,
        "summary": "Hai sobat Developer!\r\n\r\nSurabayaDev menyapa kamu kembali di MeetUp pertama tahun 2020 ini\r\nYuk berkenalan dan belajar bareng dengan NestJs b",
        "facebook_event_id": "810455756134146",
        "logo_id": "93985941",
        "organizer_id": "10707642470",
        "venue_id": "48675573",
        "category_id": "102",
        "subcategory_id": "2004",
        "format_id": "2",
        "id": "96372082493",
        "resource_uri": "https://www.eventbriteapi.com/v3/events/96372082493/",
        "is_externally_ticketed": false,
        "logo": {
          "crop_mask": {
            "top_left": {
              "x": 0,
              "y": 19
            },
            "width": 1080,
            "height": 540
          },
          "original": {
            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F93985941%2F199272588639%2F1%2Foriginal.20200225-023251?auto=format%2Ccompress&q=75&sharp=10&s=9abfbcfc4afc25bf57577d49e47a2baa",
            "width": 1080,
            "height": 1080
          },
          "id": "93985941",
          "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F93985941%2F199272588639%2F1%2Foriginal.20200225-023251?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C19%2C1080%2C540&s=ce89701a82ebde565c9d250d9bf07109",
          "aspect_ratio": "2",
          "edge_color": "#ddf4db",
          "edge_color_set": true
        }
      },
      {
        "name": {
          "text": "Domain modeling with Doctrine ORM",
          "html": "Domain modeling with Doctrine ORM"
        },
        "description": {
          "text": null,
          "html": "<P><IMG SRC=\"https://cdn.evbuc.com/eventlogos/54269854/domainmodeling.jpg\"></P>"
        },
        "url": "https://www.eventbrite.com/e/domain-modeling-with-doctrine-orm-tickets-34822682581",
        "start": {
          "timezone": "Asia/Jakarta",
          "local": "2017-05-27T13:00:00",
          "utc": "2017-05-27T06:00:00Z"
        },
        "end": {
          "timezone": "Asia/Jakarta",
          "local": "2017-05-27T15:00:00",
          "utc": "2017-05-27T08:00:00Z"
        },
        "organization_id": "54649742978",
        "created": "2017-05-23T12:20:16Z",
        "changed": "2017-05-27T15:39:00Z",
        "published": "2017-05-23T12:22:18Z",
        "capacity": 50,
        "capacity_is_custom": false,
        "status": "completed",
        "currency": "USD",
        "listed": true,
        "shareable": true,
        "invite_only": false,
        "online_event": false,
        "show_remaining": true,
        "tx_time_limit": 480,
        "hide_start_date": false,
        "hide_end_date": false,
        "locale": "en_US",
        "is_locked": false,
        "privacy_setting": "unlocked",
        "is_series": false,
        "is_series_parent": false,
        "inventory_type": "limited",
        "is_reserved_seating": false,
        "show_pick_a_seat": false,
        "show_seatmap_thumbnail": false,
        "show_colors_in_seatmap_thumbnail": false,
        "source": "create_2.0",
        "is_free": true,
        "version": null,
        "summary": null,
        "facebook_event_id": null,
        "logo_id": "31683054",
        "organizer_id": "10707642470",
        "venue_id": "18740085",
        "category_id": "102",
        "subcategory_id": null,
        "format_id": "9",
        "id": "34822682581",
        "resource_uri": "https://www.eventbriteapi.com/v3/events/34822682581/",
        "is_externally_ticketed": false,
        "logo": {
          "crop_mask": {
            "top_left": {
              "x": 0,
              "y": 270
            },
            "width": 1078,
            "height": 539
          },
          "original": {
            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F31683054%2F54649742978%2F1%2Foriginal.jpg?auto=format%2Ccompress&q=75&sharp=10&s=a0281fb46cc2b4e77b0d5a0810631c08",
            "width": 1078,
            "height": 1080
          },
          "id": "31683054",
          "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F31683054%2F54649742978%2F1%2Foriginal.jpg?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C270%2C1078%2C539&s=eef78ebff8ca7c2979a1ece346985ddb",
          "aspect_ratio": "2",
          "edge_color": "#050102",
          "edge_color_set": true
        }
      },
      {
        "name": {
          "text": "Implementing TDD in Laravel",
          "html": "Implementing TDD in Laravel"
        },
        "description": {
          "text": null,
          "html": "<P><IMG SRC=\"https://cdn.evbuc.com/eventlogos/54269854/tddlaravel.001.jpeg\"></P>"
        },
        "url": "https://www.eventbrite.com/e/implementing-tdd-in-laravel-tickets-33770552632",
        "start": {
          "timezone": "Asia/Jakarta",
          "local": "2017-04-21T18:00:00",
          "utc": "2017-04-21T11:00:00Z"
        },
        "end": {
          "timezone": "Asia/Jakarta",
          "local": "2017-04-21T21:00:00",
          "utc": "2017-04-21T14:00:00Z"
        },
        "organization_id": "54649742978",
        "created": "2017-04-17T03:02:03Z",
        "changed": "2017-04-21T19:45:40Z",
        "published": "2017-04-17T03:02:06Z",
        "capacity": 50,
        "capacity_is_custom": false,
        "status": "completed",
        "currency": "USD",
        "listed": true,
        "shareable": true,
        "invite_only": false,
        "online_event": false,
        "show_remaining": true,
        "tx_time_limit": 480,
        "hide_start_date": false,
        "hide_end_date": false,
        "locale": "en_US",
        "is_locked": false,
        "privacy_setting": "unlocked",
        "is_series": false,
        "is_series_parent": false,
        "inventory_type": "limited",
        "is_reserved_seating": false,
        "show_pick_a_seat": false,
        "show_seatmap_thumbnail": false,
        "show_colors_in_seatmap_thumbnail": false,
        "source": "create_2.0",
        "is_free": true,
        "version": null,
        "summary": null,
        "facebook_event_id": null,
        "logo_id": "30455372",
        "organizer_id": "10707642470",
        "venue_id": "18740085",
        "category_id": "102",
        "subcategory_id": null,
        "format_id": "9",
        "id": "33770552632",
        "resource_uri": "https://www.eventbriteapi.com/v3/events/33770552632/",
        "is_externally_ticketed": false,
        "logo": {
          "crop_mask": {
            "top_left": {
              "x": 0,
              "y": 251
            },
            "width": 1024,
            "height": 512
          },
          "original": {
            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F30455372%2F54649742978%2F1%2Foriginal.jpg?auto=format%2Ccompress&q=75&sharp=10&s=21c3fa9a71b3240082cb0368aaf1ed43",
            "width": 1024,
            "height": 768
          },
          "id": "30455372",
          "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F30455372%2F54649742978%2F1%2Foriginal.jpg?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C251%2C1024%2C512&s=c8904016e2c56dd38ed1f77ecb1e4915",
          "aspect_ratio": "2",
          "edge_color": "#ffffff",
          "edge_color_set": true
        }
      },
      {
        "name": {
          "text": "Having fun with Kotlin Android",
          "html": "Having fun with Kotlin Android"
        },
        "description": {
          "text": null,
          "html": "<P><IMG SRC=\"https://cdn.evbuc.com/eventlogos/54269854/screenshot20170312at9.10.34pm.png\"></P>"
        },
        "url": "https://www.eventbrite.com/e/having-fun-with-kotlin-android-tickets-32806461008",
        "vanity_url": "https://sbydev0317.eventbrite.com",
        "start": {
          "timezone": "Asia/Jakarta",
          "local": "2017-03-16T18:00:00",
          "utc": "2017-03-16T11:00:00Z"
        },
        "end": {
          "timezone": "Asia/Jakarta",
          "local": "2017-03-16T21:00:00",
          "utc": "2017-03-16T14:00:00Z"
        },
        "organization_id": "54649742978",
        "created": "2017-03-13T01:36:24Z",
        "changed": "2017-03-16T19:39:55Z",
        "published": "2017-03-13T01:37:33Z",
        "capacity": 80,
        "capacity_is_custom": false,
        "status": "completed",
        "currency": "USD",
        "listed": true,
        "shareable": true,
        "invite_only": false,
        "online_event": false,
        "show_remaining": false,
        "tx_time_limit": 480,
        "hide_start_date": false,
        "hide_end_date": false,
        "locale": "en_US",
        "is_locked": false,
        "privacy_setting": "unlocked",
        "is_series": false,
        "is_series_parent": false,
        "inventory_type": "limited",
        "is_reserved_seating": false,
        "show_pick_a_seat": false,
        "show_seatmap_thumbnail": false,
        "show_colors_in_seatmap_thumbnail": false,
        "source": "create_2.0",
        "is_free": true,
        "version": null,
        "summary": null,
        "facebook_event_id": null,
        "logo_id": "29235242",
        "organizer_id": "10707642470",
        "venue_id": "18740085",
        "category_id": "102",
        "subcategory_id": null,
        "format_id": "9",
        "id": "32806461008",
        "resource_uri": "https://www.eventbriteapi.com/v3/events/32806461008/",
        "is_externally_ticketed": false,
        "logo": {
          "crop_mask": {
            "top_left": {
              "x": 0,
              "y": 239
            },
            "width": 1010,
            "height": 505
          },
          "original": {
            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F29235242%2F54649742978%2F1%2Foriginal.jpg?auto=format%2Ccompress&q=75&sharp=10&s=528ff6febdba15b66aacf11a7753024e",
            "width": 1010,
            "height": 749
          },
          "id": "29235242",
          "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F29235242%2F54649742978%2F1%2Foriginal.jpg?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C239%2C1010%2C505&s=7d64d8ee391dc187b7ff4fb3bb2d1901",
          "aspect_ratio": "2",
          "edge_color": null,
          "edge_color_set": true
        }
      },
      {
        "name": {
          "text": "Git flow & tutorial",
          "html": "Git flow &amp; tutorial"
        },
        "description": {
          "text": null,
          "html": "<P><IMG SRC=\"https://cdn.evbuc.com/eventlogos/54269854/gitflow.jpg\"></P>"
        },
        "url": "https://www.eventbrite.com/e/git-flow-tutorial-tickets-31579208262",
        "vanity_url": "https://sbydev0217.eventbrite.com",
        "start": {
          "timezone": "Asia/Jakarta",
          "local": "2017-02-07T18:00:00",
          "utc": "2017-02-07T11:00:00Z"
        },
        "end": {
          "timezone": "Asia/Jakarta",
          "local": "2017-02-07T20:00:00",
          "utc": "2017-02-07T13:00:00Z"
        },
        "organization_id": "54649742978",
        "created": "2017-01-29T16:12:29Z",
        "changed": "2017-02-07T20:33:20Z",
        "published": "2017-01-29T16:14:43Z",
        "capacity": 80,
        "capacity_is_custom": false,
        "status": "completed",
        "currency": "USD",
        "listed": true,
        "shareable": true,
        "invite_only": false,
        "online_event": false,
        "show_remaining": false,
        "tx_time_limit": 480,
        "hide_start_date": false,
        "hide_end_date": false,
        "locale": "en_US",
        "is_locked": false,
        "privacy_setting": "unlocked",
        "is_series": false,
        "is_series_parent": false,
        "inventory_type": "limited",
        "is_reserved_seating": false,
        "show_pick_a_seat": false,
        "show_seatmap_thumbnail": false,
        "show_colors_in_seatmap_thumbnail": false,
        "source": "create_2.0",
        "is_free": true,
        "version": null,
        "summary": null,
        "facebook_event_id": null,
        "logo_id": "27803159",
        "organizer_id": "10707642470",
        "venue_id": "18140414",
        "category_id": "102",
        "subcategory_id": "2999",
        "format_id": "9",
        "id": "31579208262",
        "resource_uri": "https://www.eventbriteapi.com/v3/events/31579208262/",
        "is_externally_ticketed": false,
        "logo": {
          "crop_mask": {
            "top_left": {
              "x": 0,
              "y": 55
            },
            "width": 954,
            "height": 477
          },
          "original": {
            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F27803159%2F54649742978%2F1%2Foriginal.jpg?auto=format%2Ccompress&q=75&sharp=10&s=a2adb2d4800648d41e0da6ba0e4f5565",
            "width": 1000,
            "height": 1000
          },
          "id": "27803159",
          "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F27803159%2F54649742978%2F1%2Foriginal.jpg?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C55%2C954%2C477&s=a0cee132ca162a401ff8f7c150450b20",
          "aspect_ratio": "2",
          "edge_color": null,
          "edge_color_set": true
        }
      },
      {
        "name": {
          "text": "SurabayaDev Meetup - Concurrent Programming in Golang",
          "html": "SurabayaDev Meetup - Concurrent Programming in Golang"
        },
        "description": {
          "text": null,
          "html": "<P><IMG SRC=\"https://cdn.evbuc.com/eventlogos/54269854/golang.png\"></P>"
        },
        "url": "https://www.eventbrite.com/e/surabayadev-meetup-concurrent-programming-in-golang-tickets-30742747385",
        "vanity_url": "https://surabayadev-golang.eventbrite.com",
        "start": {
          "timezone": "Asia/Jakarta",
          "local": "2017-01-07T13:00:00",
          "utc": "2017-01-07T06:00:00Z"
        },
        "end": {
          "timezone": "Asia/Jakarta",
          "local": "2017-01-07T16:00:00",
          "utc": "2017-01-07T09:00:00Z"
        },
        "organization_id": "54649742978",
        "created": "2016-12-30T00:41:29Z",
        "changed": "2017-01-07T16:32:31Z",
        "published": "2016-12-30T00:43:33Z",
        "capacity": 80,
        "capacity_is_custom": false,
        "status": "completed",
        "currency": "USD",
        "listed": true,
        "shareable": true,
        "invite_only": false,
        "online_event": false,
        "show_remaining": true,
        "tx_time_limit": 480,
        "hide_start_date": false,
        "hide_end_date": false,
        "locale": "en_US",
        "is_locked": false,
        "privacy_setting": "unlocked",
        "is_series": false,
        "is_series_parent": false,
        "inventory_type": "limited",
        "is_reserved_seating": false,
        "show_pick_a_seat": false,
        "show_seatmap_thumbnail": false,
        "show_colors_in_seatmap_thumbnail": false,
        "source": "create_2.0",
        "is_free": true,
        "version": null,
        "summary": null,
        "facebook_event_id": null,
        "logo_id": "26938749",
        "organizer_id": "10707642470",
        "venue_id": "17798989",
        "category_id": "102",
        "subcategory_id": "2999",
        "format_id": "9",
        "id": "30742747385",
        "resource_uri": "https://www.eventbriteapi.com/v3/events/30742747385/",
        "is_externally_ticketed": false,
        "logo": {
          "crop_mask": {
            "top_left": {
              "x": 0,
              "y": 216
            },
            "width": 1000,
            "height": 500
          },
          "original": {
            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F26938749%2F54649742978%2F1%2Foriginal.jpg?auto=format%2Ccompress&q=75&sharp=10&s=ae60138a1186662e529a189209bcc1c6",
            "width": 1000,
            "height": 1000
          },
          "id": "26938749",
          "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F26938749%2F54649742978%2F1%2Foriginal.jpg?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C216%2C1000%2C500&s=0f36a0043f45545188d0740888d669d2",
          "aspect_ratio": "2",
          "edge_color": "#fafafa",
          "edge_color_set": true
        }
      },
      {
        "name": {
          "text": "Membuat Single Page Application dengan VueJs",
          "html": "Membuat Single Page Application dengan VueJs"
        },
        "description": {
          "text": null,
          "html": null
        },
        "url": "https://www.eventbrite.com/e/membuat-single-page-application-dengan-vuejs-tickets-24916754684",
        "start": {
          "timezone": "Asia/Jakarta",
          "local": "2016-04-28T18:00:00",
          "utc": "2016-04-28T11:00:00Z"
        },
        "end": {
          "timezone": "Asia/Jakarta",
          "local": "2016-04-28T21:00:00",
          "utc": "2016-04-28T14:00:00Z"
        },
        "organization_id": "54649742978",
        "created": "2016-04-25T06:53:07Z",
        "changed": "2016-04-28T19:32:30Z",
        "published": "2016-04-25T06:53:26Z",
        "capacity": 50,
        "capacity_is_custom": false,
        "status": "completed",
        "currency": "USD",
        "listed": true,
        "shareable": true,
        "invite_only": false,
        "online_event": false,
        "show_remaining": true,
        "tx_time_limit": 480,
        "hide_start_date": false,
        "hide_end_date": false,
        "locale": "en_US",
        "is_locked": false,
        "privacy_setting": "unlocked",
        "is_series": false,
        "is_series_parent": false,
        "inventory_type": "limited",
        "is_reserved_seating": false,
        "show_pick_a_seat": false,
        "show_seatmap_thumbnail": false,
        "show_colors_in_seatmap_thumbnail": false,
        "source": "create_2.0",
        "is_free": true,
        "version": null,
        "summary": null,
        "facebook_event_id": "537432503104340",
        "logo_id": "20575473",
        "organizer_id": "10707642470",
        "venue_id": "14947091",
        "category_id": "102",
        "subcategory_id": null,
        "format_id": "2",
        "id": "24916754684",
        "resource_uri": "https://www.eventbriteapi.com/v3/events/24916754684/",
        "is_externally_ticketed": false,
        "logo": {
          "crop_mask": {
            "top_left": {
              "x": 0,
              "y": 119
            },
            "width": 478,
            "height": 239
          },
          "original": {
            "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F20575473%2F54649742978%2F1%2Foriginal.jpg?auto=format%2Ccompress&q=75&sharp=10&s=cdaac80fc3794b0273d3925583852dbd",
            "width": null,
            "height": null
          },
          "id": "20575473",
          "url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F20575473%2F54649742978%2F1%2Foriginal.jpg?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C119%2C478%2C239&s=01289dd771c9beeb0df0e9ebcdf434f0",
          "aspect_ratio": "2",
          "edge_color": "#f9f9f9",
          "edge_color_set": true
        }
      }
    ]
  };
  const posts = result.events;

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default function Event({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Event List</title>
      </Head>
      <section className="bg-gradient-to-b from-gray-100 to-white">
        <div className="absolute inset-x-0 -bottom-14 -top-48 overflow-hidden bg-green-50">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white"></div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white"></div>
        </div>

        <div className="container max-w-screen-xl mx-auto px-4 pt-32 pb-12">
          <section className="relative">
            <div className="text-center py-0 lg:py-12">
              <h2 className="font-semibold text-gray-900 text-2xl md:text-3xl lg:text-4xl mb-5">
                Event
              </h2>

              <p className="font-normal text-gray-500 text-base md:text-lg lg:text-xl mb-16">
                List event terbaru Surabayadev
              </p>
            </div>
          </section>

          <section className="my-5">
            {/* Items */}
            <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-1 items-start md:max-w-2xl lg:max-w-none ">
              {/* 1st item */}

              {posts.map((post) => (
                <div key={post.id} className="relative flex flex-col md:flex-row items-center md:items-start bg-white rounded shadow-xl mb-8">
                  <div className="basis-2/5">
                    <img src={(post.logo != null) ? post.logo.original.url : 'https://iili.io/HPGls5u.md.png'}
                      alt="Poster Image"
                      className="sm:w-full h-full object-cover mb-6 md:mb-0 md:mr-6 rounded"
                      style={{
                        width: '100%',
                        objectFit: 'cover',
                        height: '300px',
                      }}
                    />
                  </div>
                  <div className="md:text-left p-4 basis-3/5">
                    <div className="mt-2">
                      <a className="btn outline mr-3 outline-offset-1 outline-green-700 text-green-700 py-1 px-2 rounded inline-flex text-xs items-center">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                        </svg>
                        {
                          (post.online_event) ? (
                            <span className="">Online Event</span>
                          ) : (
                            <span className="">Offline Event</span>
                          )
                        }
                      </a>

                      <a className="btn outline mr-3 outline-offset-1 outline-green-700 text-green-700 py-1 px-2 rounded inline-flex text-xs items-center">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"></path>
                        </svg>

                        {
                          (post.is_free) ? (
                            <span className="">Gratis</span>
                          ) : (
                            <span className="">Offline Event</span>
                          )
                        }
                      </a>

                    </div>

                    <h4 className="text-xl font-bold leading-snug tracking-tight mb-0 mt-3">
                      {post.name.text}
                    </h4>
                    <h4 className="text-sm text-gray-400 leading-snug tracking-tight mb-3">
                      {new Date(post.start.local).toLocaleDateString("id-ID", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </h4>
                    <p className="text-gray-600">
                      {(post.description.text != null) ? post.description.text.split(' ').slice(0, 40).join(' ') : post.name.text}
                    </p>

                    <Link
                      href="/event/event-detail"
                      className="btn text-sm md:mt-15 mt-5 py-2 px-6 text-white bg-green-600 hover:bg-green-800 rounded-full">
                      Detail Event
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
}
