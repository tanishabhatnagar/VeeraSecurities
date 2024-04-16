import Image from 'next/image';

const ServicesGrid = () => {
    // Array to represent services
    const services = [
        'Security Guards', 'Lady Guards', 'Gun Man', 'Party Coverage House Keeping',
        'Office boy', 'Receptionist', 'Personal Security officer', 'College Security',
        'Hospital Security', 'Mall Security', 'Event Security', 'Residential Security',
        'Industrial Security', 'ATM/Bank Security', 'Hospital Security', // Duplicate
        'Cash Escort Security', 'Commercial Security'
    ];

    // Calculate rows for mobile and large screens
    const mobileColumnsPerRow = 2;  // Mobile screens have 2 columns
    const desktopColumnsPerRow = 5; // Desktop screens have 5 columns

    const mobileRows = Math.ceil(services.length / mobileColumnsPerRow);
    const desktopRows = Math.ceil(services.length / desktopColumnsPerRow);

    return (
        <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/images/bg.jpg")' }}>
            <div className="backdrop-filter h-full">
                <div className="text-center p-10">
                    <h1 className="text-white text-2xl md:text-4xl font-bold">Our Services</h1>
                </div>
                <div className="flex justify-center p-10">
                    <table className="w-full md:w-4/5 text-white">
                        <tbody>
                            {/* Render mobile layout */}
                            {[...Array(mobileRows)].map((_, rowIndex) => (
                                <tr key={`mobile-${rowIndex}`} className="md:hidden">
                                    {[...Array(mobileColumnsPerRow)].map((_, colIndex) => {
                                        const index = rowIndex * mobileColumnsPerRow + colIndex;
                                        return (
                                            <td key={`mobile-col-${colIndex}`} className="border border-gray-500 p-2 text-center" style={{ minHeight: '50px' }}>
                                                {services[index] || ''}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                            {/* Render desktop layout */}
                            {[...Array(desktopRows)].map((_, rowIndex) => (
                                <tr key={`desktop-${rowIndex}`} className="hidden md:table-row">
                                    {[...Array(desktopColumnsPerRow)].map((_, colIndex) => {
                                        const index = rowIndex * desktopColumnsPerRow + colIndex;
                                        return (
                                            <td key={`desktop-col-${colIndex}`} className="border border-gray-500 p-4 text-center" style={{ minHeight: '100px' }}>
                                                {services[index] || ''}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ServicesGrid;
