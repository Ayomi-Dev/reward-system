import { useEffect, useState } from "react";
import { supabase } from "../lib/SupabaseClient";


export const useRewards = () => {
    const [rewards, setRewards] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchRewards = async () => {
        setLoading(true);
        const { data, error } = await supabase
        .from("rewards")
        .select("*") // fetches the list of the reward objects from the reward table;

        if(error) {
            console.log("Error fetchng rewards:", error.message);
            setLoading(false);
            return
        }

        setRewards( data || []);
        setLoading(false);
    }

    useEffect(() => {
        fetchRewards();
    }, [])

    return { rewards, fetchRewards, loading}
}