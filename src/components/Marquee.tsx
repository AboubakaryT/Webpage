export default function Marquee({ items }: { items: string[] }) {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];
  return (
    <div className="marquee-wrapper my-20">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );  
}