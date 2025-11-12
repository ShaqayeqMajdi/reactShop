export default function DeleteModal({ closeModal }) {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-xs">
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md h-auto border border-red-100 overflow-hidden animate-in fade-in zoom-in duration-300">
          <div className="relative p-6 bg-red-600 rounded-t-3xl">
            <div className="absolute inset-0 bg-black/10 rounded-t-3xl"></div>
            <div className="relative flex items-center justify-between">
              <h3 className="text-xl font-bold text-white drop-shadow-md flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                  </svg>
                </div>
                Delete Product?
              </h3>
            </div>
          </div>

          <div className="p-6 space-y-4 bg-linear-to-b from-gray-50 to-white">
            <p className="text-gray-700 leading-relaxed">
              Are you sure you want to delete this product?
            </p>
            <p className="text-sm text-red-600 font-medium">
              This action<span className="underline ml-1">cannot be undone</span>.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end gap-3 p-6 pt-4 border-t border-gray-100 bg-gray-50">
            <button onClick={closeModal} className="px-6 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-xl cursor-pointer 
              hover:bg-gray-100 transition-all duration-200 font-medium shadow-sm">
              Cancel
            </button>
            
            <button onClick={closeModal} className="px-6 py-2.5 cursor-pointer bg-red-600 text-white rounded-xl 
            hover:shadow-red-500/40 transition-all duration-300 font-semibold flex items-center gap-2 shadow-md">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
              </svg>
              Delete Product
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
