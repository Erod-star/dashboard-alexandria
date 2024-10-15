export const CalendarGlossary = () => {
  return (
    <div className="h-full flex flex-col justify-center pb-3">
      <h3 className="text-2xl font-medium">Glosario</h3>

      <ul className="h-full mt-4 space-y-3">
        <li className="flex gap-2 items-center">
          <div className="size-5 bg-[#FF2525] rounded-md" />
          <span className="text-lg">Recorridos casas</span>
        </li>

        <li className="flex gap-2 items-center">
          <div className="size-5 bg-[#FE9151] rounded-md" />
          <span className="text-lg">Video conferencias</span>
        </li>

        <li className="flex gap-2 items-center">
          <div className="size-5 bg-[#5194EB] rounded-md" />
          <span className="text-lg">Cumpleaños de Leads</span>
        </li>

        <li className="flex gap-2 items-center">
          <div className="size-5 bg-[#9925FF] rounded-md" />
          <span className="text-lg">Sala de juntas reservada</span>
        </li>
      </ul>
    </div>
  );
};
