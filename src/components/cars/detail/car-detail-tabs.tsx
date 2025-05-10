'use client';

import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Car } from './car-detail-page';

type CarDetailTabsProps = {
  car: Car;
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function CarDetailTabs({ car, activeTab, setActiveTab }: CarDetailTabsProps) {
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  // Keep track of previous active tab to determine scroll direction
  const [previousTab, setPreviousTab] = useState<string>(activeTab);
  
  // Update previous tab when active tab changes
  useEffect(() => {
    setPreviousTab(activeTab);
  }, [activeTab]);

  // Get index of tab in navigation order
  const getTabIndex = (tabId: string): number => {
    const tabOrder = ['specificaties', 'highlights', 'opties', 'financiering'];
    return tabOrder.indexOf(tabId);
  };

  // Scroll to the active tab when it changes
  useEffect(() => {
    if (tabsContainerRef.current) {
      const container = tabsContainerRef.current;
      const activeTabElement = container.querySelector(`[data-tab="${activeTab}"]`) as HTMLElement;
      
      if (activeTabElement) {
        // Get the current scroll position
        const currentScrollLeft = container.scrollLeft;
        // Get the left position of the active tab
        const tabLeft = activeTabElement.offsetLeft;
        const tabWidth = activeTabElement.offsetWidth;
        const containerWidth = container.offsetWidth;
        
        // Determine scroll direction based on tab indices
        const currentTabIndex = getTabIndex(activeTab);
        const previousTabIndex = getTabIndex(previousTab);
        const isScrollingRight = currentTabIndex > previousTabIndex;
        
        let scrollPosition;
        
        // When scrolling right (forward), position tab at left edge
        if (isScrollingRight) {
          scrollPosition = tabLeft - 8; // Small padding
        } 
        // When scrolling left (backward), position tab at right edge
        else {
          // Calculate position to place tab at right edge
          scrollPosition = (tabLeft + tabWidth) - containerWidth + 8; // Small padding
          
          // Make sure we don't scroll past the beginning
          scrollPosition = Math.max(0, scrollPosition);
        }
        
        // Smooth scroll to the position
        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [activeTab, previousTab]);

  return (
    <div className="bg-white">
      {/* Tabs */}
      <div className="">
        <div ref={tabsContainerRef} className="flex overflow-x-auto scrollbar-hide w-full gap-2 pb-4">
          <TabButton 
            label="Specificaties" 
            active={activeTab === 'specificaties'} 
            onClick={() => setActiveTab('specificaties')}
          />
          <TabButton 
            label="Highlights" 
            active={activeTab === 'highlights'} 
            onClick={() => setActiveTab('highlights')}
          />
          <TabButton 
            label="Opties & Accessoires" 
            active={activeTab === 'opties'} 
            onClick={() => setActiveTab('opties')}
          />
          <TabButton 
            label="Financiering" 
            active={activeTab === 'financiering'} 
            onClick={() => setActiveTab('financiering')}
          />
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-0 md:p-4 mt-2 md:mt-0 min-h-[400px]">
        {activeTab === 'specificaties' && <SpecificationsTab car={car} />}
        {activeTab === 'highlights' && <HighlightsTab car={car} />}
        {activeTab === 'opties' && <OptionsTab car={car} />}
        {activeTab === 'financiering' && <FinancingTab />}
      </div>
    </div>
  );
}

function TabButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  // Map the label to its corresponding tab ID
  let tabId = '';
  switch(label) {
    case 'Specificaties': tabId = 'specificaties'; break;
    case 'Highlights': tabId = 'highlights'; break;
    case 'Opties & Accessoires': tabId = 'opties'; break;
    case 'Financiering': tabId = 'financiering'; break;
    default: tabId = label.toLowerCase().replace(/\s+&\s+|\s+/g, '-');
  }
  
  return (
    <button
      onClick={onClick}
      data-tab={tabId}
      className={cn(
        "py-3 px-6 text-sm md:text-base transition-colors whitespace-nowrap flex-1 text-center",
        active 
          ? "bg-gold text-white font-medium" 
          : "bg-gray-100 text-gray-600 hover:text-gray-800"
      )}
    >
      {label}
    </button>
  );
}

function SpecificationsTab({ car }: { car: Car }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-6 px-0 md:px-4">
      <div className="mb-6 md:mb-0">
        <h3 className="font-semibold text-lg uppercase mb-4 text-dark">SPECIFICATIES</h3>
        <div className="space-y-3">
          <SpecRow label="Datum eerste registratie" value={car.firstRegistration} />
          <SpecRow label="Aantal zitplaatsen" value={car.seats} />
          <SpecRow label="Maximale koppel" value={`${car.torque}`} />
          <SpecRow label="Acceleratie (0-100km/h)" value={`${car.acceleration}`} />
          <SpecRow label="Wielbasis" value={`${car.wheelbase}`} />
          <SpecRow label="Aantal cilinders" value={car.cylinders} />
          <SpecRow label="Modeldatum vanaf" value={car.modelYear} />
        </div>
      </div>
      
      <div className="mb-6 md:mb-0">
        <h3 className="font-semibold text-lg uppercase mb-4 text-dark">ALGEMEEN</h3>
        <div className="space-y-3">
          <SpecRow label="Aantal deuren" value={car.doors} />
          <SpecRow label="Aantal versnellingen" value={car.gears} />
          <SpecRow label="Topsnelheid" value={`${car.topSpeed}`} />
          <SpecRow label="Tankinhoud" value={`${car.tankCapacity}`} />
          <SpecRow label="Cilinderinhoud" value={`${car.engineCapacity}`} />
          <SpecRow label="Kleur" value={car.color} />
          <SpecRow label="Gewicht (leeg)" value={`${car.weight}`} />
        </div>
      </div>
      
      <div className="mb-6 md:mb-0">
        <h3 className="font-semibold text-lg uppercase mb-4 text-dark">PRESTATIES</h3>
        <div className="space-y-3">
          <SpecRow label="Vermogen" value={`${car.power}`} />
          <SpecRow label="Koppel" value={`${car.torque}`} />
          <SpecRow label="Topsnelheid" value={`${car.topSpeed}`} />
          <SpecRow label="Acceleratie (0-100)" value={`${car.acceleration}`} />
          <SpecRow label="Aandrijving" value="Quattro (4WD)" />
        </div>
      </div>
    </div>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-gray-100 pb-2">
      <span className="text-gray-600">{label}</span>
      <span className="font-medium text-gold">{value}</span>
    </div>
  );
}

function HighlightsTab({ car }: { car: Car }) {
  return (
    <div className="max-w-3xl">
      <h3 className="font-medium text-lg uppercase mb-4">Opmerkingen</h3>
      <div 
        className="prose prose-sm max-w-none text-gray-600"
        dangerouslySetInnerHTML={{ __html: car.highlights }}
      />
    </div>
  );
}

function OptionsTab({ car }: { car: Car }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="mb-6 md:mb-0">
        <h3 className="font-medium text-lg mb-4">Exterieur</h3>
        <ul className="space-y-2">
          {car.options.exterior.map((option, index) => (
            <li key={`exterior-${index}`} className="flex items-start gap-2 text-gray-600">
              <span className="text-gold">✓</span>
              <span>{option}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mb-6 md:mb-0">
        <h3 className="font-medium text-lg mb-4">Infotainment</h3>
        <ul className="space-y-2">
          {car.options.infotainment.map((option, index) => (
            <li key={`infotainment-${index}`} className="flex items-start gap-2 text-gray-600">
              <span className="text-gold">✓</span>
              <span>{option}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mb-6 md:mb-0">
        <h3 className="font-medium text-lg mb-4">Interieur & Comfort</h3>
        <ul className="space-y-2">
          {car.options.interior.map((option, index) => (
            <li key={`interior-${index}`} className="flex items-start gap-2 text-gray-600">
              <span className="text-gold">✓</span>
              <span>{option}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mb-6 md:mb-0">
        <h3 className="font-medium text-lg mb-4">Veiligheid</h3>
        <ul className="space-y-2">
          {car.options.safety.map((option, index) => (
            <li key={`safety-${index}`} className="flex items-start gap-2 text-gray-600">
              <span className="text-gold">✓</span>
              <span>{option}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function FinancingTab() {
  const [financingType, setFinancingType] = useState('business');
  
  return (
    <div>
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setFinancingType('business')}
          className={cn(
            "py-2 px-4 text-gray-800",
            financingType === 'business' 
              ? "bg-gold/10 border border-gold rounded" 
              : "border border-transparent"
          )}
        >
          Zakelijk
        </button>
        <button
          onClick={() => setFinancingType('personal')}
          className={cn(
            "py-2 px-4 text-gray-800",
            financingType === 'personal' 
              ? "bg-gold/10 border border-gold rounded" 
              : "border border-transparent"
          )}
        >
          Particulier
        </button>
      </div>
      
      <div className="max-w-xl">
        {financingType === 'business' ? (
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Financial Lease aanvraag</h3>
            <div className="bg-gray-50 p-4 rounded">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Naam bedrijf</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">KVK Nummer</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Contactpersoon</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Telefoonnummer</label>
                  <input 
                    type="tel" 
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <button 
                  type="submit"
                  className="bg-gold hover:bg-gold/90 text-white py-2 px-4 rounded w-full"
                >
                  Verstuur aanvraag
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Particuliere financiering</h3>
            <div className="bg-gray-50 p-4 rounded">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Voornaam</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Achternaam</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Telefoonnummer</label>
                  <input 
                    type="tel" 
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <button 
                  type="submit"
                  className="bg-gold hover:bg-gold/90 text-white py-2 px-4 rounded w-full"
                >
                  Verstuur aanvraag
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}