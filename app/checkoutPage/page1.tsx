import React from 'react'

const page1 = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white">
    <h2 className="text-2xl font-bold mb-6">Shipping Address</h2>
    <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Name */}
            <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                    type="text"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                    />
            </div>
            {/* Last Name */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                    type="text"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                    />
            </div>
            {/* Email Address */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                    type="email"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                     />
            </div>
            {/* Phone Number */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                    type="text"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                    />
            </div>
            {/* Company */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input
                    type="text"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                    />
            </div>
            {/* Country */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Country</label>
                <select
                    className="w-full mt-1 p-2 border border-gray-300 text-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                >
                    <option>Choose country</option>
                    <option>Pakistan</option>
                    <option>USA</option>
                    <option>Canada</option>
                    <option>UK</option>
                </select>
            </div>
            {/* City */}
            <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <select
                    className="w-full mt-1 p-2 border border-gray-300 text-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                >
                    <option>Choose city</option>
                    <option>Karachi</option>
                    <option>New York</option>
                    <option>Toronto</option>
                    <option>London</option>
                </select>
            </div>
            {/* Zip Code */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Zip Code</label>
                <input
                    type="text"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                    />
            </div>
            {/* Address 1 */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Address 1</label>
                <input
                    type="text"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                    />
            </div>
            {/* Address 2 */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Address 2</label>
                <input
                    type="text"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                    />
            </div>
        </div>

        {/* Billing Address Checkbox */}
        <div className="mt-4 flex items-center">
            <input
                id="same-as-shipping"
                type="checkbox"
                className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded" />
            <label
                htmlFor="same-as-shipping"
                className="ml-2 block text-sm text-gray-700"
            >
                Same as shipping address
            </label>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-between gap-10 my-24">
            <button
                type="button"
                className="w-[424px] h-[56px] px-4 py-2 text-gray-700 gap-2 border-gray-300 border-[2px]  hover:bg-gray-300"
            >
                Back to cart
            </button>
            <button
                type="submit"
                className=" w-[424px] h-[56px] px-6 py-2 gap-2 text-white bg-[#FF9f0D] "
            >
                Proceed to shipping
            </button>
        </div>
    </form>
</div>
);
}
export default page1
