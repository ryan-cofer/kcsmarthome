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

  // Device catalog — grouped by category, shown identically in every room.
  // section = which labeled group the device card appears under.
  // blurb = short customer-facing explanation shown on the device card.
  // image = filename, expected to sit in the same folder as index.html.
  devices: [
    { id: "bulb_gu10",   name: "Smart bulb (GU10)",   unit: "bulb",    category: "bulb", section: "Bulbs", price: 12.99, labor: 8,
      blurb: "For recessed and track lighting with a twist-in spotlight base.", image: "img-bulb-gu10.jpg" },
    { id: "bulb_e26",    name: "Smart bulb (E26)",    unit: "bulb",    category: "bulb", section: "Bulbs", price: 12.99, labor: 8,
      blurb: "The standard screw-in bulb — fits most lamps and ceiling fixtures.", image: "img-bulb-e26.jpg" },
    { id: "bulb_e12",    name: "Smart bulb (E12)",    unit: "bulb",    category: "bulb", section: "Bulbs", price: 12.99, labor: 8,
      blurb: "A slimmer screw base for chandeliers and candelabra fixtures.", image: "img-bulb-e12.jpg" },

    { id: "switch",      name: "Smart switch",        unit: "switch",  section: "Lighting & power", price: 6.99,  labor: 25,
      blurb: "Replaces a wall switch so any fixture on it becomes smart.", image: "img-switch.jpg" },
    { id: "plug",        name: "Smart plug",          unit: "plug",    section: "Lighting & power", price: 9.99,  labor: 5,
      blurb: "Plugs into any outlet to make lamps and small appliances smart.", image: "img-plug.jpg" },

    { id: "door_sensor", name: "Door sensor",         unit: "sensor",  section: "Sensors", price: 14.99, labor: 10,
      blurb: "Knows when a door or window has been opened.", image: "img-door-sensor.jpg" },
    { id: "humidity",    name: "Humidity sensor",     unit: "sensor",  section: "Sensors", price: 17.99, labor: 10,
      blurb: "Tracks moisture levels — handy for bathrooms and basements.", image: "img-humidity.jpg" },
    { id: "motion",      name: "Motion sensor",       unit: "sensor",  section: "Sensors", price: 9.99,  labor: 15,
      blurb: "Detects movement in a room to trigger lights or alerts.", image: "img-motion.jpg" },

    { id: "camera",      name: "Battery camera",      unit: "camera",  section: "Security", price: 220, labor: 45,
      blurb: "Wire-free security camera. Mounts anywhere with no outlet needed.", image: "img-camera.jpg" },
    { id: "camera_pro",  name: "Pan-tilt battery camera", unit: "camera", section: "Security", price: 320, labor: 55,
      blurb: "Wire-free camera that follows motion and covers a wider area.", image: "img-camera-pro.jpg" },
    { id: "lock",        name: "Smart lock",          unit: "lock",    section: "Security", price: 230, labor: 40,
      blurb: "Lock and unlock your door remotely or automatically.", image: "img-lock.jpg" },

    { id: "thermostat",  name: "Smart thermostat",    unit: "thermostat", section: "Lifestyle", price: 179, labor: 50,
      blurb: "Controls heating and cooling from your phone or on a schedule.", image: "img-thermostat.jpg" },
    { id: "blind_sm",    name: "Smart blind (small window)", unit: "blind", section: "Lifestyle", price: 240, labor: 65,
      blurb: "Motorized blind for standard-size windows.", image: "img-blind-sm.jpg" },
    { id: "blind_lg",    name: "Smart blind (large window)", unit: "blind", section: "Lifestyle", price: 340, labor: 85,
      blurb: "Motorized blind for oversized or floor-to-ceiling windows.", image: "img-blind-lg.jpg" },
    { id: "vacuum",      name: "Robot vacuum",        unit: "vacuum",  section: "Lifestyle", price: 299, labor: 20,
      blurb: "Automatic vacuuming on a schedule or by voice command.", image: "img-vacuum.jpg" }
  ],

  // Order sections appear in on the device selection screen.
  deviceSections: ["Bulbs", "Lighting & power", "Sensors", "Security", "Lifestyle"],

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

};  ],

  // Applied only to hardware prices before they're shown to the customer —
  // labor prices are untouched. 0.35 = 35% on top of the raw hardware prices
  // above (covers sales tax + your markup). Change this single number to
  // adjust hardware pricing sitewide.
  markup: 0.35

};
