import "./hardathon.scss"
import Logo from "../../utils/logo/Logo"
import bizikov from "../../assets/images/bizikov.png"
import React, {ReactElement, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {AppConfig} from "../../../core";
import {useQuery} from '@tanstack/react-query';
import {hardathonID, hardathonList} from "../../../shown/api/hardathon";

import {Hardathons, ShortHardathon} from "../../../dom/hardathon";



export const Hardathon = () => {
    const hardathonPlace: Hardathons = {
        id: -1,
        title: '',
        photo_album_url:'',
        documents_url:'',
        location_url:'',
        date_for_accepting_application:'',
        closing_date_for_applications:'',
        summing_up_date:'',
        main_organizer_photo:'',
        main_organizer_word: '',
        competition_task:'',
    }

    const {data: hardathon} = useQuery<ShortHardathon[]>({
            queryKey: ['hardathon-list'],
            queryFn: () => hardathonList(),
            placeholderData: () => [
                {
                    id:1,
                    title:'Hardathons',
                    main_organizer_photo:'',
                    main_organizer_word: '',
                }
            ],
        }
    );

    const items: ShortHardathon[] = hardathon ?? [];

    const [index, setIndex] = useState(0);

    const {data: fullEvent} = useQuery<Hardathons>({
        enabled: items[index] !== undefined && items[index].id >= 0,
        queryKey: ['hardathon', items[index]?.id],
        queryFn: () => fetch('${AppConfig.apiUri}/api/v0/hardathons/${items[index].id}/').then(r => r.json()),
    placeholderData: _ => hardathonPlace
});

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
                            <img src={bizikov} alt=""/>
                        </div>

                    </div>
                    <div className={"box-hardathon d-inline-block"}>
                        <div className={"quote"}>
                            <p>Давно полюбившийся формат робототехнических соревнований, где в течение нескольких дней финала участники разрабатывают робототехнический проект на определённую тему, а затем командам предстоит защитить свою работу.</p>
                            <p className={"author"}>— главный организатор хардатона,
                                Валерий Бизиков</p>
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