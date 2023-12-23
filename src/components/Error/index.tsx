export function ErrorDisplay({ cityName }: { cityName: string }){
  return (
    <div>
      Error ao buscar dados meteorológicos para {cityName}
    </div>
  );
}
