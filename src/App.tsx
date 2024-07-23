import DayBlock from "./components/DayBlock";
function App() {
  return (
    <div className="w-screen h-screen bg-slate-200">
      <div className="w-fit mx-auto pb-[6rem] pt-[4rem] text-4xl">
        Local Weather App
      </div>
      <DayBlock />
      <div></div>
    </div>
  );
}

export default App;
