import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const API = import.meta.env.VITE_APP_API_URL;

export default function SellersById() {
    const [seller, setSeller] = useState([])
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`${API}/sellers/${id}`)
            .then((res) => {
                console.log(res.data);
                setSeller(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div>
        </div>
    )
}