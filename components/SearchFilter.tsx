"use client";
import { useState, useEffect } from "react";

type Food = {
  _id: string;
  name: string;
  category?: string;
  price: number;
  originalPrice?: number;
  tags?: string[];
  imageUrl: string;
  description?: string;
  available: boolean;
};

export default function SearchFilter({
  foods,
  onFilterChange,
}: {
  foods: Food[];
  onFilterChange: (filteredFoods: Food[]) => void;
}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);

  // Extract unique categories from foods
  const categories = Array.from(new Set(foods.map((food) => food.category).filter(Boolean)));

  // Effect to filter foods whenever filters change
  useEffect(() => {
    const filtered = foods.filter((food) => {
      const matchesSearch = food.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category ? food.category === category : true;
      const matchesPrice = food.price >= priceRange[0] && food.price <= priceRange[1];

      return matchesSearch && matchesCategory && matchesPrice;
    });

    onFilterChange(filtered);
  }, [search, category, priceRange, foods, onFilterChange]); // Dependencies: Filters & foods list

  return (
    <div className="p-4 ml-20">
      <h2 className="text-lg font-bold mb-4">Filter & Search</h2>

      <div className="flex flex-wrap gap-6 items-center">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded w-64"
        />

        {/* Category Dropdown */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded w-48"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Price Range */}
        <div className="flex items-center gap-4">
          <label className="text-sm font-bold">Price: ${priceRange[0]} - ${priceRange[1]}</label>
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
            className="cursor-pointer"
          />
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
