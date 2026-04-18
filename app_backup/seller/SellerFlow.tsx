"use client";

import { useState } from "react";
import LocationStep from "./steps/LocationStep";
import ResourceStep from "./steps/ResourceStep";
import ContractorStep from "./steps/ContractorStep";

export default function SellerFlow() {
const [step, setStep] = useState(0);
const [data, setData] = useState<any>({});

const next = (values: any = {}) => {
setData((d: any) => ({ ...d, ...values }));
setStep((s) => s + 1);
};

const back = () => setStep((s) => Math.max(s - 1, 0));

switch (step) {
case 0:
return <LocationStep data={data} onNext={next} />;
case 1:
return <ResourceStep onNext={next} onBack={back} />;
case 2:
return <ContractorStep onBack={back} />;
default:
return <div>Done</div>;
}
}