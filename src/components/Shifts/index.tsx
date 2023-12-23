import './style.scss'

interface ShiftsProps {
  shifts: { 
    temperature: number | string; 
    period: string,
    icon: string
  }[];
}

export function Shifts({ shifts }: ShiftsProps) {
  return (
    <div className="shift__container">
      {shifts.map((shift, index) => (
        <div key={index} className="shift__wrapper">
          <p>{shift.period}</p>
          <img src={`https:${shift.icon}`} alt={`A symbol represents the weather at a temperature o ${shift.temperature}`} />
          <p>{shift.temperature}</p>
        </div>
      ))}
    </div>
  );
}
