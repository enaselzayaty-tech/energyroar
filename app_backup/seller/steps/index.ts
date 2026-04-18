import LocationStep from "./LocationStep";
import ResourceStep from "./ResourceStep";
import ContractorStep from "./ContractorStep";
import FinanceStep from "./FinanceStep";
import ReviewStep from "./ReviewStep";

export const steps = [
{
id: "location",
component: LocationStep,
},
{
id: "resource",
component: ResourceStep,
},
{
id: "contractor",
component: ContractorStep,
},
{
id: "finance",
component: FinanceStep,
},
{
id: "review",
component: ReviewStep,
},
];