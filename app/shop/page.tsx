
import Image from "next/image";
import Link from "next/link";
import Common from "../../components/common";
import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";


type Food = {
  _id: string;
  name: string;
  category?: string;
  price: number;
  originalPrice?: number;
  tags?: string[];
  image: { asset: { _id: string; url: string } };
  description?: string;
  available: boolean;
};

export default async function ShopPage() {
  const query = groq`*[_type == "food"]{
        _id,
        name,
        category,
        price,
        originalPrice,
        tags,
        "imageUrl": image.asset->url
        }`
  const foods: any = await client.fetch(query)
  console.log("Fetched Foods:", foods);
  if (!foods || foods.length === 0) {
    return <div>No food items found!</div>;
  }
// ab check kro data aa rha ahi aya nhii ....
  return (
    <div>
      <Common title="Our Shop" subtitle="shop" />
      <div className="w-full flex justify-center pb-10 bg-white">
        <div className="grid gap-2 grid-cols-1 md:grid-cols-3 justify-center items-center my-12">
          {foods?.map((food:any) => (
            <div className="p-4" key={food._id}>
              <Link href={`/shop/${food._id}`}>
                <div>
                  <Image
                    src={food.imageUrl}
                    alt={food.name}
                    width={200}
                    height={200}
                    className="w-full h-full rounded object-cover"
                  />
                  <div className="p-2">
                    <h2 className="text-xl font-bold mt-4 mb-2">{food.name}</h2>
                    <p className="text-sm text-gray-600">{food.category}</p>
                    <p className="text-sm text-gray-600">{food.description}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="text-xl font-bold text-[#FF9F0D]">
                        ${food.price}
                      </span>
                      {food.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ${food.originalPrice}
                        </span>
                      )}
                    </div>
                    <button
                      className={`w-full py-2 px-4 text-white font-semibold rounded-lg ${
                        food.available ? "bg-[#FF9F0D]" : "bg-gray-400 cursor-not-allowed"
                      }`}
                      disabled={!food.available}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
