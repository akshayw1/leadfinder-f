import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { searchSchema } from '../../validations/inputValidation';
import { freesearch } from '../../redux/reducers/searchSlice';
import TableComp from '../TableComp/TableComp';

const SearchCardHome = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const { isLoading } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(searchSchema) });

  const exampleSearches = [
    { position: 'Web Designer', city: 'New York' },
    { position: 'Software Engineer', city: 'San Francisco' },
    { position: 'Marketing Specialist', city: 'Chicago' },
    { position: 'Data Analyst', city: 'Boston' },
    { position: 'UX Researcher', city: 'Seattle' },
  ];

  const onSubmit = async (searchData) => {
    try {
      setIsSearchOpen(true);
      setSearchResults(null);

      const response = await dispatch(freesearch(searchData)).unwrap();
      
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSearchOpen(false);
      // setTimeout(() => { 
      // }, 1000);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <div className="flex-1">
            <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
              Position or Keyword
            </label>
            <input
              type="text"
              id="position"
              {...register('position')}
              placeholder="e.g., Web Designer"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.position && <p className="mt-1 text-sm text-red-600">{errors.position.message}</p>}
          </div>
          <div className="flex-1">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              id="city"
              {...register('city')}
              placeholder="e.g., New York"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>}
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full sm:w-auto px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Finding Please Wait...
            </>
          ) : (
            'Search'
          )}
        </button>
        
      </form>

      {isSearchOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="search-modal">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Searching</h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500">
                  We are finding leads for you. Please wait for 2-3 minutes depending on your leads count.
                  Thanks for using Boomnify!!!🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

          {!searchResults &&
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Example Searches:</h3>
        <div className="overflow-x-auto">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {exampleSearches.map((search, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{search.position}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{search.city}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button 
                      className="text-indigo-600 hover:text-indigo-900"
                      onClick={() => {
                        setValue('position', search.position);
                        setValue('city', search.city);
                      }}
                    >
                      Use
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
          }

      {searchResults && (
  <div className="mt-6">
    <h3 className="text-lg font-medium text-white mb-4">
      Found {searchResults.length} result{searchResults.length !== 1 && 's'}:
    </h3>
    <TableComp tableData={searchResults} Dhidden={true} Blurred={true} />
  </div>
)}

      <div className="text-center">
        <a href="/howtosearch" className="inline-flex items-center text-sm text-gray-600 hover:text-indigo-600">
          Learn how to search effectively
          <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default SearchCardHome;