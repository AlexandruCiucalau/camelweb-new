import Image from "next/image";
export default function PhotoGrid () {
  return (
    <section id="photo-grid" className="bg-white">
        {/* Photo Grid */}
        <div className="grid grid-cols-2 max-w-[1246px] gap-[28px] mx-auto">
          {/* Top row */}
          <div className="w-photo-w h-photo-h">
            <Image
              src="/images/1.jpg"
              alt="CamelWeb employees in library area"
              width={4096}
              height={2731}
              className="w-full h-full"
            />
          </div>
          <div className="w-photo-w h-photo-h">
            <Image
              src="/images/2.jpg"
              alt="CamelWeb team meeting"
              width={4096}
              height={2304}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Middle row */}
          <div className="w-photo-w h-photo-h">
            <Image
              src="/images/3.jpg"
              alt="CamelWeb office space with plants"
              width={3000}
              height={2000}
              className="w-full h-full"
            />
          </div>
          <div className="w-photo-w h-photo-h">
            <Image
              src="/images/4.jpg"
              alt="CamelWeb conference room"
              width={4096}
              height={2304}
              className="w-full h-full"
            />
          </div>

          {/* Bottom row  */}
          <div className="col-span-2 h-photo-bottom-h">
            <Image
              src="/images/5.jpg"
              alt="CamelWeb office with city view"
              width={4096}
              height={2304}
              className="w-full h-full"
            />
          </div>
        </div>
    </section>
  );
}