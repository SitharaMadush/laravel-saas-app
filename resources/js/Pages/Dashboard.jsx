import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth, usedFeatures }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
                            <table class="w-full text-sm text-left rtl:text-right text-body">
                                <thead class="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                                    <tr>
                                        <th
                                            scope="col"
                                            class="dark:text-white px-6 py-3 font-medium"
                                        >
                                            Feature
                                        </th>
                                        <th
                                            scope="col"
                                            class="dark:text-white px-6 py-3 font-medium"
                                        >
                                            Credits
                                        </th>
                                        <th
                                            scope="col"
                                            class="dark:text-white px-6 py-3 font-medium"
                                        >
                                            Date
                                        </th>
                                        <th
                                            scope="col"
                                            class="dark:text-white px-6 py-3 font-medium"
                                        >
                                            Additional Data
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usedFeatures.data.map((usedFeature) => (
                                        <tr
                                            key={usedFeature.id}
                                            scope="row"
                                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                        >
                                            <td className="px-6 py-4 font-medium text-heading whitespace-nowrap dark:text-white">
                                                {usedFeature.feature.name}
                                            </td>
                                            <td className="px-6 py-4 font-medium text-heading whitespace-nowrap dark:text-white">
                                                {usedFeature.credits}
                                            </td>
                                            <td className="px-6 py-4 font-medium text-heading whitespace-nowrap dark:text-white">
                                                {usedFeature.created_at}
                                            </td>
                                            <td className="px-6 py-4 font-medium text-heading whitespace-nowrap dark:text-white">
                                                {JSON.stringify(usedFeature.data)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
