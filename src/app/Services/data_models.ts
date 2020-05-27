export interface Event{
    id: number;
    name: string;
    category: string;
    speaker?: string;
    emcee?: string;
    time: string;
    date: string;
    duration: number;
    venue?: {
      address?: string,
      building?: string,
      room?: string
    };
    onlineUrl?: string;
    participants: Participant[];
    description: string;
}

export interface Participant{
    fullName: string;
    position: string;
    company: string;
}