interface ShortHardathon {
    id: number;
    title: string;
    main_organizer_photo: string;
}

interface Hardathons extends ShortHardathon {
    photo: string;
    photo_album_url: string;
    documents_url: string;
    location_url: string;
    date_for_accepting_application: string;
    closing_date_for_applications: string;
    summing_up_date: string;
    main_organizer_photo: string;
    main_organizer_word: string;
    competition_task: string;
}
export type { Hardathons, ShortHardathon };
