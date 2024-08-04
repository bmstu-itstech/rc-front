import "./hardathon.scss"
import Logo from "../../utils/logo/Logo"
import bizikov from "../../assets/images/bizikov.png"
import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AppConfig } from "../../../core";
import { useQuery } from '@tanstack/react-query';
import { hardathonID, hardathonList } from "../../../shown/api/hardathon";
import { useLocation } from "react-router-dom";
import { Hardathons, ShortHardathon } from "../../../dom/hardathon";
import { hardathonPlaceholder, hardathonShortPlaceholder } from './../../../shared/consts/placeholders'


export const Hardathon = () => {

    let location = useLocation();

    const { data: fullEvent } = useQuery<Hardathons>({
        queryKey: ['hardathonID', location],
        queryFn: () => fetch(`${location}`).then(r => r.json()),
        placeholderData: hardathonPlaceholder
    });

    const { data: hardathon } = useQuery<ShortHardathon[]>({
        queryKey: ['hardathon-list'],
        queryFn: () => hardathonList(),
        placeholderData: () => [hardathonShortPlaceholder],
    }
    );

    const items: ShortHardathon[] = hardathon ?? [];

    const [index, setIndex] = useState(0);


    const handleSelect = (selectedIndex: number) => {
        if (selectedIndex < 0)
            setIndex(items.length - 1);
        else if (selectedIndex >= items.length)
            setIndex(0);
        else
            setIndex(selectedIndex);
    };


    const slideRight = () => {
        const board = document.querySelector('.board');
        if (board) {
            const firstSlide = board.firstElementChild;
            const lastSlide = board.lastElementChild;
            if (firstSlide) {
                board.removeChild(firstSlide);
                board.appendChild(firstSlide);
            }
        }
    }

    const slideLeft = () => {
        const board = document.querySelector('.board');
        if (board) {
            const firstSlide = board.firstElementChild;
            const lastSlide = board.lastElementChild;
            if (lastSlide) {
                board.removeChild(lastSlide);
                board.insertBefore(lastSlide, firstSlide);
            }
        }
    }

    return (
        <section className={"page events-page"}>
            <Logo title="Хардатон 2024"/>
            <div className={"board-outer d-flex justify-content-center"}>
                <div className="board">
                    <div className={"bizikov-pic"}>
                        <div className={"d-flex justify-content-center"}>
                            <img src={fullEvent?.main_organizer_photo} alt="main_organizer_photo" />
                        </div>

                    </div>
                    <div className={"box-hardathon d-inline-block"}>
                        <div className={"quote"}>
                            <p></p>
                            <p className={"author"}>{fullEvent?.main_organizer_word}— главный организатор хардатона,
                                Валерий Бизиков </p>
                        </div>
                        <div className={"buttons"}>
                            <Link to={"/hardathons/1/details"}>
                                <button className={"event-btn w-400"}>
                                    <p className="fw-bolder fs-4 text-uppercase text-light m-0">подробнее</p>
                                </button>
                            </Link>
                            <button className={"event-btn w-400"}>
                                <p className="fw-bolder fs-4 text-uppercase text-light m-0">подать заявку</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}