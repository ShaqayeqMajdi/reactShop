export default function EditModal({ closeModal, product }) {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[500px] overflow-y-auto border border-gray-100">
          <div className="relative p-6 bg-gray-400 rounded-t-3xl">
            <div className="absolute inset-0 bg-black/10 rounded-t-3xl"></div>
            <div className="relative flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white drop-shadow-md flex items-center gap-3">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                </svg>
                Edit Product
              </h3>
              <button onClick={closeModal} className="p-2.5 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>

          <form className="p-6 space-y-6 bg-linear-to-b from-gray-50 to-white">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Product Image</label>
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 p-1 rounded-xl overflow-hidden shadow-md border-2 border-dashed border-gray-300">
                  <img src={product.image} alt={product.title} className="w-full h-full object-contain"/>
                </div>
                <label className="flex-1">
                  <div className="flex flex-col items-center justify-center h-24 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-gray-100 hover:bg-gray-200/80 duration-700">
                    <p className="text-sm text-gray-700 font-medium">Change Image</p>
                    <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                  </div>
                  <input type="file" className="hidden" />
                </label>
              </div>
            </div>

            {/* Product Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Product Name</label>
              <input type="text" defaultValue={product.title} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl 
              focus:ring-1 focus:ring-gray-500 focus:border-gray-500 outline-none transition-all shadow-sm"/>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
              <textarea rows={3} defaultValue={product.description} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl 
              focus:ring-1 focus:ring-gray-500 focus:border-gray-500 outline-none transition-all shadow-sm resize-none"></textarea>
            </div>

            {/* Price & Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Price ($)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">$</span>
                  <input type="number" step="0.01" min="0" defaultValue={product.price} className="w-full pl-8 pr-4 py-3 bg-white border border-gray-200 rounded-xl 
                  focus:ring-1 focus:ring-gray-500 focus:border-gray-500 outline-none transition-all shadow-sm"/>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                <select defaultValue={product.category} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl 
                focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none transition-all shadow-sm text-gray-700">
                  <option value="">Select category</option>
                  <option>Electronics</option>
                  <option>Jewelry</option>
                  <option>Men</option>
                  <option>Women</option>
                </select>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
              <button type="button" onClick={closeModal} className="px-6 py-2.5 cursor-pointer text-gray-600 bg-gray-100 rounded-xl 
              hover:bg-gray-200 transition-all font-medium shadow-sm">
                Cancel
              </button>
              <button type="button" onClick={closeModal} className="px-6 py-2.5 cursor-pointer bg-linear-to-r from-gray-500 to-gray-600 text-white rounded-xl 
              hover:shadow-md hover:shadow-black/40 transition-all font-semibold flex items-center gap-2 shadow-md">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                </svg>
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
