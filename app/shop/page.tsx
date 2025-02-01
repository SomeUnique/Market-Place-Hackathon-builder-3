"use client"; // Add this at the very top of the file

import { groq } from "next-sanity";
import Common from "../../components/common";
import SearchFilter from "../../components/SearchFilter";
import { client } from "../../sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Pagination from "../../components/Pagination";

export default function ShopPage() {
  const query = groq`*[_type == "food"]{
        _id,
        name,
        category,
        price,
        originalPrice,
        tags,
        "imageUrl": image.asset->url
    }`;

  const [foods, setFoods] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch data on the client side
  useState(() => {
    async function fetchData() {
      const result = await client.fetch(query);
      setFoods(result);
      setLoading(false);
    }
    fetchData();
  },);

  // Pagination state
  const itemsPerPage = 6;
  const totalPages = Math.ceil(foods.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  // Paginated data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = foods.slice(startIndex, startIndex + itemsPerPage);

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!foods || foods.length === 0) {
    return <div>No food items found!</div>;
  }

  return (
    <div>
      <Common title="Our Shop" subtitle="shop" />
      
      {/* Search & Filter Component */}
      <div className="container mx-auto mt-5 ml-96">
        <SearchFilter foods={foods} />
      </div>

      {/* Food List */}
      <div className="w-full flex justify-center pb-10 bg-white">
        <div className="grid gap-2 grid-cols-1 md:grid-cols-3 my-12">
          {currentItems.map((food: any) => (
            <div className="p-4" key={food._id}>
              <div>
                <Link href={`/Food/${food._id}`}>
                  <Image
                    src={food.imageUrl}
                    alt={food.name}
                    width={200}
                    height={200}
                    className="w-full h-full rounded object-cover"
                  />
                </Link>
                <div className="p-2">
                  <h2 className="text-xl font-bold mt-4 mb-2">{food.name}</h2>
                  <p className="text-sm text-gray-600">{food.category}</p>
                  <p className="text-sm text-gray-600">{food.description}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="text-xl font-bold text-[#FF9F0D]">${food.price}</span>
                    {food.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">${food.originalPrice}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
