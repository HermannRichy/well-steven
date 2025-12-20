import FormationTarif from "@/components/sections/FormationTarif";
import FormationPlan from "@/components/sections/FormationPlan";
import FormationCta from "@/components/sections/FormationCta";

export default function Formations() {
    return (
        <>
            <main>
                <FormationPlan/>
                <FormationTarif/>
                <FormationCta/>
            </main>
        </>
    );
}

