'use client'

import React, { createContext, useContext, useState } from 'react';

interface BasketItem {
    id: number;
    title: string;
    price: string;
}

interface BasketContextProps {
    basketItems: BasketItem[];
    addItem: (item: BasketItem) => void;
    removeItem: (id: number) => void;
    clearBasket: () => void;
}

const BasketContext = createContext<BasketContextProps | undefined>(undefined);

export const BasketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [basketItems, setBasketItems] = useState<BasketItem[]>([]);

    const addItem = (item: BasketItem) => {
        setBasketItems((prevItems) => [...prevItems, item]);
    };

    const removeItem = (id: number) => {
        setBasketItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const clearBasket = () => {
        setBasketItems([]);
    };

    return (
        <BasketContext.Provider value={{ basketItems, addItem, removeItem, clearBasket }}>
            {children}
        </BasketContext.Provider>
    );
};

export const useBasket = (): BasketContextProps => {
    const context = useContext(BasketContext);
    if (!context) {
        throw new Error('useBasket must be used within a BasketProvider');
    }
    return context;
};