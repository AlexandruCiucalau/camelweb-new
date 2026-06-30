import { useState } from "react";
import type { ReactNode } from "react";
import { Syne } from 'next/font/google';
import { Poppins } from 'next/font/google';

type SpecLabelProps = {
    children: ReactNode;
    start?: boolean;
};

const syneFont = Syne({
    subsets: ["latin"],
    weight: ['400', '500', '600', '700'],
});
const poppinsFont = Poppins({
    subsets: ["latin"],
    weight: ['400', '500', '600', '700'],
});

const icons = [
    {
        id: 'arrows',
        grid: '/icons/icon-1.svg',
        large: '/icons/icon-1-2.svg',
        small: '/icons/icon-1-3.svg',
    },
    {
        id: 'globe',
        grid: '/icons/icon-2.svg',
        large: '/icons/icon-2-2.svg',
        small: '/icons/icon-2-3.svg',
    },
    {
        id: 'person',
        grid: '/icons/icon-3.svg',
        large: '/icons/icon-3-2.svg',
        small: '/icons/icon-3-3.svg',
    },
    {
        id: 'document',
        grid: '/icons/icon-4.svg',
        large: '/icons/icon-4-2.svg',
        small: '/icons/icon-4-3.svg',
    },
    {
        id: 'message',
        grid: '/icons/icon-5.svg',
        large: '/icons/icon-5-2.svg',
        small: '/icons/icon-5-3.svg',
    }
];
type RowProps = {
    grid: string;
    large: string;
    small: string;
};

function SpecLabel({ children, start = false }: SpecLabelProps) {
    return (
        <p
            className={`${poppinsFont.className} w-[59px] h-[44px] text-center text-[20px] leading-[110%] text-black-iconography ${start ? "" : "ml-6"
                }`}
        >
            {children}
        </p>
    );
}

function Row({ grid, large, small }: RowProps) {
    return (
        <>
            <SpecLabel start>24 px grid</SpecLabel>
            <div className="h-[263px] w-px bg-black" />
            <img src={grid} className="h-auto w-[260px]" alt="icon grid reference" />

            <SpecLabel>100 px wide</SpecLabel>
            <div className="h-[99px] w-px bg-black" />
            <img src={large} className="h-[100px] w-[100px]" alt="icon at 100px" />

            <SpecLabel>36 px wide</SpecLabel>
            <div className="h-[34px] w-px bg-black" />
            <img src={small} className="h-9 w-9" alt="icon at 36px" />
        </>
    );
}

export default function ImageArea() {
    return (
        <div className="grid grid-cols-[repeat(9,max-content)] items-center gap-x-12 gap-y-25 ml-35">
            {icons.map((icon) => (
                <Row key={icon.id} {...icon} />
            ))}
        </div>
    );
}