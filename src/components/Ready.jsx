import React, { useState } from 'react';

const Ready = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100">
    
      {!isVisible && (
        <button
        
          onClick={() => setIsVisible(true)}

          className="px-6 py-2 bg-blue-950 text-white rounded-lg"
        >
          Check Ingredients
        </button>
      )}
  
      {isVisible && (
        <div className="w-full max-w-2xl  rounded-xl p-8 flex flex-col md:flex-row items-center justify-between   border-gray-200 ">
          <div className="text-left mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-semibold text-black mb-2">
              Ready for a recipe?
            </h2>
            <p className="text-gray-500 text-lg">
              Generate a recipe from your list of ingredients.
            </p>
          </div>

          <button 
            className="bg-red-600 text-white font-medium px-8 py-3 rounded-xl text-lg"
            onClick={() => alert('Generating recipe...')}
          >
            Get a recipe
          </button>
        </div>
      )}
    </div>
  );
};

export default Ready;