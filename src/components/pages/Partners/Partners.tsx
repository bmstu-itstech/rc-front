import "./partners.scss"
import React, { useEffect, useState } from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Logo from "../../utils/logo/Logo"
import { Link } from "react-router-dom";
import { AppConfig } from "../../../core";
import { Partners } from "../../../domain/entities/partners";
import { useQuery } from "@tanstack/react-query";
import { partnersList } from "../../../shared/apis/partners";
import { eventPlaceholder } from '../../../shared/placeholders/partners'

export const PartnersPage = () => {

    const { data: partners } = useQuery<Partners[]>({
        queryKey: ['partner-list'],
        queryFn: partnersList,
        placeholderData: () => [eventPlaceholder],
    }
    );


    const responsive = {
        0: { items: 1 },
        750: { items: 2 },
        1050: { items: 3 },
        1550: { items: 4 }
    };

    const Carousel = ({ items }: { items: Partners[] }) => (
        <AliceCarousel
            mouseTracking
            items={items.map((item, index) => (
                <div key={index}>
                    <Link to={item.link}>
                        <div className={"partner-card"}>
                            <img src={`https://img.freepik.com/free-photo/the-adorable-illustration-of-kittens-playing-in-the-forest-generative-ai_260559-483.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1723420800&semt=ais_hybrid`}/>
                        </div>
                    </Link>
                </div>
            ))}
            responsive={responsive}
            controlsStrategy="alternate"
            disableButtonsControls={true}
            infinite={true}
        />
    );


    return (
        <>
            <section className={"page page-section"}>
                <Logo title="наши партнёры"/>
                <div className={"carousel-outer"}>
                    <Carousel items={partners ?? []}/>
                </div>
            </section>
        </>
    )
}