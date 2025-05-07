import { Car } from './car-detail-page';

type CarMainInfoProps = {
  car: Car;
};

export default function CarMainInfo({ car }: CarMainInfoProps) {
  return (
    <div className="bg-white rounded shadow-md p-6">
      <div className="mb-4">
        <h1 className="text-xl font-bold text-dark">{car.brand}</h1>
        <h2 className="text-3xl font-bold text-dark mb-1">{car.model} {car.variant}</h2>
      </div>
      
      <div className="border-t border-gold w-full my-4"></div>
      
      {/* Key specs grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <h3 className="font-semibold text-lg mb-4 text-dark">SPECIFICATIES</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-dark/70">Datum eerste registratie</span>
              <span className="font-medium">{car.firstRegistration}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark/70">Aantal zitplaatsen</span>
              <span className="font-medium">{car.seats}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark/70">Maximale koppel</span>
              <span className="font-medium">{car.torque}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark/70">Acceleratie (0-100km/h)</span>
              <span className="font-medium">{car.acceleration}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark/70">Wielbasis</span>
              <span className="font-medium">{car.wheelbase}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark/70">Aantal cilinders</span>
              <span className="font-medium">{car.cylinders}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark/70">Modeldatum vanaf</span>
              <span className="font-medium">{car.modelYear}</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-4 text-dark md:opacity-0">1</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-dark/70">Aantal deuren</span>
              <span className="font-medium">{car.doors}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark/70">Aantal versnellingen</span>
              <span className="font-medium">{car.gears}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark/70">Topsnelheid</span>
              <span className="font-medium">{car.topSpeed}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark/70">Tankinhoud</span>
              <span className="font-medium">{car.tankCapacity}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark/70">Cilinderinhoud</span>
              <span className="font-medium">{car.engineCapacity}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark/70">Kleur</span>
              <span className="font-medium">{car.color}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark/70">Gewicht (leeg)</span>
              <span className="font-medium">{car.weight}</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-4 text-dark">HIGHLIGHTS</h3>
          <div 
            className="prose prose-sm max-w-none text-dark/80"
            dangerouslySetInnerHTML={{ __html: car.highlights }}
          />
        </div>
      </div>
    </div>
  );
}