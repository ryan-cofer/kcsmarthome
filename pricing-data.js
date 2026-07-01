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
    { id: "bulb_gu10",   name: "Smart bulb (GU10)",   unit: "bulb",    category: "bulb", price: 12.99, labor: 10  },
    { id: "bulb_e26",    name: "Smart bulb (E26)",    unit: "bulb",    category: "bulb", price: 12.99, labor: 10  },
    { id: "bulb_e12",    name: "Smart bulb (E12)",    unit: "bulb",    category: "bulb", price: 12.99, labor: 10  },
    { id: "switch",      name: "Smart switch",        unit: "switch",  price: 6.99,  labor: 10 },
    { id: "plug",        name: "Smart plug",          unit: "plug",    price: 9.99,  labor: 10  },
    { id: "camera",      name: "Battery camera",      unit: "camera",  price: 220, labor: 75 },
    { id: "camera_pro",  name: "Pan-tilt battery camera", unit: "camera", price: 320, labor: 75 },
    { id: "motion",      name: "Motion sensor",       unit: "sensor",  price: 9.99,  labor: 10 },
    { id: "blind_sm",    name: "Smart blind (small window)", unit: "blind", price: 240, labor: 75 },
    { id: "blind_lg",    name: "Smart blind (large window)", unit: "blind", price: 340, labor: 75 },
    { id: "lock",        name: "Smart lock",          unit: "lock",    price: 230, labor: 75 },
    { id: "door_sensor", name: "Door sensor",         unit: "sensor",  price: 14.99, labor: 10 },
    { id: "thermostat",  name: "Smart thermostat",    unit: "thermostat", price: 179, labor: 75 }
  ],

  // Predefined room types shown when adding a room. Adding more than one of the
  // same type automatically numbers them (e.g. "Bedroom 1", "Bedroom 2").
  rooms: [
    "Living Room", "Dining Room", "Kitchen", "Bathroom", "Bedroom",
    "Hallway", "Garage", "Patio", "Entry", "Den", "Office"
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

  // Applied only to hardware prices before they're shown to the customer —
  // labor prices are untouched. 0.35 = 35% on top of the raw hardware prices
  // above (covers sales tax + your markup). Change this single number to
  // adjust hardware pricing sitewide.
  markup: 0.35

};
