import React, { FormEventHandler, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
import { toast } from "react-toastify";

function Tourist({ tourist }: any) {
    const {
        data,
        setData,
        post,
        delete: destroy,
        put,
        reset,
    } = useForm({
        id: null,
        name: "",
        age: "",
        phone: "",
        country: "",
        address: "",
    });

    const [selectedTourist, setSelectedTourist] = useState<any>(null);

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        if (selectedTourist) {
          put(route("tourist.update", {id: selectedTourist.id}), {
            onSuccess: () => {
                toast.success("Tourist Updated");
                reset();
            },
            onError: () => toast.error("Error."),
        });
        }else {
          post(route("tourist.store"), {
            onSuccess: () => {
                toast.success("Tourist Added");
                reset();
            },
            onError: () => toast.error("Error."),
        });
        }
        
    };

    const handleUpdate = (tourist: any) => {
        setSelectedTourist(tourist);
        setData({
            id: tourist.id,
            name: tourist.name,
            age: tourist.age,
            phone: tourist.phone,
            country: tourist.country,
            address: tourist.address,
        });
    };

    const handleDelete = (id: number) => {
        destroy(route("tourist.destroy", id), {
            onSuccess: () => toast.success("Tourist deleted"),
            onError: () => toast.error("Error"),
        });
    };

    return (
        <AuthenticatedLayout>
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="flex flex-col md:flex-row justify-center items-start gap-10 max-w-screen-xl mx-auto">
                    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                        <div className="mb-5">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-800"
                            >
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-200 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Jenna Max"
                                required
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="age"
                                className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-800"
                            >
                                Your Age
                            </label>
                            <input
                                type="number"
                                id="age"
                                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-200 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                                value={data.age}
                                onChange={(e) => setData("age", e.target.value)}
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="phone"
                                className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-800"
                            >
                                Your Phone
                            </label>
                            <input
                                type="text"
                                id="phone"
                                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-200 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="+94 77 265 564 89"
                                required
                                value={data.phone}
                                onChange={(e) =>
                                    setData("phone", e.target.value)
                                }
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="country"
                                className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-800"
                            >
                                Your Country
                            </label>
                            <input
                                type="text"
                                id="country"
                                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-200 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                                value={data.country}
                                onChange={(e) =>
                                    setData("country", e.target.value)
                                }
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="address"
                                className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-800"
                            >
                                Your Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-200 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                                value={data.address}
                                onChange={(e) =>
                                    setData("address", e.target.value)
                                }
                            />
                        </div>

                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            {selectedTourist ? "Update" : "Submit"}
                        </button>
                    </form>

                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Age
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Phone
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Country
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Address
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Delete
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Update
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {tourist.map((tourist: any) => (
                                    <tr
                                        key={tourist.id}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                                    >
                                        <td className="px-6 py-4">
                                            {tourist.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {tourist.age}
                                        </td>
                                        <td className="px-6 py-4">
                                            {tourist.phone}
                                        </td>
                                        <td className="px-6 py-4">
                                            {tourist.country}
                                        </td>
                                        <td className="px-6 py-4">
                                            {tourist.address}
                                        </td>
                                        <td
                                            onClick={() =>
                                                handleDelete(tourist.id)
                                            }
                                            className="px-6 py-4"
                                        >
                                            x
                                        </td>
                                        <td
                                            onClick={() =>
                                                handleUpdate(tourist)
                                            }
                                            className="px-6 py-4"
                                        >
                                            edit
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Tourist;
