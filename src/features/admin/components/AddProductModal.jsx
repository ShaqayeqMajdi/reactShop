export default function AddProductModal({ closeModal }) {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <div className="bg-gray-50 rounded-2xl shadow-2xl w-full  h-[550px] max-w-xl overflow-y-auto animate-in fade-in zoom-in duration-300">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800">Add New Product</h3>
            <button onClick={closeModal} className="p-2 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          {/* Form */}
          <form className="p-6 space-y-6">
            {/* Image */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-3"></label>
              <label className="flex flex-col items-center justify-center w-full h-44 border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer bg-Cultured  
              hover:shadow-lg transition-all duration-300 shadow-md">
                <div className="flex flex-col items-center justify-center pt-5 pb-6 space-y-2">
                  <div className="p-3 bg-white/70 rounded-full shadow-inner">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/>
                    </svg>
                  </div>
                  <p className="text-sm text-gray-700 font-medium">
                    <span className="underline decoration-gray-500">Click to upload</span>
                    or drag & drop
                  </p>
                  <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                </div>
                <input type="file" className="hidden" />
              </label>
            </div>

            {/* Product Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
              <input type="text" required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400/50 
                focus:border-transparent outline-none transition-all" placeholder="Enter product name"/>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea rows={4} required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400/50 
                focus:border-transparent outline-none transition-all resize-none" placeholder="Describe your product..."></textarea>
            </div>

            {/* Price & Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
                <input type="number" step="0.01" min="0" required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 
                focus:ring-gray-400/50 focus:border-transparent outline-none transition-all" placeholder="29.99"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400/50 
                focus:border-transparent outline-none transition-all">
                  <option value="">Select category</option>
                  <option>Electronics</option>
                  <option>Jewelry</option>
                  <option>Men</option>
                  <option>Women</option>
                </select>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
              <button type="button" onClick={closeModal} className="px-5 py-2.5  text-gray-700 bg-Cultured rounded-lg hover:shadow-md duration-500 font-medium cursor-pointer">
                Cancel
              </button>
              <button type="submit" onClick={(evt) => {evt.preventDefault(); closeModal();}}
                className="px-4 py-2.5 text-gray-700 bg-Cultured rounded-lg hover:shadow-md duration-500 font-semibold cursor-pointer text-sm">
                + Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
