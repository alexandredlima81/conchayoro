<<<<<<< HEAD
import { blackFridayFlag } from '@/app/flags';

export default async function Page() {
    const black_friday = await blackFridayFlag();
    return (
        <div>
            <h1> Welcome to the ConchaYOro App - deploy v3</h1>
            { black_friday ? <button> Promo </button> : <button> Normal </button> }
        </div>
    )
};
=======
export default function Home() {
return (
<main className="flex min-h-screen flex-col items-center justify-between p-24">
<div className="z-10 max-w-5xl w-full items-center justify-between font-mono
text-sm lg:flex">
<h1> Welcome to the ConchaYOro App - DEPLOY V2 </h1>
</div>
</main>
)
}
>>>>>>> 0d023f2cadaa24e39ce520d2dbbbbd8fa5a22ea5
