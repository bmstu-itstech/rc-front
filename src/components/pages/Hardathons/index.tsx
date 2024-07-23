import React, {FC, HTMLAttributes} from "react";
import HardathonsCardSampleImage from '../../assets/images/hardathons-card-sample-image.png';
import HardathonsBG from '../../assets/images/hardathons-bg.png';
import {Link} from "react-router-dom";

interface HardathonCardProps {
    image: string;
}

const HardathonCard: FC<HardathonCardProps> = ({image}) => (
    <div
        className={
            `
            tw-aspect-hardathon-card
            tw-min-w-96
            tw-w-2/5
            tw-content-center
            tw-rounded-7xl
            tw-text-center
            tw-border-red-700
            tw-border-4
            tw-bg-cover
            tw-leading-4
            tw-flex
            tw-items-center
            tw-justify-center
            tw-text-2xl
            tw-bg-no-repeat
            `
        }
        style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 23.17%, rgba(193, 49, 0, 0.55) 100%), url(${image})`,
        }}
    >
        <div>ИНЖЕНЕРНЫЙ ВЫЗОВ 2022</div>
    </div>
)

const HardathonsPage: FC<HTMLAttributes<HTMLDivElement>> = () => {

    return (
        <>
            <link rel="stylesheet" type="text/css" href="/tailwind-preflight.css"/>

            <div
                className={
                    `
            tw-w-full tw-min-h-screen 
            tw-text-white
            tw-px-4 lg:tw-px-40
            tw-bg-opacity-70
            tw-pb-4
            `
                }
                style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url(${HardathonsBG})`,
                }}
            >
                <div className={'tw-h-24 md:tw-h-10 lg:tw-h-20'}/>
                <h2
                    className={
                        `
                    tw-mx-auto text-center
                    tw-bg-opacity-40
                    tw-text-4xl md:tw-text-6xl lg:tw-text-7xl
                    tw-font-normal tw-uppercase
                    `
                    }
                >
                    ХАРДАТОНЫ
                </h2>
                <div className={'tw-h-10 lg:tw-h-24  xl:tw-h-36'}/>
                <div className={'tw-flex tw-gap-14 mx-auto tw-justify-center tw-flex-wrap'}>
                    <Link to={'/hardathons/1'} className={'tw-h-fit tw-w-fit'}><HardathonCard
                        image={HardathonsCardSampleImage}/>
                    </Link>
                    <Link to={'/hardathons/1'} className={'tw-h-fit tw-w-fit'}><HardathonCard
                        image={HardathonsCardSampleImage}/>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default HardathonsPage;
