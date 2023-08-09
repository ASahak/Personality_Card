import * as React from "react";

const ErrorFallback = () => {
    return (
        <div className="flex flex-col items-center h-[100vh] w-full justify-center">
            <h3 className="text-xl font-semibold text-red-400">Ooops, something went wrong! </h3>
            <div className="flex">
                <button className="mt-4" onClick={() => window.location.assign(window.location.origin)} colorScheme="gray">
                    Refresh
                </button>
                <button className="mt-4" onClick={() => window.location.href = '/'} colorScheme="green">
                    Go to home
                </button>
            </div>
        </div>
    );
};
export default ErrorFallback;