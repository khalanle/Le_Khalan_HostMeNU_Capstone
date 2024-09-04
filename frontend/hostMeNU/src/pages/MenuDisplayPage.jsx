import { useState } from 'react';

function MenuDisplayPage() {
    const [selectedEntree, setSelectedEntree] = useState(null);
    const [selectedCocktail, setSelectedCocktail] = useState(null);
    const [selectedDessert, setSelectedDessert] = useState(null);

    return (
        <div>
            <h1>Your Dinner Menu!</h1>
            <div>
                <h2>Entree</h2>
                {selectedEntree ? (
                    <div>
                        <h3>{selectedEntree.name}</h3>
                        <p>{selectedEntree.ingredients.join(', ')}</p>
                        <p>{selectedEntree.instructions}</p>
                    </div>
                ) : (
                    <p>No Entree Selected</p>
                )}
            </div>

            <div>
                <h2>Cocktail</h2>
                {selectedCocktail ? (
                    <div>
                        <h3>{selectedCocktail.name}</h3>
                        <p>{selectedCocktail.ingredients.join(', ')}</p>
                        <p>{selectedCocktail.instructions}</p>
                    </div>
                ) : (
                    <p>No Cocktail Selected</p>
                )}
            </div>

            <div>
                <h2>Dessert</h2>
                {selectedDessert ? (
                    <div>
                        <h3>{selectedDessert.name}</h3>
                        <p>{selectedDessert.ingredients.join(', ')}</p>
                        <p>{selectedDessert.instructions}</p>
                    </div>
                ) : (
                    <p>No Dessert Selected</p>
                )}
            </div>
        </div>
    );
}

export default MenuDisplayPage;
