export default function PhotoGrid () {
  return (
    <section id="photo-grid" className="bg-white">
        {/* Photo Grid */}
        <div className="grid grid-cols-2 max-w-[1246px] gap-[28px] mx-auto">
          {/* Top row */}
          <div className="w-photo-w h-photo-h">
            <img
              src="/images/1.jpg"
              alt="CamelWeb employees in library area"
              className="w-full h-full"
            />
          </div>
          <div className="w-photo-w h-photo-h">
            <img
              src="/images/2.jpg"
              alt="CamelWeb team meeting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Middle row */}
          <div className="w-photo-w h-photo-h">
            <img
              src="/images/3.jpg"
              alt="CamelWeb office space with plants"
              className="w-full h-full"
            />
          </div>
          <div className="w-photo-w h-photo-h">
            <img
              src="/images/4.jpg"
              alt="CamelWeb conference room"
              className="w-full h-full"
            />
          </div>

          {/* Bottom row  */}
          <div className="col-span-2 h-photo-bottom-h">
            <img
              src="/images/5.jpg"
              alt="CamelWeb office with city view"
              className="w-full h-full"
            />
          </div>
        </div>
    </section>
  );
}