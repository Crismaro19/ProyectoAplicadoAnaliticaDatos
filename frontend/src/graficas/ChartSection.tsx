import { ChartMontoCreditoConsumo } from "./ChartMontoCreditoConsumo";
import ColombiaMap from "./ColombiaMap";
import { ChartTrabajoFormal } from "./ChartTrabajoFormal";
import { ChartCorrespMoviles } from "./ChartCorrespMoviles";
import { ChartIndicador } from "./ChartIndicador";
import { ChartMicroCreditoMonto } from "./ChartMicroCreditoMonto";
import { ChartEducacionMedia } from "./ChartEducacionMedia";
import { ChartProvisionGeneral } from "./ChartProvisionGeneral";
import { ChartTransCorrespMoviles } from "./ChartTransCorrespMoviles";
import { ChartSaldoCuentaAhorro } from "./ChartSaldoCuentaAhorro";
import { ChartCertDepoTermino } from "./ChartCertDepoTermino";

export function ChartSection() {
  return (
    <div className="mt-4">
      <div className="flex gap-2">
        <div className="w-1/3 bg-base-100 shadow-md p-4 mt-2">
          <ChartCorrespMoviles />
        </div>
        <div className="w-1/3  bg-base-100 shadow-md p-4 mt-2">
          <ChartIndicador />
        </div>
        <div className="w-1/3  bg-base-100 shadow-md p-4 mt-2">
          <ChartTrabajoFormal />
        </div>
      </div>

      <div className="flex gap-2">
        <div className="w-1/3 bg-base-100 shadow-md p-4 mt-2">
          <ChartMicroCreditoMonto />
        </div>
        <div className="w-1/3  bg-base-100 shadow-md p-4 mt-2">
          <ChartEducacionMedia />
        </div>
        <div className="w-1/3  bg-base-100 shadow-md p-4 mt-2">
          <ChartProvisionGeneral />
        </div>
      </div>

      <div className="flex gap-2">
        <div className="w-1/4 bg-base-100 shadow-md p-4 mt-2">
          <ChartMontoCreditoConsumo />
        </div>
        <div className="w-1/4  bg-base-100 shadow-md p-4 mt-2">
          <ChartTransCorrespMoviles />
        </div>
        <div className="w-1/4  bg-base-100 shadow-md p-4 mt-2">
          <ChartSaldoCuentaAhorro />
        </div>
        <div className="w-1/4 bg-base-100 shadow-md p-4 mt-2">
          <ChartCertDepoTermino />
        </div>
      </div>

      <div className=" bg-base-100 shadow-md p-4 mt-2">
        <ColombiaMap />
      </div>
    </div>
  );
}
