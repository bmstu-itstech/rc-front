import React, { FC, HTMLAttributes } from "react";
import HardathonsBG from '../../assets/images/hardathons-bg.png';
import './Hardathons.scss';
import { useQuery } from '@tanstack/react-query';
import { Hardathons } from "../../../domain/entities/hardathons";
import { hardathonsList } from "../../../shared/apis/hardathons";
import { eventPlaceholder } from "../../../shared/placeholders/hardathons";
import { Link } from "react-router-dom";
import { AppConfig } from "../../../core";
import Slider from "react-slick";
import ArrowLeft from '../../assets/images/hardathons/left_arrow.png';
import ArrowRight from '../../assets/images/hardathons/right_arrow.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HardathonCard: FC<Hardathons> = ({ id, title, photo }) => (
    <Link className={"hardathon-card tw-aspect-hardathon-card"}
          style={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 23.17%, rgba(193, 49, 0, 0.55) 100%), url(${AppConfig.apiUri}${photo})` }}
          to={`${id}`}>
        <div className={"hardathon__title"}>{title}</div>
    </Link>
);

const SampleNextArrow: FC<any> = (props) => {
    const { className, style, onClick } = props;
    return (
        <img src={ArrowRight}
            className={className}
            style={{ ...style,
                display: "block",
                width: 61,
                height: 61,
                transform: 'rotate(180deg)',
                transformOrigin: 'center',
                position: 'absolute',
                top: '50%',
                right: 0,
                marginTop: '-30px',
                zIndex: 1}}
            onClick={onClick}
        />
    );
};

const SamplePrevArrow: FC<any> = (props) => {
    const { className, style, onClick } = props;
    return (
        <img src={ArrowLeft}
            className={className}
            style={{ ...style,
                display: "block",
                width: 61,
                height: 61,
                position: 'absolute',
                zIndex: 1}}
            onClick={onClick}
        />
    );
};

const Carousel: FC<{ items: Hardathons[] }> = ({ items }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 0,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <Slider {...settings}>
            {items.map((item) => (
                <div key={item.id}>
                    <HardathonCard
                        id={item.id}
                        title={item.title}
                        photo={item.photo}
                    />
                </div>
            ))}
        </Slider>
    );
};

const HardathonsPage: FC<HTMLAttributes<HTMLDivElement>> = () => {
    const { data: hardathons } = useQuery<Hardathons[]>({
        queryKey: ['new-list'],
        queryFn: hardathonsList,
        placeholderData: () => [eventPlaceholder],
    });

    return (
        <>
            <div className={"hardathons__background"}
                 style={{ backgroundImage: `linear-gradient(180deg, rgba(193, 49, 0, 0) 0%, rgba(193, 49, 0, 0.12) 100%), url(${HardathonsBG})`, backgroundSize: "cover"}}>
                <div className={'tw-h-24 md:tw-h-10 lg:tw-h-20'} />
                <h2 className={"hardathons__title"}>ХАРДАТОНЫ</h2>
                <div className={'tw-h-10 lg:tw-h-14 xl:tw-h-20'} />
                <div className="carousel-container">
                    <Carousel items={hardathons ?? []} />
                </div>
            </div>
        </>
    );
};

export default HardathonsPage;
