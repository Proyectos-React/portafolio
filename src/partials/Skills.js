import React from 'react';

import { FaReact } from 'react-icons/fa';
import { FaAngular } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { FaMobile } from 'react-icons/fa';

export const Skills = () => {
    return (
        <div className="flex flex-col sm:flex-row align-center justify-center max-w-2xl mx-auto mt-8">
            <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
                <FaAngular className="text-4xl mx-auto inline-block" />
                <p className="text-xl font-semibold mt-4">
                    Angular
                </p>
            </div>
            <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
                <FaReact className="text-4xl mx-auto inline-block" />
                <p className="text-xl font-semibold mt-4">
                    ReactJS
                </p>
            </div>
            <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
                <FaNodeJs className="text-4xl mx-auto inline-block" />
                <p className="text-xl font-semibold mt-4">
                    NodeJs
                </p>
            </div>
            <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
                <FaMobile className="text-4xl mx-auto inline-block" />
                <p className="text-xl font-semibold mt-4">
                    Flutter
                </p>
            </div>
        </div>
    )
}
