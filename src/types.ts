export type RewardStatus = "locked" | "unlocked" | "coming_soon";
export type RewardFilter = "all" | "unlocked" | "locked" | "coming-soon";


export type RewardProps = {
    id: string;
    title: string;
    description: string;
    points_required: number;
    status: RewardStatus;
    icon: string;
}