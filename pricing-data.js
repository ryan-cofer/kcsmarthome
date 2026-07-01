/* ============================================================
   PRICING DATA
   Edit this file to change prices. The site (index.html) reads
   from window.PRICING automatically — no other files need touching.

   price       = hardware cost per unit, in dollars
   labor       = install/config labor cost per unit, in dollars
   ============================================================ */

window.PRICING = {

  // Apple Home Hub options — shown if the customer doesn't already have one
  hubs: [
    { id: "appletv_4k",  name: "Apple TV 4K",     blurb: "Also streams video. Needs a TV.", price: 129, labor: 40, image: "img-appletv.jpeg" },
    { id: "homepod_mini", name: "HomePod mini",   blurb: "Compact speaker, works anywhere.",  price: 99,  labor: 40, image: "img-homepodmini.jpeg" },
    { id: "homepod",     name: "HomePod",         blurb: "Premium sound plus hub duties.",    price: 299, labor: 40, image: "img-homepod.png" }
  ],

  // Device catalog — grouped by category, shown identically in every room
  devices: [
    { id: "bulb",        name: "Smart bulb",          unit: "bulb",    price: 12.99,  labor: 8  },
    { id: "switch",      name: "Smart switch",        unit: "switch",  price: 12.99,  labor: 25 },
    { id: "plug",        name: "Smart plug",          unit: "plug",    price: 12.99,  labor: 5  },
    { id: "camera",      name: "Battery camera",      unit: "camera",  price: 220, labor: 45 },
    { id: "camera_pro",  name: "Pan-tilt battery camera", unit: "camera", price: 320, labor: 55 },
    { id: "motion",      name: "Motion sensor",       unit: "sensor",  price: 12.99,  labor: 15 },
    { id: "blind_sm",    name: "Smart blind (small window)", unit: "blind", price: 240, labor: 65 },
    { id: "blind_lg",    name: "Smart blind (large window)", unit: "blind", price: 340, labor: 85 },
    { id: "lock",        name: "Smart lock",          unit: "lock",    price: 230, labor: 40 }
  ],

  // Predefined room list shown when adding a room
  rooms: [
    "Living room", "Master bedroom", "Bedroom", "Kitchen", "Office",
    "Kids room", "Dining room", "Front entry", "Hallway", "Garage", "Patio / outdoor"
  ],

  // Flat price charged per automation, regardless of complexity.
  automationPrice: 25,

  roomAutomations: [
    { id: "dusk_on",     name: "Lights turn on at dusk",             requires: "bulb" },
    { id: "dawn_off",    name: "Lights turn off at dawn",            requires: "bulb" },
    { id: "motion_on",   name: "Lights turn on when motion is sensed", requires: "motion" },
    { id: "motion_cam",  name: "Camera alert when motion is sensed", requires: "camera" },
    { id: "blind_sched", name: "Blinds open/close on a schedule",    requires: "blind_sm" },
    { id: "night_lock",  name: "Lock doors automatically at night",  requires: "lock" }
  ],

  homeAutomations: [
    { id: "arrive_home", name: "Lights on when first person arrives home" },
    { id: "leave_home",  name: "Lights off when last person leaves home" },
    { id: "away_mode",   name: "Away mode: cameras arm, lock doors, lights off" },
    { id: "goodnight",   name: "\u201cGood night\u201d scene: lock up, dim lights, lower blinds" },
    { id: "wakeup",      name: "Morning routine: blinds open, lights ramp up" }
  ],

  // Applied to every hardware and labor dollar before it's shown to the customer.
  // 0.35 = 35% on top of the raw prices above (covers sales tax + your markup).
  // Change this single number to adjust pricing sitewide.
  markup: 0.35

};
