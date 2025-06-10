// src/components/sections/producers/EarningsPotential.tsx
import { BarChart, TrendingUp, Sun, BarChart3, Coins } from "lucide-react"; // Added Coins

export default function EarningsPotential() {
  // Data from "Kosten- en opbrengstenanalyse" - Energieproducenten
  const exampleProduction = 3472; // kWh per jaar
  const selfConsumptionPercentage = 28;
  const selfConsumedKWh = 972; // 28% of 3472 kWh
  const injectedKWh = 2500; // 72% of 3472 kWh

  const fluxecoNetPricePerKWh = 0.1528; // Netto opbrengst per kWh
  const traditionalFeedInMin = 0.03;
  const traditionalFeedInMax = 0.04;

  const avoidedCostSelfConsumption = selfConsumedKWh * 0.38; // Assuming 0.38 EUR/kWh grid price
  const earningsWithFluxeco = injectedKWh * fluxecoNetPricePerKWh;
  const totalValueFluxeco = earningsWithFluxeco + avoidedCostSelfConsumption;

  const earningsTraditionalMin = injectedKWh * traditionalFeedInMin;
  const totalValueTraditionalMin = earningsTraditionalMin + avoidedCostSelfConsumption;

  const earningsTraditionalMax = injectedKWh * traditionalFeedInMax;
  const totalValueTraditionalMax = earningsTraditionalMax + avoidedCostSelfConsumption;

  return (
    <section id="earnings-potential" className="section-padding bg-green-700 dark:bg-green-800 text-white">
      {/* Richer background */}
      <div className="container-padding">
        <div className="text-center mb-16 md:mb-20">
          <Coins className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Ontdek Uw <span className="text-yellow-400">Echte</span> Winst met Zonne-energie
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-green-100 dark:text-green-200 max-w-3xl mx-auto">
            Geen giswerk meer. Hier is een duidelijke vergelijking die laat zien hoe FLUXECO uw inkomsten uit overtollige zonne-energie aanzienlijk verhoogt vergeleken met de gebruikelijke tarieven.
          </p>
        </div>

        <div className="max-w-5xl mx-auto p-0 md:p-4">
          {/* Removed outer card styling */}
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-semibold mb-2 text-green-50">Voorbeeld: Gemiddelde Zonnepaneelinstallatie van een Gezin</h3>
            <p className="text-sm text-green-200">
              Jaarlijkse Productie: {exampleProduction} kWh | Eigen Verbruik: {selfConsumedKWh} kWh ({selfConsumptionPercentage}%) | Op het Net Gezet: {injectedKWh} kWh
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Traditional Feed-in Side */}
            <div className="flex flex-col p-6 rounded-xl bg-red-700/80 dark:bg-red-800/70 backdrop-blur-sm shadow-lg">
              {/* Darker, more subdued for "lesser" option */}
              <div className="text-center mb-4">
                <BarChart3 className="w-12 h-12 text-red-300 mx-auto mb-2" />
                <h4 className="text-xl font-bold text-red-200">Gewoon Teruglevertarief</h4>
                <p className="text-xs text-red-300">(€{traditionalFeedInMin.toFixed(2)}-€{traditionalFeedInMax.toFixed(2)} / kWh op het net)</p>
              </div>
              <div className="space-y-1 text-sm text-red-100 flex-grow">
                <p>
                  Waarde van Energie op het Net:{" "}
                  <span className="font-semibold float-right">
                    €{earningsTraditionalMin.toFixed(2)} - €{earningsTraditionalMax.toFixed(2)}
                  </span>
                </p>
                <p>
                  Waarde van Eigen Verbruik:{" "}
                  <span className="font-semibold float-right">
                    €{avoidedCostSelfConsumption.toFixed(2)}
                  </span>
                </p>
              </div>
              <div className="mt-auto border-t-2 border-dashed border-red-500 pt-3">
                <p className="text-lg font-bold text-red-200 text-center">
                  Totale Waarde: €{totalValueTraditionalMin.toFixed(2)} - €{totalValueTraditionalMax.toFixed(2)}
                </p>
              </div>
            </div>

            {/* FLUXECO Side - More Prominent */}
            <div className="flex flex-col p-6 rounded-xl bg-white dark:bg-slate-100 text-green-800 shadow-2xl transform md:scale-105 ring-4 ring-yellow-400">
              {/* Brighter, stands out, ring highlight */}
              <div className="text-center mb-4">
                <Sun className="w-12 h-12 text-yellow-500 mx-auto mb-2" />
                <h4 className="text-xl font-bold text-green-700">Met FLUXECO</h4>
                <p className="text-xs text-green-600">(~€{fluxecoNetPricePerKWh.toFixed(4)} / kWh netto voor energie op het net)</p>
              </div>
              <div className="space-y-1 text-sm text-slate-700 flex-grow">
                <p>
                  Waarde van Energie op het Net:{" "}
                  <span className="font-semibold float-right">
                    €{earningsWithFluxeco.toFixed(2)}
                  </span>
                </p>
                <p>
                  Waarde van Eigen Verbruik:{" "}
                  <span className="font-semibold float-right">
                    €{avoidedCostSelfConsumption.toFixed(2)}
                  </span>
                </p>
              </div>
              <div className="mt-auto border-t-2 border-yellow-500 pt-3">
                <p className="text-xl font-extrabold text-green-700 text-center">
                  Totale Waarde: €{totalValueFluxeco.toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center justify-center p-4 px-8 bg-yellow-400 text-green-800 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <TrendingUp className="w-10 h-10 mr-4" />
              <p className="text-xl font-bold">
                FLUXECO: Duidelijk Meer Winst!
              </p>
            </div>
            <p className="text-xs text-green-200 mt-6 max-w-2xl mx-auto">
              Let op: Dit is een rekenvoorbeeld. Echte cijfers kunnen anders zijn. De gebruikte netprijs voor eigen verbruik is €0,38/kWh. FLUXECO's nettoprijs per kWh van €{fluxecoNetPricePerKWh.toFixed(4)} houdt al rekening met de geschatte administratiekost van €75/jaar voor energiedelen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
