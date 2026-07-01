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
    { id: "appletv_4k",  name: "Apple TV 4K",     blurb: "Also streams video. Needs a TV.", price: 129, labor: 40 },
    { id: "homepod_mini", name: "HomePod mini",   blurb: "Compact speaker, works anywhere.",  price: 99,  labor: 40 },
    { id: "homepod",     name: "HomePod",         blurb: "Premium sound plus hub duties.",    price: 299, labor: 40 }
  ],

  // Device catalog — grouped by category, shown identically in every room
  devices: [
    { id: "bulb",        name: "Smart bulb",          unit: "bulb",    price: 12.99,  labor: 8  },
    { id: "switch",      name: "Smart switch",        unit: "switch",  price: 6.99,  labor: 25 },
    { id: "plug",        name: "Smart plug",          unit: "plug",    price: 9.99,  labor: 5  },
    { id: "camera",      name: "Battery camera",      unit: "camera",  price: 220, labor: 45 },
    { id: "camera_pro",  name: "Pan-tilt battery camera", unit: "camera", price: 320, labor: 55 },
    { id: "motion",      name: "Motion sensor",       unit: "sensor",  price: 9.99,  labor: 15 },
    { id: "blind_sm",    name: "Smart blind (small window)", unit: "blind", price: 240, labor: 65 },
    { id: "blind_lg",    name: "Smart blind (large window)", unit: "blind", price: 340, labor: 85 },
    { id: "lock",        name: "Smart lock",          unit: "lock",    price: 230, labor: 40 }
  ],

  // Predefined room list shown when adding a room
  rooms: [
    "Living room", "Master bedroom", "SecondBedroom", "Third Bedroom", "Fouth Bedroom", "Kitchen", "Office",
    "Dining room", "Front entry", "Hallway", "Garage", "Patio / outdoor"
  ],

  // Automation catalog — tiered by setup complexity, not flat-priced
  // requires: device id that must exist somewhere in that room for the automation to be offered
  // scope: "room" (configured per room) or "home" (configured once, whole-house)
  automationTiers: {
    simple:   { label: "Simple",         price: 15 },  // time/dusk-dawn based, one condition
    motion:   { label: "Motion-based",   price: 20 },  // sensor-triggered
    presence: { label: "Presence-based", price: 35 },  // geofencing / arrive-leave, multi-device coordination
    multi:    { label: "Multi-condition", price: 50 }  // combines time + sensor + presence logic
  },

  roomAutomations: [
    { id: "dusk_on",     name: "Lights turn on at dusk",             tier: "simple",  requires: "bulb" },
    { id: "dawn_off",    name: "Lights turn off at dawn",            tier: "simple",  requires: "bulb" },
    { id: "motion_on",   name: "Lights turn on when motion is sensed", tier: "motion", requires: "motion" },
    { id: "motion_cam",  name: "Camera alert when motion is sensed", tier: "motion",  requires: "camera" },
    { id: "blind_sched", name: "Blinds open/close on a schedule",    tier: "simple",  requires: "blind_sm" },
    { id: "night_lock",  name: "Lock doors automatically at night",  tier: "simple",  requires: "lock" }
  ],

  homeAutomations: [
    { id: "arrive_home", name: "Lights on when first person arrives home",  tier: "presence" },
    { id: "leave_home",  name: "Lights off when last person leaves home",   tier: "presence" },
    { id: "away_mode",   name: "Away mode: cameras arm, lock doors, lights off", tier: "multi" },
    { id: "goodnight",   name: "\u201cGood night\u201d scene: lock up, dim lights, lower blinds", tier: "multi" },
    { id: "wakeup",      name: "Morning routine: blinds open, lights ramp up", tier: "multi" }
  ],

  // Applied to every hardware and labor dollar before it's shown to the customer.
  // 0.35 = 35% on top of the raw prices above (covers sales tax + your markup).
  // Change this single number to adjust pricing sitewide.
  markup: 0.35

};
