import { useState } from 'react';
import axios from 'axios';

export function useRecipes(category) {
    const [recipes, setRecipes] = useState([]);

    const fetchRecipes = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/`);
            setRecipes(response.data);
        } catch (error) {
            console.error('Error getting recipe', error);
        }
    };

    return { recipes, fetchRecipes };
}
