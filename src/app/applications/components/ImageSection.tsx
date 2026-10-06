import Image from "next/image";
export default function ImageSection() {
    return (
        <section id="image-section" className="bg-white">
            <div className="grid grid-cols-2 max-w-[1366px]">
                <div className="pr-30 pt-27">
                    <div className=" w-[562px] h-[854px] overflow-hidden">
                        <Image src="/images/6.png"
                            alt=""
                            width={2301}
                            height={4096}
                            className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="-translate-x-23 ">
                    <div className="w-[714px] h-[1071.8px] overflow-hidden ">
                        <Image src="/images/7.png"
                            alt=""
                            width={2731}
                            height={4096}
                            className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="col-span-2">
                    <div className=" w-[1246px] h-[780px] overflow-hidden mx-auto mt-10 mb-52">
                        <Image src="/images/8.png"
                            alt=""
                            width={4096}
                            height={2556}
                            className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
}