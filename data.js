/* DATABASE - HEAVY LOGISTICS FLEET (16 UNITS) */
const fleetData = [
    // --- UNITED STATES ---
    { 
        id: "c130",
        name: "C-130 Hercules", 
        origin: "United States", 
        propulsion: "Turboprop", 
        role: "Tactical",
        image: "photos/C130.jpg",
        description: "The Lockheed C-130 Hercules is an American four-engine turboprop military transport aircraft. Capable of using unprepared runways for takeoffs and landings, the C-130 was originally designed as a troop, medevac, and cargo transport aircraft.",
        specs: { speed: "592 km/h", range: "3,800 km", payload: "20,000 kg", wingspan: "40.4 m" }
    },
    { 
        id: "c17",
        name: "Boeing C-17 Globemaster III", 
        origin: "United States", 
        propulsion: "Jet", 
        role: "Strategic",
        image: "photos/C17.jpg",
        description: "The C-17 Globemaster III is a large military transport aircraft. It commonly performs tactical and strategic airlift missions, transporting troops and cargo throughout the world; additional roles include medical evacuation and airdrop duties.",
        specs: { speed: "830 km/h", range: "4,480 km", payload: "77,500 kg", wingspan: "51.75 m" }
    },
    { 
        id: "c5",
        name: "Lockheed C-5 Galaxy", 
        origin: "United States", 
        propulsion: "Jet", 
        role: "Strategic",
        image: "photos/C5.jpg",
        description: "The Lockheed C-5 Galaxy is a large military transport aircraft built by Lockheed. It provides the United States Air Force with a heavy intercontinental-range strategic airlift capability, one that can carry outsized and oversized loads, including all air-certifiable cargo.",
        specs: { speed: "855 km/h", range: "8,900 km", payload: "127,460 kg", wingspan: "67.89 m" }
    },
    { 
        id: "v22",
        name: "V-22 Osprey", 
        origin: "United States", 
        propulsion: "Turboprop", 
        role: "Tactical",
        image: "photos/V22.jpg",
        description: "The Bell Boeing V-22 Osprey is an American multi-mission, tiltrotor military aircraft with both vertical takeoff and landing (VTOL) and short takeoff and landing (STOL) capabilities.",
        specs: { speed: "509 km/h", range: "1,627 km", payload: "9,070 kg", wingspan: "14.0 m" }
    },
    { 
        id: "c27j",
        name: "C-27J Spartan", 
        origin: "United States", 
        propulsion: "Turboprop", 
        role: "Tactical",
        image: "photos/C27J.jpg",
        description: "The Alenia C-27J Spartan is a military transport aircraft developed and manufactured by Leonardo's Aircraft Division. It is an advanced derivative of Alenia Aeronautica's earlier G.222.",
        specs: { speed: "602 km/h", range: "1,852 km", payload: "11,500 kg", wingspan: "28.7 m" }
    },

    // --- RUSSIA / UKRAINE ---
    { 
        id: "an124",
        name: "Antonov An-124 Ruslan", 
        origin: "Russia", 
        propulsion: "Jet", 
        role: "Strategic",
        image: "photos/An124.jpg",
        description: "The Antonov An-124 Ruslan is a large, strategic airlift, four-engined aircraft that was designed in the 1980s by the Antonov design bureau in the Ukrainian SSR, then part of the Soviet Union.",
        specs: { speed: "865 km/h", range: "3,700 km", payload: "150,000 kg", wingspan: "73.3 m" }
    },
    { 
        id: "an225",
        name: "Antonov An-225 Mriya", 
        origin: "Russia", 
        propulsion: "Jet", 
        role: "Strategic",
        image: "photos/An225.jpg",
        description: "The Antonov An-225 Mriya was a strategic airlift cargo aircraft that was designed by the Antonov Design Bureau in the Ukrainian SSR within the Soviet Union during the 1980s. It was the heaviest aircraft ever built.",
        specs: { speed: "850 km/h", range: "15,400 km", payload: "250,000 kg", wingspan: "88.4 m" }
    },
    { 
        id: "il76",
        name: "Ilyushin Il-76", 
        origin: "Russia", 
        propulsion: "Jet", 
        role: "Strategic",
        image: "photos/Il76.jpg",
        description: "The Ilyushin Il-76 is a multi-purpose four-engine turbofan strategic airlifter designed by the Soviet Union's Ilyushin design bureau. It was first planned as a commercial freighter in 1967.",
        specs: { speed: "900 km/h", range: "4,400 km", payload: "42,000 kg", wingspan: "50.5 m" }
    },
    { 
        id: "an22",
        name: "Antonov An-22 Antei", 
        origin: "Russia", 
        propulsion: "Turboprop", 
        role: "Strategic",
        image: "photos/An22.jpg",
        description: "The Antonov An-22 Antei is a heavy military transport aircraft designed by the Antonov Design Bureau in the Soviet Union. Powered by four turboprop engines, it is the world's largest turboprop-powered aircraft.",
        specs: { speed: "740 km/h", range: "5,000 km", payload: "80,000 kg", wingspan: "64.4 m" }
    },

    // --- EUROPE ---
    { 
        id: "a400m",
        name: "Airbus A400M Atlas", 
        origin: "Europe", 
        propulsion: "Turboprop", 
        role: "Tactical",
        image: "photos/A400M.jpg",
        description: "The Airbus A400M Atlas is a European four-engine turboprop military transport aircraft. It was designed by Airbus Military as a tactical airlifter with strategic capabilities.",
        specs: { speed: "781 km/h", range: "3,300 km", payload: "37,000 kg", wingspan: "42.4 m" }
    },
    { 
        id: "c295",
        name: "CASA C-295", 
        origin: "Europe", 
        propulsion: "Turboprop", 
        role: "Tactical",
        image: "photos/C295.jpg",
        description: "The EADS CASA C-295 is a twin-turboprop tactical military transport aircraft, and is currently manufactured by Airbus Defence and Space in Spain.",
        specs: { speed: "480 km/h", range: "1,300 km", payload: "9,250 kg", wingspan: "25.8 m" }
    },
    { 
        id: "a330",
        name: "Airbus A330 MRTT", 
        origin: "Europe", 
        propulsion: "Jet", 
        role: "Strategic",
        image: "photos/A330.jpg",
        description: "The Airbus A330 Multi Role Tanker Transport (MRTT) is an aerial refuelling tanker aircraft based on the civilian Airbus A330. It serves as a dual-role transport and tanker.",
        specs: { speed: "880 km/h", range: "14,800 km", payload: "45,000 kg", wingspan: "60.3 m" }
    },

    // --- CHINA ---
    { 
        id: "y20",
        name: "Xian Y-20 Kunpeng", 
        origin: "China", 
        propulsion: "Jet", 
        role: "Strategic",
        image: "photos/Y20.jpg",
        description: "The Xi'an Y-20 Kunpeng is a large military transport aircraft. It is the first heavy transport aircraft developed by China.",
        specs: { speed: "918 km/h", range: "7,800 km", payload: "66,000 kg", wingspan: "45.0 m" }
    },
    { 
        id: "y9",
        name: "Shaanxi Y-9", 
        origin: "China", 
        propulsion: "Turboprop", 
        role: "Tactical",
        image: "photos/Y9.jpg",
        description: "The Shaanxi Y-9 is a medium transport aircraft produced by Shaanxi Aircraft Company in China. It is an elongated and upgraded version of the Y-8F.",
        specs: { speed: "650 km/h", range: "5,700 km", payload: "25,000 kg", wingspan: "38.0 m" }
    },

    // --- OTHER ---
    { 
        id: "c390",
        name: "Embraer C-390 Millennium", 
        origin: "Other", 
        propulsion: "Jet", 
        role: "Tactical",
        image: "photos/C390.jpg",
        description: "The Embraer C-390 Millennium is a medium-size, twin-engine jet-powered military transport aircraft produced by the Brazilian aerospace manufacturer Embraer.",
        specs: { speed: "988 km/h", range: "2,820 km", payload: "26,000 kg", wingspan: "35.05 m" }
    },
    { 
        id: "kc2",
        name: "Kawasaki C-2", 
        origin: "Other", 
        propulsion: "Jet", 
        role: "Strategic",
        image: "photos/C2.jpg",
        description: "The Kawasaki C-2 is a mid-size, twin-turbofan engine military transport aircraft developed and manufactured by Kawasaki Heavy Industries for the Japan Air Self-Defense Force.",
        specs: { speed: "917 km/h", range: "7,600 km", payload: "37,600 kg", wingspan: "44.4 m" }
    }
];