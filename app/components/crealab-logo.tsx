export default function CrealabLogo() {
    return (
        <div className="flex flex-row items-center justify-center h-[100%] space-x-3">
            <img className="h-[50%]" src="/crealab-logo.webp" alt="" />
            <h1 className="text-2xl font-bold flex flex-col justify-center"><p className="text-sm">Activité</p><span className="text-[var(--orange)]">créalab</span></h1>
        </div>
    );
}