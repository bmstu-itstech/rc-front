interface ShortHardathon {
    id:number;
    title: string;
}

interface Hardathons extends ShortHardathon {
   photo_album_url:string;
   documents_url:string;
   location_url:string;
   date_for_accepting_application:string;
   closing_date_for_applications:string;
   summing_up_date:string;
   competition_task:string;
    main_organizer_photo:string;
    main_organizer_word: string;
}
export type { Hardathons, ShortHardathon };