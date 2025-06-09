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
          <h2 className="h2-text">Transparent & Predictable Green Energy Pricing</h2>
          <p className="p-text mt-4 max-w-3xl mx-auto">FLUXECO offers a clear cost structure for your business's green energy needs, combining competitive rates with the benefits of local, sustainable power.</p>
        </div>

        <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 shadow-xl rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
          <div className="p-6 sm:p-8 bg-sky-600 dark:bg-sky-700 text-white">
            <h3 className="text-2xl font-bold text-center">Your All-Inclusive Green Energy Rate</h3>
          </div>

          <div className="py-2">
            <CostRow name="Base Energy Component (Fixed)" value={energyComponent} note="Directly from local solar producers" />
            <CostRow name="Grid Fees (Transmission & Distribution)" value={gridFees} note="Fluvius network costs for offtake" />
            <CostRow name="Taxes & Levies" value={taxesLevies} note="Federal and Flemish charges" />
            <CostRow name="FLUXECO Platform & Admin Fee" value={adminEnergySharing} note="For P2P facilitation and energy sharing services" />
            <CostRow name="Total Estimated Cost per kWh" value={totalCost} isTotal={true} />
          </div>

          <div className="p-6 sm:p-8 bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-sky-600 dark:text-sky-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-1">Understanding Your Value:</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  While our total rate of <strong className="text-slate-700 dark:text-slate-200">€{totalCost.toFixed(2)}/kWh</strong> might be slightly above some basic "gray" energy contracts (approx. +€0.03/kWh as per initial estimates), FLUXECO provides significant added value:
                </p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-green-500" />
                    <span>
                      Guaranteed <strong className="text-slate-700 dark:text-slate-200">100% local, green energy</strong>, boosting your CSR & sustainability profile.
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>
                      <strong className="text-slate-700 dark:text-slate-200">Price stability</strong> with fixed rates from producer pools, shielding you from market volatility.
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-green-500" />
                    <span>Simplified procurement and direct support for Flanders' energy transition.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button variant="secondary" size="lg" asChild>
            <Link href="/contact?subject=BuyerPricingInquiry">Discuss Your Energy Needs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
