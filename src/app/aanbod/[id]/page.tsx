import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import CarDetailPage from '@/components/cars/detail/car-detail-page';

// This would eventually come from an API
const getCarById = (id: string) => {
  // Hardcoded data for now - matches what we see in screenshots
  return {
    id: id,
    brand: "Audi",
    model: "A6",
    variant: "Avant 55 TFSI E Quattro S-Line",
    price: "€54.990,00",
    taxInfo: "incl. BTW",
    mileage: "83500 km",
    year: "2022",
    color: "Daytona grijs metallic",
    transmission: "Automaat",
    fuel: "Benzine / Elektrisch",
    power: "367 pk",
    firstRegistration: "16-03-2022",
    seats: "5",
    torque: "370 nm",
    acceleration: "5.7s",
    wheelbase: "292 cm",
    cylinders: "4",
    modelYear: "2022",
    doors: "5",
    gears: "7",
    topSpeed: "250km/h",
    tankCapacity: "52 L",
    engineCapacity: "1984 cc",
    weight: "2050 kg",
    // Using dummy image URLs for testing that match the Van Bruggen automotive pattern
    images: Array.from({ length: 53 }, (_, i) => 
      `https://vanbruggenautomotive.nl/wp-content/uploads/2025/05/44670959-${i}.jpg`
    ),
    highlights: `
      <b><u>Highlights:</u></b><br>
      - 20" Audi sport velgen<br>
      - <b>360 graden camera</b><br>
      - Adaptieve Cruise Control<br>
      - Adaptieve demper regeling<br>
      ​- Akoestisch glas (dubbel)<br>
      - <b>Bang & Olufsen audio</b><br>
      - <b>BTW Aftrekbaar</b><br>
      - CarPlay Apple/Android<br>
      - Comfortstoelen<br>
      - DAB Radio<br>
      - Dealer onderhouden<br>
      - Dodehoek<br>
      - <b>Elektrische stoelen met geheugen (beide kanten)</b><br>
      - Elektrische kofferklep<br>
      - <b>Head-up display</b><br>
      - Keyless<br>
      - Lane assist<br>
      - Lederen bekleding<br>
      - <b>Matrix LED koplampen</b>
    `,
    options: {
      exterior: [
        "Daytonagrijs Pareleffect",
        "Matrix LED Koplampen",
        "Panorama-glasdak",
        "Servosluiting Voor De Deuren",
        "S Line Exterieur",
        "Velgen, Gegoten Lichtmetaal 8,5J X 20 \"5-arm-polygoon\"-design, Audi Sport",
        "Velgen, Lichtmetaal 8,5J X 20 \"5-V-spaak\"-design",
        "Akoestisch Zijruiten",
        "Bagageruimteklep, Automatisch Bedienbaar"
      ],
      infotainment: [
        "Bang & Olufsen Premium Soundsystem",
        "Head-Up Display",
        "Navigatiesysteem Full Map",
        "Volledig Digitaal Instrumentenpaneel",
        "Audi Phone Box",
        "Audi Smartphone Interface",
        "Bluetooth Telefoonvoorbereiding",
        "Boordcomputer"
      ],
      interior: [
        "Bekleding, Leder \"Valcona\"",
        "Comfortstoelen",
        "Electronic Climate Controle",
        "Elektrisch Verstelb. Passagiersstoel Met Geheugen",
        "Stoelen, Vóór Verwarmbaar",
        "Stoelverwarming Voor- En Achterin",
        "Achterbank In Delen Neerklapbaar",
        "Armsteun Achter"
      ],
      safety: [
        "Alarm Klasse 1(startblokkering)",
        "Anti Blokkeer Systeem",
        "Anti DoorSlip Regeling",
        "Audi Side Assist Inclusief Audi Pre Sense Rear",
        "Autonomous Emergency Braking",
        "Bestuurdersairbag",
        "Bots Herkenning En Activatie",
        "Bots Waarschuwing Systeem"
      ]
    }
  };
};

type Props = {
  params: { id: string }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const car = getCarById(params.id);
  
  if (!car) {
    return {
      title: 'Auto niet gevonden | Van Bruggen Automotive',
    };
  }
  
  return {
    title: `${car.brand} ${car.model} ${car.variant} | Van Bruggen Automotive`,
    description: `Bekijk deze ${car.brand} ${car.model} ${car.variant} uit ${car.year} met ${car.mileage} bij Van Bruggen Automotive.`,
  };
}

export default function CarDetail({ params }: Props) {
  const car = getCarById(params.id);
  
  if (!car) {
    notFound();
  }
  
  return <CarDetailPage car={car} />;
}