// src/components/sections/buyers/BuyerCostStructure.tsx
import Button from "@/components/ui/Button";
import { BarChart2, CheckCircle, Info, DollarSign, Zap, Leaf, Link } from "lucide-react"; // Example icons

interface CostComponentProps {
  name: string;
  value: number;
  note?: string;
  isTotal?: boolean;
}

const CostRow: React.FC<CostComponentProps> = ({ name, value, note, isTotal }) => (
  <div className={`flex justify-between items-center py-3 px-4 ${isTotal ? "border-t-2 border-emerald-500 dark:border-emerald-600 mt-2" : "border-b border-slate-200 dark:border-slate-700"}`}>
    <div>
      <p className={`text-md ${isTotal ? "font-bold text-lg text-emerald-700 dark:text-emerald-300" : "text-slate-700 dark:text-slate-300"}`}>{name}</p>
      {note && <p className="text-xs text-slate-500 dark:text-slate-400">{note}</p>}
    </div>
    <p className={`text-md font-semibold ${isTotal ? "text-lg text-emerald-700 dark:text-emerald-300" : "text-slate-800 dark:text-slate-200"}`}>
      €{value.toFixed(4)} <span className="text-xs text-slate-500 dark:text-slate-400">/ kWh</span>
    </p>
  </div>
);

export default function BuyerCostStructure() {
  const energyComponent = 0.2697;
  const gridFees = 0.0599;
  const taxesLevies = 0.0504;
  const adminEnergySharing = 0.03; // FLUXECO's platform fee or related costs
  const totalCost = energyComponent + gridFees + taxesLevies + adminEnergySharing;

  return (
    <section id="buyer-costing" className="section-padding bg-sky-50 dark:bg-slate-800/60">
      <div className="container-padding">
        <div className="text-center mb-16 md:mb-20">
          <DollarSign className="w-16 h-16 text-sky-600 dark:text-sky-400 mx-auto mb-6" />
          <h2 className="h2-text">Transparante & voorspelbare prijzen voor groene energie</h2>
          <p className="p-text mt-4 max-w-3xl mx-auto">fluxeco biedt een duidelijke kostenstructuur voor de groene energiebehoeften van uw bedrijf, waarbij concurrerende tarieven worden gecombineerd met de voordelen van lokale, duurzame stroom.</p>
        </div>

        <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 shadow-xl rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
          <div className="p-6 sm:p-8 bg-sky-600 dark:bg-sky-700 text-white">
            <h3 className="text-2xl font-bold text-center">Uw all-inclusive tarief voor groene energie</h3>
          </div>

          <div className="py-2">
            <CostRow name="Basis energiecomponent (vast)" value={energyComponent} note="rechtstreeks van lokale zonneproducenten" />
            <CostRow name="Nettarieven (transmissie & distributie)" value={gridFees} note="fluvius netwerkkosten voor afname" />
            <CostRow name="Belastingen & heffingen" value={taxesLevies} note="federale en vlaamse lasten" />
            <CostRow name="Fluxeco platform & administratiekosten" value={adminEnergySharing} note="voor p2p-facilitatie en energiedelingsdiensten" />
            <CostRow name="Totaal geschatte kosten per kwh" value={totalCost} isTotal={true} />
          </div>

          <div className="p-6 sm:p-8 bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-sky-600 dark:text-sky-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-1">Uw waarde begrijpen:</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  hoewel ons totaaltarief van <strong className="text-slate-700 dark:text-slate-200">€{totalCost.toFixed(2)}/kwh</strong> mogelijk iets hoger ligt dan sommige basiscontracten voor "grijze" energie (ongeveer +€0.03/kwh volgens initiële schattingen), biedt fluxeco aanzienlijke meerwaarde:
                </p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-green-500" />
                    <span>
                      gegarandeerd <strong className="text-slate-700 dark:text-slate-200">100% lokale, groene energie</strong>, wat uw mvo- & duurzaamheidsprofiel versterkt.
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>
                      <strong className="text-slate-700 dark:text-slate-200">prijsstabiliteit</strong> met vaste tarieven van producentenpools, die u beschermen tegen marktvolatiliteit.
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-green-500" />
                    <span>vereenvoudigde inkoop en directe steun voor de energietransitie in vlaanderen.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
